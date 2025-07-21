import { Pinecone } from "@pinecone-database/pinecone";
import { CONSTANTS } from "../utils/constants";

class PineconeServiceClass {
  constructor() {
    this.pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });

    this.indexName = CONSTANTS.INDEX_NAME;
    this.index = null;
  }

  async ensureIndexExists() {
    try {
      const indexList = await this.pinecone.listIndexes();
      const indexExists = indexList.indexes?.some(
        (index) => index.name === this.indexName
      );

      if (!indexExists) {
        console.log(`Creating index: ${this.indexName}`);
        await this.pinecone.createIndex({
          name: this.indexName,
          dimension: 1536,
          metric: "cosine",
          spec: {
            serverless: {
              cloud: "aws",
              region: "us-east-1",
            },
          },
        });

        console.log("Waiting for index to be ready...");
        await this.waitForIndexReady();
      }

      this.index = this.pinecone.index(this.indexName);
      console.log(`Connected to index: ${this.indexName}`);
    } catch (error) {
      console.error("Error ensuring index exists:", error);
      throw new Error(`Failed to ensure index exists: ${error.message}`);
    }
  }

  async waitForIndexReady(maxWaitTime = 60000) {
    const startTime = Date.now();
    while (Date.now() - startTime < maxWaitTime) {
      try {
        const indexStats = await this.pinecone.describeIndex(this.indexName);
        if (indexStats.status?.ready) {
          console.log("Index is ready!");
          return;
        }
        console.log("Index not ready yet, waiting...");
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }

    throw new Error("Index did not become ready within the expected time");
  }

  async documentExists(docId) {
    try {
      if (!this.index) await this.ensureIndexExists();

      const queryResponse = await this.index.query({
        vector: new Array(1536).fill(0),
        filter: { docId },
        topK: 1,
        includeMetadata: false,
      });

      return queryResponse.matches && queryResponse.matches.length > 0;
    } catch (error) {
      console.error("Error checking if document exists:", error);
      return false;
    }
  }

  async upsertVectors(vectors) {
    try {
      if (!this.index) await this.ensureIndexExists();

      console.log(`Upserting ${vectors.length} vectors to Pinecone`);

      const batchSize = 100;
      for (let i = 0; i < vectors.length; i += batchSize) {
        const batch = vectors.slice(i, i + batchSize);
        await this.index.upsert(batch);
        console.log(
          `Upserted batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(
            vectors.length / batchSize
          )}`
        );
      }

      console.log("All vectors upserted successfully");
    } catch (error) {
      console.error("Error upserting vectors:", error);
      throw new Error(`Failed to upsert vectors: ${error.message}`);
    }
  }

  async queryVectors(queryVector, filter = {}, topK = 2) {
    try {
      if (!this.index) await this.ensureIndexExists();

      const queryResponse = await this.index.query({
        vector: queryVector,
        topK,
        includeMetadata: true,
        ...(Object.keys(filter).length ? { filter } : {}),
      });

      return queryResponse.matches || [];
    } catch (error) {
      console.error("Error querying vectors:", error);
      throw new Error(`Failed to query vectors: ${error.message}`);
    }
  }

  async getIndexStats() {
    try {
      if (!this.index) await this.ensureIndexExists();

      const stats = await this.index.describeIndexStats();

      const queryRes = await this.index.query({
        vector: new Array(1536).fill(0),
        topK: 100,
        includeMetadata: true,
      });

      const documents = new Map();
      queryRes.matches.forEach((match) => {
        if (match.metadata?.docId && match.metadata?.sourceUrl) {
          documents.set(match.metadata.docId, {
            docId: match.metadata.docId,
            sourceUrl: match.metadata.sourceUrl,
            addedAt: match.metadata.addedAt,
          });
        }
      });

      return {
        totalVectors: stats.totalVectorCount,
        documents: Array.from(documents.values()),
      };
    } catch (error) {
      console.error("Error getting index stats:", error);
      throw new Error(`Failed to get index stats: ${error.message}`);
    }
  }
}

const PineconeService = new PineconeServiceClass();
export default PineconeService;

import getRawBody from "raw-body";
import EmbeddingService from "../../services/embeddingService";
import PineconeService from "../../services/pineconeService";
import { successResponse } from "../../utils/response";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  console.log("API handler called:", req.method, req.url);
  // ✅ Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.writeHead(405, {
      "Access-Control-Allow-Origin": "*",
    });
    res.end("Method Not Allowed");
    return;
  }

  try {
    const rawBody = await getRawBody(req);
    const { userQuestion } = JSON.parse(rawBody.toString());

    if (!userQuestion || typeof userQuestion !== "string") {
      res.writeHead(400, {
        "Access-Control-Allow-Origin": "*",
      });
      res.end("Invalid user question");
      return;
    }

    // 1. Create embedding of the user question
    const embedding = await EmbeddingService.createEmbedding(userQuestion);

    // 2. Query Pinecone with the question embedding
    const queryRes = await PineconeService.queryVectors(
      embedding,
      undefined,
      5
    );

    if (!queryRes || queryRes.length === 0) {
      res.writeHead(404, {
        "Access-Control-Allow-Origin": "*",
      });
      res.end("No relevant context found");
      return;
    }

    // 3. Sort matches by relevance score
    const sortedMatches = queryRes.sort((a, b) => b.score - a.score);
    console.log("Sorted matches by relevance:", sortedMatches);

    // 4. Build context from top 3 matches
    const topChunks = sortedMatches.slice(0, 3);
    const context = topChunks
      .map((match) => `(${match.metadata.addedAt}) ${match.metadata.text}`)
      .join("\n\n---\n\n");

    // 5. Start streaming response
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
    });

    const stream = EmbeddingService.streamAnswer(context, userQuestion);
    let assistentAnswer = "";

    for await (const chunk of stream) {
      const textChunk = chunk.toString();
      assistentAnswer += textChunk;
      res.write(textChunk);
    }

    // 6. Get embedding of the assistant's answer
    const answerEmbedding = await EmbeddingService.createEmbedding(
      assistentAnswer
    );

    // 7. Re-query Pinecone with the assistant answer embedding
    const answerQueryRes = await PineconeService.queryVectors(
      answerEmbedding,
      undefined,
      5
    );

    const sortedAnswerMatches = answerQueryRes.sort(
      (a, b) => b.score - a.score
    );
    const mostRelevantMatch = sortedAnswerMatches[0];

    // 8. Return final metadata
    const successPayload = successResponse({
      userQuestion,
      assistentAnswer,
      source: {
        id: mostRelevantMatch.id,
        docId: mostRelevantMatch.metadata.docId,
        chunkIndex: mostRelevantMatch.metadata.chunkIndex,
        sourceUrl: mostRelevantMatch.metadata.sourceUrl,
        originalText: mostRelevantMatch.metadata.text,
        addedAt: mostRelevantMatch.metadata.addedAt,
        score: mostRelevantMatch.score,
      },
    });

    res.write("\n\n---METADATA---\n");
    res.write(JSON.stringify(successPayload));
    res.end();
  } catch (error) {
    console.error("Streaming API error:", error);
    res.writeHead(500, {
      "Access-Control-Allow-Origin": "*",
    });
    res.end("Internal Server Error");
  }
}

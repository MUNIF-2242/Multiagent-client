import {
  BedrockRuntimeClient,
  ConverseStreamCommand,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { CONSTANTS } from "../utils/constants";

class EmbeddingServiceClass {
  constructor() {
    const awsRegion = process.env.AWS_REGION || "us-east-1";
    console.log("Initializing BedrockRuntimeClient with region:", awsRegion);
    this.bedrockClient = new BedrockRuntimeClient({
      region: awsRegion,
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID_AWS,
        secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS,
      },
    });
    this.embeddingModelId = CONSTANTS.EMBEDDING_TEXT_MODEL;
    this.llmModelId = CONSTANTS.LLM_TEXT_MODEL;
  }

  async createEmbedding(text) {
    const command = new InvokeModelCommand({
      modelId: this.embeddingModelId,
      body: JSON.stringify({ inputText: text }),
      contentType: "application/json",
      accept: "application/json",
    });
    try {
      const response = await this.bedrockClient.send(command);
      const responseBody = await response.body.transformToString();
      const result = JSON.parse(responseBody);
      return result.embedding;
    } catch (error) {
      console.error("Error from Titan Embedding:", error);
      return null;
    }
  }

  async createEmbeddings(texts) {
    return Promise.all(texts.map((text) => this.createEmbedding(text)));
  }

  async *streamAnswer(context, question) {
    const userPrompt = `You are Kriyabot, a helpful assistant for the Kriyakarak platform. You are NOT an Amazon AI assistant.

CRITICAL: Keep responses SHORT and DIRECT. Maximum 2-3 sentences.

**Only use the information below. If not available, say "I don't have that information available."**

IDENTITY: Only when specifically asked "who are you" or similar identity questions, respond with: "I'm Kriyabot, your helpful assistant for Kriyakarak platform."

For all other questions: Answer directly without introducing yourself.
For greetings: respond warmly but briefly.
Avoid technical jargon, citations, or markdown.

---
Latest Knowledge:
${context}

Question:
${question}`;

    const messages = [
      {
        role: "user",
        content: [{ text: userPrompt }],
      },
    ];

    const command = new ConverseStreamCommand({
      modelId: this.llmModelId,
      messages,
      inferenceConfig: {
        temperature: 0.2,
        topP: 0.9,
        maxTokens: 150,
      },
    });

    try {
      const response = await this.bedrockClient.send(command);
      for await (const item of response.stream) {
        if (item.contentBlockDelta?.delta?.text) {
          yield item.contentBlockDelta.delta.text;
        }
      }
    } catch (error) {
      console.error("Error from Bedrock Claude Haiku:", error);
      yield "Sorry, I couldn't process your request.";
    }
  }
}

const EmbeddingService = new EmbeddingServiceClass();
export default EmbeddingService;

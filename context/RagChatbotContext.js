import React, { createContext, useEffect, useState } from "react";
import { showToast } from "@/components/utils/swalUtils";

export const RagChatbotContext = createContext();

export const RagChatbotProvider = ({ children }) => {
  const [uploadPhase, setUploadPhase] = useState("idle");
  const [embedPhase, setEmbedPhase] = useState("idle");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedPdfResponse, setUploadPdfResponse] = useState(null);
  const [uploadedPdfUrl, setUploadedPdfUrl] = useState([]);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [botResponseLoading, setBotResponseLoading] = useState(false);
  const [versionCode, setVersionCode] = useState("");
  const [modelResponse, setModelResponse] = useState(null);
  const [updateAnswer, setUpdateAnswer] = useState("");
  const [magicEnhanceLoading, setMagicEnhanceLoading] = useState(false);

  const [addKnowledgeMessage, setAddLnowledgeMessage] = useState("");
  const [updatePhase, setUpdatePhase] = useState("idle");

  const [answerSourceLoading, setAnswerSourceLoading] = useState(false);

  useEffect(() => {
    if (modelResponse?.source?.originalText) {
      setUpdateAnswer(modelResponse?.source?.originalText);
    }
  }, [modelResponse?.source?.originalText]);

  const handleAddKnowledgeBtn = async (e) => {
    e.preventDefault();

    if (!addKnowledgeMessage.trim()) {
      showToast("warning", "Please enter text to embed.");
      return;
    }

    try {
      setEmbedPhase("embedding"); // ✅ set embedding phase
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FAMBOT_LAMBDA_URL}/addKnowledgebase`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: addKnowledgeMessage }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Embedding failed");
      }

      showToast("success", "Text embedded successfully!");
    } catch (error) {
      console.error("❌ Embed Text Error:", error);
      showToast("error", "Failed to embed text", error.message);
    } finally {
      setEmbedPhase("idle");
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    setUploadedPdfUrl([]);
    setError("");
    setUploadPhase("idle");
  };

  const handleMagicEnhanceTextBtnClick = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) {
      showToast("warning", "Please enter text to enhance.");
      return;
    }

    setMagicEnhanceLoading(true); // START loading

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FAMBOT_LAMBDA_URL}/enhanceQuestion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: inputMessage }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Enhancement failed");
      }

      const enhancedText = data.enhanced || "";
      setInputMessage(enhancedText);
      showToast("success", "Text enhanced successfully!");
    } catch (error) {
      console.error("❌ Enhance Text Error:", error);
      showToast("error", "Failed to enhance text", error.message);
    } finally {
      setMagicEnhanceLoading(false); // END loading
    }
  };

  const handleAnswerUpdate = async (e) => {
    e.preventDefault();

    if (!updateAnswer.trim()) {
      showToast("warning", "No answer available to update.");
      return;
    }
    if (!modelResponse?.source?.id) {
      showToast("error", "Can't update without vector ID.");
      return;
    }

    setAnswerSourceLoading(true);

    try {
      setUpdatePhase("updating"); // ✅ set phase
      const payload = {
        id: modelResponse.source.id,
        updatedText: updateAnswer,
        metadata: {
          docId: modelResponse.source.docId,
          sourceUrl: modelResponse.source.sourceUrl,
          chunkIndex: modelResponse.source.chunkIndex,
        },
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FAMBOT_LAMBDA_URL}/updateAnswer`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log("✅ Update response:", data);
      showToast("success", "Answer updated successfully.");
    } catch (error) {
      console.error("❌ Error updating answer:", error);
      showToast("error", "Update failed", error.message);
    } finally {
      setUpdatePhase("idle");
      setAnswerSourceLoading(false);
    }
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) {
      showToast("warning", "Please enter your question");
      return;
    }

    const query = inputMessage;
    setInputMessage("");
    setModelResponse("");
    setUpdateAnswer("");

    const userMessage = { role: "user", content: query };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setBotResponseLoading(true);
    setAnswerSourceLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FAMBOT_LAMBDA_URL}/ask`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      console.log("✅ API Response:", data);

      const assistantMessage = {
        role: "assistant",
        content: data.response?.trim() || "No response received.",
      };

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);

      // Optional: set model metadata for debugging or future UI
      setModelResponse(data);
    } catch (error) {
      console.error("❌ Error during submission:", error);
      showToast("error", "Error during query submission: " + error.message);
    } finally {
      setBotResponseLoading(false);
      setAnswerSourceLoading(false);
    }
  };

  const triggerEmbeddingJob = async (pdfUrl, versionCode) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FAMBOT_LAMBDA_URL}/queueProcessPdf`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: pdfUrl, version: versionCode }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to queue the PDF");
      }

      showToast("success", "Document indexing started (queued)!");
    } catch (error) {
      console.error("❌ Error during embedding:", error);
      showToast("error", "Embedding failed", error.message);
    } finally {
      setVersionCode("");
    }
  };

  const handlePdfUploadSubmit = async (e) => {
    e.preventDefault();
    showToast("warning", "This feature is under development.");

    console.log("selectedFiles", selectedFiles); // Add this
    if (selectedFiles.length === 0) {
      //showToast("warning", "Please select at least one file.");
      showToast("warning", "This feature is under development.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      // setLoading(true);
      setError("");
      setUploadedPdfUrl([]);
      // setUploadPhase("uploading");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FAMBOT_LAMBDA_URL}/uploadPdf`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setUploadPdfResponse(data);

      if (!res.ok || data.successfulUploads === 0) {
        setError(data.message || "Upload failed");
        setUploadPhase("idle");
        return;
      }

      const urls = data.files?.map((f) => f.s3Url).filter(Boolean) || [];
      setUploadedPdfUrl(urls);
      showToast("success", "PDF uploaded successfully!");

      setUploadPhase("indexing");

      for (let i = 0; i < urls.length; i++) {
        console.log(`📥 Indexing file ${i + 1} of ${urls.length}`);

        // ✅ Pass versionCode along with the URL
        await triggerEmbeddingJob(urls[i], versionCode);
      }
    } catch (err) {
      // showToast("warning", "This feature is under development.");

      console.error("❌ Upload failed:", err);
      setError("Something went wrong while uploading");
    } finally {
      setLoading(false);
      setUploadPhase("idle");
    }
  };

  const getButtonText = () => {
    switch (uploadPhase) {
      case "uploading":
        return "Uploading...";
      case "indexing":
        return "Indexing...";
      default:
        return "Submit";
    }
  };

  const getEmbedButtonText = () => {
    switch (embedPhase) {
      case "embedding":
        return "Embedding...";
      default:
        return "Submit";
    }
  };
  const getUpdateButtonText = () => {
    switch (updatePhase) {
      case "updating":
        return "Updating...";
      default:
        return "Update";
    }
  };

  return (
    <RagChatbotContext.Provider
      value={{
        uploadedPdfUrl,
        handlePdfUploadSubmit,
        loading,
        handleFileChange,
        error,
        uploadedPdfResponse,
        triggerEmbeddingJob,
        messages,
        handleQuestionSubmit,
        setInputMessage,
        botResponseLoading,
        inputMessage,
        getButtonText,
        handleMagicEnhanceTextBtnClick,
        setVersionCode,
        versionCode,
        modelResponse,
        handleAnswerUpdate,
        setUpdateAnswer,
        updateAnswer,
        handleAddKnowledgeBtn,
        addKnowledgeMessage,
        setAddLnowledgeMessage,
        embedPhase,
        getEmbedButtonText,
        updatePhase,
        getUpdateButtonText,
        handleAnswerUpdate,
        answerSourceLoading,
        magicEnhanceLoading,
        setMagicEnhanceLoading,
      }}
    >
      {children}
    </RagChatbotContext.Provider>
  );
};

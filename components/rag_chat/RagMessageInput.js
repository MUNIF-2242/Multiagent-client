import React, { useContext, useRef, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { RagChatbotContext } from "@/context/RagChatbotContext";

const RagMessageInput = () => {
  const {
    inputMessage,
    setInputMessage,
    handleQuestionSubmit,
    botResponseLoading,
    handleMagicEnhanceTextBtnClick,
    magicEnhanceLoading,
  } = useContext(RagChatbotContext);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!botResponseLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [botResponseLoading]);

  return (
    <div className="panel-body msg-type-area">
      <form onSubmit={handleQuestionSubmit}>
        <button
          type="button"
          className="btn btn-icon btn-outline-primary"
          onClick={handleMagicEnhanceTextBtnClick}
          disabled={magicEnhanceLoading}
        >
          <i className="fa-light fa-wand-magic-sparkles"></i>
        </button>

        <Form.Control
          ref={inputRef}
          autoComplete="off"
          type="text"
          className="form-control chat-input"
          id="chat-input"
          placeholder="Type your message..."
          value={inputMessage}
          disabled={botResponseLoading || magicEnhanceLoading}
          onChange={(e) => setInputMessage(e.target.value)}
          style={{ position: "relative", zIndex: 1 }}
        />
        {magicEnhanceLoading && (
          <div className="input-overlay">
            <div className="spinner-border text-primary" />
          </div>
        )}

        <button
          type="submit"
          className="btn btn-icon btn-outline-primary"
          disabled={botResponseLoading || magicEnhanceLoading}
        >
          <i className="fa-light fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default RagMessageInput;

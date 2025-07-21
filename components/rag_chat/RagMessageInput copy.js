import { RagChatbotContext } from "@/context/RagChatbotContext";
import React, { useContext, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";

const RagMessageInput = () => {
  const {
    inputMessage,
    setInputMessage,
    handleQuestionSubmit,
    botResponseLoading,
    handleMagicEnhanceTextBtnClick,
  } = useContext(RagChatbotContext);

  const inputRef = useRef(null);

  // Auto-focus input after bot response is complete
  useEffect(() => {
    if (!botResponseLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [botResponseLoading]);

  return (
    <div className="panel-body msg-type-area">
      <form onSubmit={handleQuestionSubmit}>
        <button
          type="button" // <-- prevent submit on this button
          className="btn btn-icon btn-outline-primary"
          onClick={handleMagicEnhanceTextBtnClick}
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
          disabled={botResponseLoading}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          type="submit" // <-- this button triggers form submit on Enter
          className="btn btn-icon btn-outline-primary"
        >
          <i className="fa-light fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default RagMessageInput;

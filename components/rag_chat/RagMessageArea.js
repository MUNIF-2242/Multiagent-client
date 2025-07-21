import React, { useEffect, useRef, useContext } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { RagChatbotContext } from "@/context/RagChatbotContext";

const RagMessageArea = () => {
  const { messages, botResponseLoading } = useContext(RagChatbotContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, botResponseLoading]);

  // Function to convert markdown-style links to HTML links
  const renderMessageWithLinks = (content) => {
    // Regular expression to match [text](url) pattern
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    // Split content by links and create elements
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }

      // Add the link
      const linkText = match[1];
      const linkUrl = match[2];

      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="chatbot-link"
          style={{
            color: "yellow",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          title={`Open ${linkText} in new tab`}
        >
          {linkText}
        </a>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts.length > 1 ? parts : content;
  };

  return (
    <div className="panel-body msg-area" id="my-cellibrity-chat-area">
      <OverlayScrollbarsComponent
        className="main-menu"
        options={{
          className: "os-theme-light",
          scrollbars: {
            autoHide: "scroll",
          },
        }}
      >
        <div
          ref={scrollRef}
          className="scrollable main-chat-area"
          style={{ maxHeight: "900px", overflowY: "auto" }}
        >
          {messages
            .filter((message) => message.role !== "system")
            .map((message, index) => {
              if (message.role === "user") {
                return (
                  <div
                    key={index}
                    className="single-message outgoing"
                    style={{ justifyContent: "flex-end", textAlign: "right" }}
                  >
                    <div className="msg-box">
                      <div className="msg-box-inner">
                        <span className="sent-status seen" title="seen">
                          <i className="fa-solid fa-circle-check"></i>
                        </span>
                        <p>{renderMessageWithLinks(message.content)}</p>
                      </div>
                    </div>
                    <div className="avatar">
                      <img
                        src="/assets/images/openailogin.jpg"
                        alt="User Avatar"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                );
              } else if (message.role === "assistant") {
                return (
                  <div
                    key={index}
                    className="single-message"
                    style={{ justifyContent: "flex-start", textAlign: "left" }}
                  >
                    <div className="avatar">
                      <img
                        src="/assets/images/robot-44.png"
                        alt="Kriyakarak Assistant Avatar"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="msg-box">
                      <div className="msg-box-inner">
                        <p>{renderMessageWithLinks(message.content)}</p>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          {botResponseLoading && (
            <div
              className="single-message"
              style={{ justifyContent: "flex-start", textAlign: "left" }}
            >
              <div className="avatar">
                <img
                  src="/assets/images/robot-44.png"
                  alt="Kriyakarak Assistant is typing..."
                  width={35}
                  height={35}
                />
              </div>
              <div className="msg-box">
                <div className="msg-box-inner">
                  <div className="msg-option">
                    <span className="msg-time">now</span>
                    <button className="btn-flush">
                      <i className="fa-light fa-ellipsis-vertical"></i>
                    </button>
                  </div>
                  <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
};

export default RagMessageArea;

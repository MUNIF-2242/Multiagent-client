import { RagChatbotContext } from "@/context/RagChatbotContext";
import React, { useContext, useState } from "react";

const SeoData = () => {
  const [seoDataBtn, SetSeoDataBtn] = useState(false);

  const {
    handleAddKnowledgeBtn,
    addKnowledgeMessage,
    setAddLnowledgeMessage,
    getEmbedButtonText,
    embedPhase,
  } = useContext(RagChatbotContext);

  const handleSeoDataBtn = () => {
    SetSeoDataBtn(!seoDataBtn);
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h5>Add New Knowledgebase</h5>
        <div className="btn-box d-flex gap-2">
          <button
            className="btn btn-sm btn-icon btn-outline-primary panel-close"
            onClick={handleSeoDataBtn}
          >
            <i
              className={`fa-light ${
                seoDataBtn ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </button>
        </div>
      </div>

      <div className={`panel-body ${seoDataBtn ? "d-none" : ""}`}>
        <form onSubmit={handleAddKnowledgeBtn}>
          <div className="row g-3">
            <div className="col-12">
              <p className="mb-2 custom-whiteText">Text</p>
              <textarea
                className="form-control"
                rows="15"
                id="metaDscr"
                value={addKnowledgeMessage}
                onChange={(e) => setAddLnowledgeMessage(e.target.value)}
                disabled={embedPhase === "embedding"}
              ></textarea>
            </div>

            <div className="col-12 d-flex justify-content-end">
              <div className="btn-box">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={embedPhase === "embedding"}
                >
                  {getEmbedButtonText()}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeoData;

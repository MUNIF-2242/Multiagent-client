import { RagChatbotContext } from "@/context/RagChatbotContext";
import React, { useContext, useState } from "react";

const PublishedProduct = () => {
  const [publishedBtn, setPublishedBtn] = useState(false);
  const handlePublishedBtn = () => {
    setPublishedBtn(!publishedBtn);
  };

  const { handlePdfUploadSubmit, handleFileChange, loading, getButtonText } =
    useContext(RagChatbotContext);

  return (
    <div className="panel mb-30">
      <div className="panel-header">
        <h5>Upload</h5>
        <div className="btn-box d-flex gap-2">
          <button
            className="btn btn-sm btn-icon btn-outline-primary panel-close"
            onClick={handlePublishedBtn}
          >
            <i
              className={`fa-light ${
                publishedBtn ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </button>
        </div>
      </div>
      <div className={`panel-body ${publishedBtn ? "d-none" : ""}`}>
        <form onSubmit={handlePdfUploadSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <p className="mb-2 custom-whiteText">PDF</p>
              <input
                className="form-control"
                type="file"
                accept=".pdf"
                multiple
                onChange={handleFileChange}
                disabled={loading}
              />
            </div>

            <div className="col-12 d-flex justify-content-end">
              <div className="btn-box">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {getButtonText()}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublishedProduct;

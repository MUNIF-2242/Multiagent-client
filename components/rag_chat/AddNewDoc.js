import React, { useContext } from "react";
import { RagChatbotContext } from "@/context/RagChatbotContext";

const AddNewDoc = () => {
  const {
    error,
    modelResponse,
    handleAnswerUpdate,
    setUpdateAnswer,
    updateAnswer,
    updatePhase,
    getUpdateButtonText,
    answerSourceLoading,
  } = useContext(RagChatbotContext);

  return (
    <div className="col-xxl-12 col-md-5">
      <div className="panel">
        <div className="panel-header">
          <h5>Review</h5>
        </div>

        <div className="panel-body">
          <form onSubmit={handleAnswerUpdate}>
            <div className="row g-3">
              <div className="col-12">
                <p className="mb-2 custom-whiteText">Last asked question</p>
                <div className="position-relative mb-15">
                  <textarea
                    className="form-control"
                    rows="5"
                    value={modelResponse?.userQuestion || ""}
                    disabled={answerSourceLoading}
                    style={{ position: "relative", zIndex: 1 }}
                  />
                  {answerSourceLoading && (
                    <div className="textarea-overlay">
                      <div className="spinner-border text-primary" />
                    </div>
                  )}
                </div>

                <p p className="mb-2 custom-whiteText">
                  Asked question answer source
                </p>
                <div className="position-relative mb-2">
                  <textarea
                    className="form-control"
                    rows="20"
                    value={updateAnswer}
                    onChange={(e) => setUpdateAnswer(e.target.value)}
                    disabled={answerSourceLoading}
                    style={{ position: "relative", zIndex: 1 }}
                  />
                  {answerSourceLoading && (
                    <div className="textarea-overlay">
                      <div className="spinner-border text-primary" />
                    </div>
                  )}
                </div>
              </div>

              <div className="col-12 d-flex justify-content-end">
                <div className="btn-box">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={answerSourceLoading}
                  >
                    {getUpdateButtonText()}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {error && (
        <div className="panel mt-4">
          <div className="panel-header">
            <h5>Error</h5>
          </div>
          <div className="panel-body">
            <div className="bg-danger-subtle p-3 rounded">{error}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewDoc;

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

const PublishedProduct = () => {
  const [publishedBtn, setPublishedBtn] = useState(false);
  const handlePublishedBtn = () => {
    setPublishedBtn(!publishedBtn);
  };
  const [publishDate, setPublishDate] = useState(null);

  const handleDateChange = (date) => {
    setPublishDate(date);
  };

  return (
    <div className="panel mb-30">
      <div className="panel-header">
        <h5>Published</h5>
        <div className="btn-box d-flex gap-2">
          <button className="btn btn-sm btn-icon btn-outline-primary">
            <i className="fa-light fa-arrows-rotate"></i>
          </button>
          <button
            className="btn btn-sm btn-icon btn-outline-primary panel-close"
            onClick={handlePublishedBtn}
          >
            <i className="fa-light fa-angle-up"></i>
          </button>
        </div>
      </div>
      <div className={`panel-body ${publishedBtn ? "d-none" : ""}`}>
        <div className="panel-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePdfUploadSubmit(e, versionCode);
            }}
          >
            <div className="row g-3">
              <div className="col-12">
                <p className="mb-2">Upload PDF</p>
                <input
                  className="form-control"
                  type="file"
                  accept=".pdf"
                  multiple
                  // onChange={handleFileChange}
                  // disabled={loading}
                />
              </div>
              <div className="col-12">
                <p className="mb-2">Knowledgebase Version</p>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter version code (e.g. v1, v2, v3)"
                  // value={versionCode}
                  // onChange={(e) => setVersionCode(e.target.value)}
                  // disabled={loading}
                />
              </div>
              <div className="col-12 d-flex justify-content-end">
                <div className="btn-box">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    // disabled={loading}
                  >
                    {/* {getButtonText()} */}
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* Progress indicator for indexing */}
          {/* {uploadPhase === "indexing" && (
            <div className="mt-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <small className="text-muted">Indexing documents...</small>
                <small className="text-muted">
                  {indexingProgress.current}/{indexingProgress.total}
                </small>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{
                    width: `${
                      (indexingProgress.current / indexingProgress.total) * 100
                    }%`,
                  }}
                  aria-valuenow={indexingProgress.current}
                  aria-valuemin="0"
                  aria-valuemax={indexingProgress.total}
                ></div>
              </div>
            </div>
          )} */}
        </div>
        <div className="row g-3">
          <div className="col-6">
            <label className="form-label">Status</label>
            <Form.Select className="form-control form-control-sm">
              <option value="0">Published</option>
              <option value="1">Draft</option>
            </Form.Select>
          </div>
          <div className="col-6">
            <label className="form-label">Visibility</label>
            <Form.Select className="form-control form-control-sm">
              <option value="0">Public</option>
              <option value="1">Pass. Protected</option>
              <option value="2">Private</option>
            </Form.Select>
          </div>
          <div className="col-12">
            <div className="publish-date">
              <label>
                Published on:
                <DatePicker
                  className="input-flush"
                  selected={publishDate}
                  onChange={handleDateChange}
                  id="publishDate"
                />
              </label>
              <label
                htmlFor="publishDate"
                className="cursor-pointer text-primary"
              >
                <i className="fa-light fa-pen-to-square"></i>
              </label>
            </div>
            <div className="btn-box d-flex justify-content-end gap-2">
              <button className="btn btn-sm btn-outline-primary">Save</button>
              <button className="btn btn-sm btn-primary">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedProduct;

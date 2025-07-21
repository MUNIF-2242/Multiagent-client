import React, { useContext } from "react";

import { IdVerificationContext } from "@/context/IdVerificationContext";

const Preview = () => {
  const { uploadedImageUrl } = useContext(IdVerificationContext);

  return (
    <div className="col-xxl-8 col-md-7">
      <div className="panel">
        <div className="panel-header">
          <h5>All Categories</h5>
        </div>
        <div className="panel-body">
          {uploadedImageUrl && (
            <div className="mb-3">
              <h6>Uploaded Category Image:</h6>
              <img
                key={uploadedImageUrl} // ✅ helps React identify image updates
                src={uploadedImageUrl}
                alt="Uploaded category"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;

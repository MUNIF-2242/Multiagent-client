import { IdVerificationContext } from "@/context/IdVerificationContext";
import React, { useContext, useState } from "react";

const AddNewImage = () => {
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visionApiJSONResponse, setVisionApiJSONResponse] = useState(null);
  const { setUploadedImageUrl } = useContext(IdVerificationContext);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setError("");
    } else {
      setError("Please select a valid image file.");
      setSelectedFile(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("No file selected.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");
    setVisionApiJSONResponse(null);

    try {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Image = reader.result;

        // Step 1: Upload image
        const uploadResponse = await fetch("/api/cloud-vision/uploadImage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image }),
        });

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json();
          throw new Error(errorData.message || "Image upload failed.");
        }

        const uploadData = await uploadResponse.json();
        const imageUrl = uploadData.imageUrl;

        setUploadedImageUrl(imageUrl); // ✅ Set after receiving the new image URL
        setResult(`Image uploaded successfully: ${imageUrl}`);

        // Step 2: Extract text using Vision API
        const visionResponse = await fetch(
          "/api/aws/rekognition/detect-labels",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(uploadData.fileName),
          }
        );

        if (!visionResponse.ok) {
          const errorData = await visionResponse.json();
          throw new Error(errorData.error || "Vision API failed.");
        }

        const visionData = await visionResponse.json();
        setVisionApiJSONResponse(visionData);
      };

      reader.readAsDataURL(selectedFile);
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
      setSelectedFile(null);
    }
  };

  return (
    <>
      <div className="col-xxl-4 col-md-5">
        <div className="panel">
          <div className="panel-header">
            <h5>Add New Profile</h5>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Profile Image</label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="col-12 d-flex justify-content-end">
                  <div className="btn-box">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!selectedFile || loading}
                    >
                      {loading ? "Processing..." : "Upload and Analyze"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Upload Success */}
        {result && (
          <div className="panel mt-4">
            <div className="panel-header">
              <h5>Upload Result</h5>
            </div>
            <div className="panel-body">
              <div className="bg-success-subtle p-3 rounded">{result}</div>
            </div>
          </div>
        )}

        {/* Vision API Result */}
        {visionApiJSONResponse && (
          <div className="panel mt-4">
            <div className="panel-header">
              <h5>TIN Number</h5>
            </div>
            <div className="panel-body">
              <div
                className="bg-light p-2 mb-3 rounded"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {visionApiJSONResponse.tinNumber}
              </div>
            </div>
          </div>
        )}

        {/* Vision API Result */}
        {visionApiJSONResponse && (
          <div className="panel mt-4">
            <div className="panel-header">
              <h5>Extracted Full Text</h5>
            </div>
            <div className="panel-body">
              <div
                className="bg-light p-2 mb-3 rounded"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {visionApiJSONResponse.fullText}
              </div>
            </div>
          </div>
        )}

        {visionApiJSONResponse && (
          <div className="panel mt-4">
            <div className="panel-header">
              <h5>Extracted Bangla Text</h5>
            </div>
            <div className="panel-body">
              <div
                className="bg-light p-2 rounded"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {visionApiJSONResponse.banglaOnly}
              </div>
            </div>
          </div>
        )}

        {/* Error */}
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
    </>
  );
};

export default AddNewImage;

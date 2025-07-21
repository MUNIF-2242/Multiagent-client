import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const MediaPane = () => {
  const onDropSingle = useCallback((acceptedFiles) => {
    // Handle the single file upload
  }, []);
  const {
    getRootProps: getSingleRootProps,
    getInputProps: getSingleInputProps,
    isDragActive: isSingleDragActive,
  } = useDropzone({ onDrop: onDropSingle });

  return (
    <div className="row">
      <div className="col-xxl-3 col-md-4 col-5 col-xs-12">
        <div className="add-thumbnail product-image-upload">
          <div className="part-txt">
            <h5>
              Add thumbnail <span>(jpeg/png)</span>
            </h5>
          </div>
          <div {...getSingleRootProps()}>
            <input type="file" id="singleUpload" {...getSingleInputProps()} />
            {isSingleDragActive ? (
              <div className="jquery-uploader">
                <div className="jquery-uploader-preview-container">
                  <div className="jquery-uploader-select-card">
                    <div className="jquery-uploader-select">
                      <div className="upload-button">
                        <i className="fa-light fa-image"></i>
                        <br />
                        <a>Recommended: 800 * 800</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="jquery-uploader">
                <div className="jquery-uploader-preview-container">
                  <div className="jquery-uploader-select-card">
                    <div className="jquery-uploader-select">
                      <div className="upload-button">
                        <i className="fa-light fa-image"></i>
                        <br />
                        <a>Recommended: 800 * 800</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-xxl-9 col-md-8 col-7 col-xs-12">
        <div className="add-gallery-img product-image-upload">
          <div className="part-txt">
            <h5>
              Add gallery <span>(jpeg/png)</span>
            </h5>
          </div>
          <div {...getSingleRootProps()}>
            <input type="file" id="singleUpload" {...getSingleInputProps()} />
            {isSingleDragActive ? (
              <div className="jquery-uploader">
                <div className="jquery-uploader-preview-container">
                  <div className="jquery-uploader-select-card">
                    <div className="jquery-uploader-select">
                      <div className="upload-button">
                        <i className="fa-light fa-image"></i>
                        <br />
                        <a>Recommended: 800 * 800</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="jquery-uploader">
                <div className="jquery-uploader-preview-container">
                  <div className="jquery-uploader-select-card">
                    <div className="jquery-uploader-select">
                      <div className="upload-button">
                        <i className="fa-light fa-image"></i>
                        <br />
                        <a>Recommended: 800 * 800</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPane;

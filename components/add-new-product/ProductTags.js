import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ProductTags = () => {
  const [productTagBtn,SetProductTagBtn] = useState(false)

  const handleProductTagBtn = () => {
      SetProductTagBtn(!productTagBtn)
  }
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== '') {
      const newTags = [...tags, tagInput.trim()];
      setTags(newTags);
      setTagInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h5>Products Tags</h5>
        <div className="btn-box d-flex gap-2">
          <button className="btn btn-sm btn-icon btn-outline-primary">
            <i className="fa-light fa-arrows-rotate"></i>
          </button>
          <button className="btn btn-sm btn-icon btn-outline-primary panel-close" onClick={handleProductTagBtn}>
            <i className="fa-light fa-angle-up"></i>
          </button>
        </div>
      </div>
      <div className={`panel-body ${productTagBtn? 'd-none':''}`}>
        <div className="product-tag-area">
          <div className="row g-3">
            <div className="col-9">
              <Form.Control
                type="text"
                id="productTags"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-sm btn-primary w-100"
                id="addTags"
                onClick={handleAddTag}
              >
                Add
              </button>
            </div>
          </div>
          <span className="input-txt">Input tags for product</span>
          <div className="all-tags" id="allTags">
            {tags.map((tag, index) => (
              <div className="item" key={index}>
                {tag}
                <span
                  className="close-tag"
                  onClick={() => handleRemoveTag(tag)}
                >
                  <i className="fa-regular fa-xmark"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTags;

import React, { useState } from "react";
import CategoryDropdowns from "./CategoryDropdowns";

const CategorySection = () => {
  const [categoryBtn, setCategoryBtn] = useState(false);
  const handleCategoryBtn = () => {
    setCategoryBtn(!categoryBtn);
  };
  const [addNewCat, setAddNewCat] = useState(false);
  const handleAddNewCat = () => {
    setAddNewCat(!addNewCat);
  };
  return (
    <div className="panel mb-30">
      <div className="panel-header">
        <h5>Category</h5>
        <div className="btn-box d-flex gap-2">
          <button className="btn btn-sm btn-icon btn-outline-primary">
            <i className="fa-light fa-arrows-rotate"></i>
          </button>
          <button
            className="btn btn-sm btn-icon btn-outline-primary panel-close"
            onClick={handleCategoryBtn}
          >
            <i className="fa-light fa-angle-up"></i>
          </button>
        </div>
      </div>
      <div className={`panel-body ${categoryBtn ? "d-none" : ""}`}>
        <form className="input-group-with-icon mb-20">
          <span className="input-icon">
            <i className="fa-light fa-magnifying-glass"></i>
          </span>
          <input type="search" placeholder="Search category" />
        </form>
        <CategoryDropdowns />
      </div>
      <div className="border-top"></div>
      <div className={`panel-body ${categoryBtn ? "d-none" : ""}`}>
        <div className="d-flex justify-content-end">
          <button
            className="btn-flush add-category-btn"
            onClick={handleAddNewCat}
          >
            <i className={`fa-light ${addNewCat ? "fa-minus" : "fa-plus"}`}></i>{" "}
            Add new category
          </button>
        </div>
        <div className={`add-new-category-panel ${addNewCat ? "" : "d-none"}`}>
          <form>
            <input
              type="text"
              className="form-control form-control-sm mb-3"
              placeholder="Category Name"
            />
            <select
              className="form-control form-control-sm mb-3"
              data-placeholder="Select Parent"
            >
              <option value="">Select Parent</option>
              <option value="0">Finance</option>
              <option value="1">Banking</option>
              <option value="2">Accounting</option>
              <option value="3">Bangladesh Bank</option>
              <option value="4">Fashion & Clothing</option>
              <option value="5">t-Shirt</option>
              <option value="6">Shirt</option>
              <option value="7">Casual Shirt</option>
              <option value="8">Bag</option>
              <option value="9">Monitor</option>
              <option value="10">Keyboard</option>
              <option value="11">Mouse</option>
            </select>
            <div className="d-flex justify-content-end">
              <button className="btn btn-sm btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

import React, { useContext } from 'react';
import { DigiContext } from '../../context/DigiContext';

const NewProductTitle = () => {
const {title,permalink,handleEditPermalink,handleUpdatePermalink,handleTitleChange,handleCancelPermalink} = useContext(DigiContext)
  return (
    <div className="panel mb-30">
      <div className="panel-body product-title-input">
        <label className="form-label">Write Title</label>
        <input
          type="text"
          className="form-control"
          id="productTitle"
          placeholder="Title for product"
          value={title}
          onChange={handleTitleChange}
        />
        <p className="perma-txt">
          Permalink: <span data-link={permalink} className="site-link text-primary" id="productPermalink">{permalink}</span>
          <input type="text" className="form-control form-control-sm" hidden id="editPermalink" />
          <button className="btn-flush bg-primary" id="editPermaBtn" onClick={handleEditPermalink}>Edit</button>
          <button className="btn-flush bg-success" id="createPerma" hidden onClick={handleUpdatePermalink}>OK</button>
          <button className="btn-flush bg-danger" id="cancelPerma" hidden onClick={handleCancelPermalink}>Cancel</button>
        </p>
      </div>
    </div>
  );
};

export default NewProductTitle;

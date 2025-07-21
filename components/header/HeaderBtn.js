import React from 'react'

const HeaderBtn = () => {
  return (
    <div className="product-table-quantity d-flex justify-content-between align-items-center mb-20">
        <ul className="mb-0">
            <li className="text-white">All (23)</li>
            <li>Pending (19)</li>
            <li>Draft (05)</li>
            <li>Trash (05)</li>
        </ul>
        <div className="btn-box d-md-flex d-none gap-2">
            <button className="btn btn-sm btn-icon btn-outline-primary" title="Download Excel" id="downloadExcel"><i className="fa-light fa-file-spreadsheet"></i></button>
            <button className="btn btn-sm btn-icon btn-outline-primary" title="Download PDF" id="downloadPdf"><i className="fa-light fa-file-pdf"></i></button>
        </div>
    </div>
  )
}

export default HeaderBtn
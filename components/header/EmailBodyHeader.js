import React from 'react'
import { Form } from 'react-bootstrap'
import SelectFilter from '../filter/SelectFilter'
const EmailBodyHeader = () => {
  return (
    <>
        <div className="product-table-quantity d-flex flex-wrap align-items-center gap-2 mb-20">
            <ul className="mb-0">
                <li className="text-white">All (23)</li>
                <li>Unread (19)</li>
                <li>Draft (05)</li>
                <li>Trush (05)</li>
            </ul>
            <ul className="top-action mb-0 d-none">
                <li>|</li>
                <li><button className="btn-flush" data-bs-toggle="tooltip" data-bs-title="Move to archive"><i className="fa-light fa-box-archive"></i></button></li>
                <li><button className="btn-flush" data-bs-toggle="tooltip" data-bs-title="Report to spam"><i className="fa-light fa-circle-exclamation"></i></button></li>
                <li><button className="btn-flush" data-bs-toggle="tooltip" data-bs-title="Mark as read"><i className="fa-light fa-envelope"></i></button></li>
                <li><button className="btn-flush" data-bs-toggle="tooltip" data-bs-title="Move to trash"><i className="fa-light fa-trash-can"></i></button></li>
            </ul>
        </div>
        <div className="table-filter-option">
            <div className="row justify-content-between g-3 align-items-center">
                <div className="col-xl-9 col-9 col-xs-12">
                    <div className="row g-5">
                        <div className="col">
                        <form>
                                <Form.Select className="form-control form-control-sm" data-placeholder="Bulk action">
                                    <option value="">Bulk action</option>
                                    <option value="0">Move to archive</option>
                                    <option value="1">Report to spam</option>
                                    <option value="2">Mark as read</option>
                                    <option value="3">Move to trash</option>
                                </Form.Select>
                            </form>
                        </div>
                        <div className="col">
                            <Form.Select className="form-control form-control-sm">
                                <option value="0">All</option>
                                <option value="1">None</option>
                                <option value="2">Read</option>
                                <option value="3">Unread</option>
                                <option value="4">Starred</option>
                                <option value="5">Unstarred</option>
                            </Form.Select>
                        </div>
                        <div className="col">
                            <button className="btn btn-sm btn-primary"><i className="fa-light fa-filter"></i> Filter</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-3 col-xs-12 d-flex justify-content-end">
                    <div className="productTableLength">
                        <SelectFilter/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default EmailBodyHeader
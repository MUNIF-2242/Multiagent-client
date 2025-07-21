import React from 'react'
import { Form } from 'react-bootstrap'

const MessageInput = () => {
  return (
    <div className="panel-body msg-type-area">
        <form>
            <label className="btn btn-icon btn-outline-primary" htmlFor="chatAttachment"><i className="fa-light fa-link"></i></label>
            <Form.Control type="file" className="chat-attachment" id="chatAttachment"/>
            <Form.Control autoComplete="off" type="text" className="form-control chat-input" autoFocus="" id="chat-input" placeholder="Type your message..."/>
            <button className="btn btn-icon btn-outline-primary"><i className="fa-light fa-paper-plane"></i></button>
        </form>
    </div>
  )
}

export default MessageInput
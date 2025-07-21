import React, { useContext } from 'react'
import { DigiContext } from '../../../context/DigiContext'

const LayoutDirection = () => {
    const {
        isRtl,
        handleRtlBtn,
        handleLtrBtn,
        } = useContext(DigiContext)
  return (
    <div className="right-sidebar-group">
        <span className="sidebar-subtitle">Theme Direction <span><i className="fa-light fa-angle-up"></i></span></span>
        <div>
            <div className="btn-group d-flex">
                <button className={`btn btn-primary w-50 ${isRtl? '':'active'}`} onClick={handleLtrBtn}>LTR</button>
                <button className={`btn btn-primary w-50 ${isRtl? 'active':''}`} onClick={handleRtlBtn}>RTL</button>
            </div>
        </div>
    </div>
  )
}

export default LayoutDirection
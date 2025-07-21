import React from 'react'
import Footer from '../footer/Footer'
import Link from 'next/link'

const UpdatePasswordContent = () => {
  return (
    <div className="main-content login-panel">
        <div className="login-body">
            <div className="top d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="assets/images/logo-big.png" alt="Logo"/>
                </div>
                <Link href='/'><i className="fa-duotone fa-house-chimney"></i></Link>
            </div>
            <div className="bottom">
                <h3 className="panel-title">Update Password</h3>
                <form>
                    <div className="input-group mb-30">
                        <span className="input-group-text"><i className="fa-regular fa-lock"></i></span>
                        <input type="password" className="form-control" placeholder="New Password"/>
                    </div>
                    <div className="input-group mb-30">
                        <span className="input-group-text"><i className="fa-regular fa-lock"></i></span>
                        <input type="password" className="form-control" placeholder="Confirm New Password"/>
                    </div>
                    <button className="btn btn-primary w-100 login-btn">Update Password</button>
                </form>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default UpdatePasswordContent
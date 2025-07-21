import React from 'react'
import Footer from '../footer/Footer'
import Link from 'next/link'

const ResetPasswordContent = () => {
  return (
    <div className="main-content login-panel">
        <div className="login-body">
            <div className="top d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="assets/images/logo-big.png" alt="Logo"/>
                </div>
                <Link href="/"><i className="fa-duotone fa-house-chimney"></i></Link>
            </div>
            <div className="bottom">
                <h3 className="panel-title">Reset Password</h3>
                <form>
                    <div className="input-group mb-30">
                        <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                        <input type="text" className="form-control" placeholder="Username or email address"/>
                    </div>
                    <button className="btn btn-primary w-100 login-btn">Get Link</button>
                </form>
                <div className="other-option">
                    <p className="mb-0">Remember the password? <Link href="/login">Login</Link></p>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default ResetPasswordContent
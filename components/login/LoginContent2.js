import React from 'react'
import Footer from '../footer/Footer'
import Link from 'next/link'

const LoginContent2 = () => {
  return (
    <div className="main-content login-panel login-panel-2">
        <h3 className="panel-title">Login</h3>
        <div className="login-body login-body-2">
            <div className="top d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="assets/images/logo-black.png" alt="Logo"/>
                </div>
                <Link href="/"><i className="fa-duotone fa-house-chimney"></i></Link>
            </div>
            <div className="bottom">
                <form>
                    <div className="input-group mb-30">
                        <input type="text" className="form-control" placeholder="Username or email address"/>
                        <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
                    </div>
                    <div className="input-group mb-20">
                        <input type="password" className="form-control" placeholder="Password"/>
                        <span className="input-group-text"><i className="fa-regular fa-lock"></i></span>
                    </div>
                    <div className="d-flex justify-content-between mb-30">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="loginCheckbox"/>
                            <label className="form-check-label text-white">
                                Remember Me
                            </label>
                        </div>
                        <Link href="/resetPassword" className="text-white fs-14">Forgot Password?</Link>
                    </div>
                    <button className="btn btn-primary w-100 login-btn">Login</button>
                </form>
                <div className="other-option">
                    <p className="mb-0">Don't have an account? <Link href="/registration2" className="text-white text-decoration-underline">create</Link></p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LoginContent2
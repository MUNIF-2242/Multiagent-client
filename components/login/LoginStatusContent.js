import React, { useContext } from 'react'
import Footer from '../footer/Footer'
import Link from 'next/link'
import { DigiContext } from '../../context/DigiContext'

const LoginStatusContent = () => {
    const {passwordVisible, togglePasswordVisibility} = useContext(DigiContext)
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
                <h3 className="panel-title">Sign in</h3>
                <div className="login-status">
                    <div className="msg-success alert alert-success py-2 px-3 rounded mb-20 fs-14"><i className="fa-regular fa-check me-2"></i> Login Successfully</div>
                    <div className="msg-error alert alert-danger py-2 px-3 rounded mb-20 fs-14"><i className="fa-regular fa-circle-exclamation me-2"></i> Invalid Username/Password</div>
                </div>
                <form>
                    <div className="input-group mb-30">
                        <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Username or email address"/>
                    </div>
                    <div className="input-group mb-20">
                        <span className="input-group-text"><i className="fa-regular fa-lock"></i></span>
                        <input type={passwordVisible ? 'text' : 'password'} className="form-control rounded-end" placeholder="Password"/>
                        <span className="password-show" role='button' onClick={togglePasswordVisibility}><i className="fa-duotone fa-eye"></i></span>
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
                    <button className="btn btn-primary w-100 login-btn">Sign in</button>
                </form>
                <div className="other-option">
                    <p>Or continue with</p>
                    <div className="social-box d-flex justify-content-center gap-20">
                        <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                        <Link href="#"><i className="fa-brands fa-google"></i></Link>
                        <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default LoginStatusContent
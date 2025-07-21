import React, { useContext, useState } from "react";
import Footer from "../footer/Footer";
import Link from "next/link";
import { DigiContext } from "@/context/DigiContext";
import { signIn } from "next-auth/react"; // Import signIn
import { useRouter } from "next/router"; // Import useRouter

const OpenAILoginContent = () => {
  const { passwordVisible, togglePasswordVisibility } = useContext(DigiContext);
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error handling
  const router = useRouter(); // Initialize useRouter

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission refresh

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError(result.error); // Display error message
    } else {
      router.push("/openai/projects/rag/knowlwdgebase-chat"); // Redirect to protected page on success
    }
  };

  return (
    <div className="main-content login-panel login-panel-3">
      <div className="container">
        <div className="d-flex justify-content-end">
          <div className="login-body">
            <div className="bottom">
              <h3 className="panel-title">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="input-group mb-25">
                  <span className="input-group-text">
                    <i className="fa-regular fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username or email address"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group mb-20">
                  <span className="input-group-text">
                    <i className="fa-regular fa-lock"></i>
                  </span>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control rounded-end"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <a
                    role="button"
                    className="password-show"
                    onClick={togglePasswordVisibility}
                  >
                    <i className="fa-duotone fa-eye"></i>
                  </a>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}{" "}
                {/* Display error */}
                <div className="d-flex justify-content-between mb-25">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="loginCheckbox"
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="loginCheckbox"
                    >
                      Remember Me
                    </label>
                  </div>
                  <Link href="/resetPassword" className="text-white fs-14">
                    Forgot Password?
                  </Link>
                </div>
                <button
                  className="btn btn-primary w-100 login-btn"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OpenAILoginContent;

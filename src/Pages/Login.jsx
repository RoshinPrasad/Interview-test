import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase/config";

function Login() {
  const [formData, setFormData] = useState({});
  const [focusedInput, setFocusedInput] = useState(null);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const submitchange = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setFormData({ email: "", password: "" });
      navigate("/home"); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="h-screen bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
      <div className="container h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h3 className="mb-12 mt-1 pb-1 text-xl font-bold uppercase">
                        Login
                      </h3>
                    </div>

                    <form className="flex flex-col items-center">
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={handlechange}
                        onFocus={() => handleFocus("email")}
                        onBlur={handleBlur}
                        className={`w-full p-3 text-black mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 ${
                          focusedInput === "email" ? "placeholder-up" : ""
                        }`}
                      />

                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={handlechange}
                        onFocus={() => handleFocus("password")}
                        onBlur={handleBlur}
                        className={`w-full p-3 text-black mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                          focusedInput === "password" ? "placeholder-up" : ""
                        }`}
                      />

                      <div className="mb-10 pb-1 pt-2">
                        <button
                          className="inline-block w-60 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                          onClick={submitchange}
                        >
                          Login
                        </button>
                      </div>
                      <a href="#!" className="mb-4">
                        Forgot password?
                      </a>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-bold uppercase">
                      Not registered ?{" "}
                      <Link to="/" className="hover:text-blue-900 underline">
                        Register here
                      </Link>
                    </h4>
                    <p className="text-sm">
                      This was a trial machine test content that authenticates
                      the user logged!
                    </p>
                    <h1 className="mx-40 mt-5 mb-4">or</h1>
                    <div className="px-6 sm:px-0 max-w-sm">
                      <button
                        type="button"
                        className="mx-auto text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                      >
                        <svg
                          className="mr-2 -ml-1 w-4 h-4"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="google"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 488 512"
                        >
                          <path
                            fill="currentColor"
                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                          ></path>
                        </svg>
                        Sign up with Google
                      </button>
                      <button
                        type="button"
                        className="text-white w-full bg-[#0077B5] hover:bg-[#0077B5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077B5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#0077B5]/55 mr-2 mb-2"
                      >
                        <svg
                          className="mr-2 -ml-1 w-4 h-4"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="linkedin"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64v384c0 17.6 14.3 32 31.9 32H416c17.6 0 32-14.4 32-32V64c0-17.5-14.4-32-32-32zM135.2 384H67V207.2h68.2V384zm-34.1-208.8c-22.5 0-40.7-18.2-40.7-40.7s18.2-40.7 40.7-40.7 40.7 18.2 40.7 40.7-18.3 40.7-40.7 40.7zm271.5 208.8H304V294.4c0-34.7-12.4-58.5-43.5-58.5c-23.6 0-37.7 15.9-43.9 31.3-2.3 5.6-2.9 13.5-2.9 21.3v90.6H160V207.2h67.8v45.2c9.1-14.5 25.5-35.3 62.1-35.3c45.1 0 79.2 29.5 79.2 92.7v105.6z"
                          ></path>
                        </svg>
                        Sign up with LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

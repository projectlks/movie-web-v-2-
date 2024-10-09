import React, { useRef, useState } from 'react';
import Email from "./email";
import Password from './password';
import SignUp from "./signUp";

import useLogin from '../../hooks/useLogin';


import left from "../../assets/left.svg";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSwitch, setIsSwitch] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  const navigate = useNavigate();



  const handelEnter = (e) => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      if (e.target === emailRef.current) {
        passwordRef.current.focus();
      }
      if (e.target === passwordRef.current) {
        loginFun();
      }
    }
  };


let { loading, error, logIn } = useLogin();


const loginFun = async () => {
  if ( email && password) {
    let user = await logIn(email, password);
    if (user) {
      navigate("/home");
    }
  } else {
    if (!email) setEmailError(true);
    if (!password) setPasswordError(true);
  }
};


  return (
    <>
      <section className="w-full">
        <section className="max-w-lg w-[90%] mx-auto h-screen flex items-center justify-center overflow-y-auto overflow-x-hidden transition-all transform relative">
          <div
            className={`w-full pb-3 pt-6 px-6 md:px-8 mb:pb-3 md:pt-8 rounded-lg transition-all absolute bg-blue-800 bg-opacity-20 ${
              !isSwitch ? "left-0 delay-300" : "-left-full"
            }`}
          >
            <h1 className="md:text-4xl text-3xl font-bold w-full mb-2 text-center">
              Welcome Back!
            </h1>
            <p className="mb-6 w-full text-ellipsis overflow-hidden whitespace-nowrap text-lg font-semibold text-blue-500 ">
              Log in to continue exploring!
            </p>

            <Email
              email={email}
              setEmail={setEmail}
              emailRef={emailRef}
              handelEnter={handelEnter}
              emailError={emailError}
              setEmailError={setEmailError}
            />
            <Password
              password={password}
              setPassword={setPassword}
              passwordRef={passwordRef}
              handelEnter={handelEnter}
              passwordError={passwordError}
              setPasswordError={setPasswordError}
            />

            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="w-full flex justify-center">
              <button
                type="button"
                onClick={loginFun}
                className="w-[80%] flex justify-center mb-3 transition-all py-2 font-bold text-center bg-blue-500 bg-opacity-20 hover:bg-opacity-30 rounded-lg"
              >
                {/* loading icon */}
                {loading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-6 w-6 text-blue-700 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                <h1> Login</h1>
              </button>
            </div>

            <div className="flex flex-col md:flex-row space-x-1 text-xs md:text-base space-y-1 md:space-y-0 md:space-x-1 justify-center items-center">
              <p>If you don't have an account,</p>
              <p
                className="cursor-pointer hover:text-blue-800 transition-all"
                onClick={() => setIsSwitch(true)}
              >
                Create an Account
              </p>
            </div>
          </div>
          {/* sign Up Form */}
          <div
            className={`w-full pb-3 pt-6 px-6 md:px-8 mb:pb-3 md:pt-8 rounded-lg transition-all absolute bg-blue-800 bg-opacity-20 ${
              isSwitch ? "right-0 delay-300" : "-right-full"
            }`}
          >
            <SignUp setIsSwitch={setIsSwitch} />
          </div>
        </section>

        <img
          src={left}
          className="absolute w-10 h-10 top-3 left-3"
          alt=""
          onClick={() => navigate(-1)}
        />
      </section>
    </>
  );
}

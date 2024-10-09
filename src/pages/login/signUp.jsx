import React, { useRef, useState } from "react";
import UserName from "./userName";
import SingupEmail from "./signupEmail";
import SingupPassword from "./signupPassword";
import { useNavigate } from "react-router";
import useSignup from "../../hooks/useSignup";

export default function signUp({ setIsSwitch }) {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handelEnter = (e) => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      if (e.target === usernameRef.current) {
        emailRef.current.focus();
      }
      if (e.target === emailRef.current) {
        passwordRef.current.focus();
      }
      if (e.target === passwordRef.current) {
        signupFun();
      }
    }
  };
  let { loading, error, signUp } = useSignup();

  const signupFun = async () => {
    if ( email && password) {
      let user = await signUp(email, password);
      if (user) {
        navigate("/home");
      }
    } else {
      // if (!username) setUsernameError(true);
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
    }
  };
  return (
    <>
      <h1 className="md:text-4xl text-3xl font-bold w-full mb-2 text-center">
        Join Us!
      </h1>
      <p className="mb-6 w-full text-ellipsis overflow-hidden whitespace-nowrap text-lg font-semibold text-blue-500">
        Start your journey for free! It's quick and easy!
      </p>

      {/* <UserName
        username={username}
        setUsername={setUsername}
        usernameRef={usernameRef}
        handelEnter={handelEnter}
        usernameError={usernameError}
        setUsernameError={setUsernameError}
      /> */}

      <SingupEmail
        email={email}
        setEmail={setEmail}
        emailRef={emailRef}
        handelEnter={handelEnter}
        emailError={emailError}
        setEmailError={setEmailError}
      />
      <SingupPassword
        password={password}
        setPassword={setPassword}
        passwordRef={passwordRef}
        handelEnter={handelEnter}
        passwordError={passwordError}
        setPasswordError={setPasswordError}
      />
      {error && <p className="text-red-500 mb-2"> {error}</p>}
      <div className="w-full flex justify-center">
        <button
          type="button"
          onClick={signupFun}
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
          <h1> Sign Up</h1>
        </button>
      </div>
      <div className="flex md:text-base text-xs space-x-1 justify-center">
        <p>If you have an account.</p>
        <p
          className="cursor-pointer hover:text-blue-800 transition-all"
          onClick={() => setIsSwitch(false)}
        >
          Log In
        </p>
      </div>
    </>
  );
}

import React, { useState } from "react";
import mailIcon from "../../assets/mail.svg"; // Assuming mail.svg is the icon

export default function Email({
  email,
  setEmail,
  emailRef,
  handelEnter,
  emailError,
  setEmailError
}) {
  return (
    <>
      <section className="w-full mb-6">
        <div className="relative z-0 group">
          <input
            ref={emailRef}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            onKeyDown={(e) => {
              if (email) {
                handelEnter(e);
              } else {
                setEmailError(true);
              }
            }}
            autoComplete="off"
            type="email"
            name="signup_email_input"
            id="signup_email_input"
            className={`block py-2.5 w-full text-sm border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-800 focus:outline-none focus:ring-0 focus:bg-blue-900 focus:bg-opacity-20 transition-colors px-3 peer ${
              email ? "bg-blue-900 bg-opacity-20" : "bg-transparent"
            } ${emailError ? "focus:border-red-500 border-red-500" : ""}`}
            placeholder=" "
            required
          />
          <label
            htmlFor="signup_email_input"
            className={`peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 ${
              emailError ? "peer-focus:text-red-500 text-red-400" : ""
            }`}
          >
            Email Address
          </label>
          <label htmlFor="signup_email_input">
            <img
              src={mailIcon} // Changed from 'mail' to 'mailIcon'
              className="w-6 h-6 top-1/2 transform -translate-y-1/2 absolute right-2 cursor-pointer"
              alt=""
            />
          </label>
        </div>

        {/* Email Error Message */}
        {emailError && (
          <div className="text-red-500 text-sm mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 inline mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            Please enter a valid email address.
          </div>
        )}
      </section>
    </>
  );
}

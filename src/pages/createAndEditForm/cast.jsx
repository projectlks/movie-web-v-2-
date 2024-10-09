import React, { useState } from 'react'
import plus from '../../assets/plus.svg'
import X from "../../assets/x.svg";

export default function cast({ cast, setCast }) {
  const [isDelete, setIsDelete] = useState(false);
  const [text, setText] = useState('')
  return (
    <>
      <div className="relative z-0 w-full flex h-[42px] mb-6 group">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setIsDelete(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (text !== "" && !cast.includes(text)) {
                setCast((prev) => [...prev, text]);
              }
              setText("");
            }
          }}
          type="text"
          name="castMenbers"
          id="castMenbers"
          className={`block py-2.5  w-full text-sm   border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-800 focus:outline-none focus:ring-0 focus:bg-blue-900 focus:bg-opacity-20 transition-colors px-3 peer ${
            cast.length ? "bg-blue-900 bg-opacity-20" : " bg-transparent"
          }`}
          placeholder=" "
          required
        />
        <label
          htmlFor="castMenbers"
          className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
        >
          Cast casts
        </label>
        {/* plus icon */}
        <div
          className="h-full cursor-pointer  aspect-square flex justify-center transition-all items-center p-1  rounded-full"
          onClick={() => {
            if (text !== "" && !cast.includes(text)) {
              setCast((prev) => [...prev, text]);
            }
            setText("");
          }}
        >
          <img
            src={plus}
            alt=""
            className="w-full h-full active:w-[90%] active:has-[90%]:"
          />
        </div>
      </div>

      {/* to show cast */}
      <div
        className={`w-full  px-2 items-center flex space-x-2 -z-10 ${
          !!cast.length ? "mb-6" : "hidden"
        }`}
        onClick={() => setIsDelete(false)}
      >
        <p className="w-24 py-1 pxcast-2 whitespace-nowrap select-none">
          {" "}
          cast :{" "}
        </p>

        {cast && !!cast.length && (
          <span className="w-full flex flex-wrap  gap-4 ">
            {cast.map((g) => (
              <div
                className="relative cursor-pointer select-none"
                key={g}
                onDoubleClick={() => setIsDelete(true)}
              >
                <p
                  className={`px-3 py-1 border rounded text-xs ${
                    isDelete ? "border-red-500 text-red-500" : ""
                  }`}
                >
                  {g}
                </p>
                {/* delete icon */}
                {isDelete && (
                  <img
                    src={X}
                    alt="x"
                    className="w-4 h-4 absolute -top-4 -right-4 border rounded-full p-[1px] border-red-500"
                    onClick={() => {
                      let newcast = cast.filter((d) => d !== g);
                      setCast(newcast);
                    }}
                  />
                )}
              </div>
            ))}
          </span>
        )}
      </div>
    </>
  );
}

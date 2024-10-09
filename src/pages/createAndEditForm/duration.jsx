import React from 'react'
import useEdit from '../../hooks/useEdit';

export default function duration() {
  let {duration, setDuration } = useEdit()
  return (
    <>
      <div className=" space-x-3 z-0 w-full flex items-center group mb-6">
        {/* <h1 className="text-xs"> Duration </h1> */}
        <div className="relative w-full">
          <input
            value={duration}
            onChange={(e) => {
              let value = e.target.value;
              // if (value >= 0 && value <= 10) {
              setDuration(value);
            }}
            type="text"
            name="Duration"
            id="Duration"
            className={`block py-2.5  w-full text-sm   border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-800 focus:outline-none focus:ring-0 focus:bg-blue-900 focus:bg-opacity-20 transition-colors px-3 peer ${
              duration ? "bg-blue-900 bg-opacity-20" : " bg-transparent"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="Duration"
            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
          >
            Duration / Episodes
          </label>
        </div>
      </div>
    </>
  );
}

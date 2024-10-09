import React from 'react'

export default function productionCompany({ company, setCompany}) {
  return (
    <>
      <div className=" space-x-3 z-0 w-full flex items-center group mb-6">
        {/* <h1 className="text-xs"> Duration </h1> */}
        <div className="relative w-full">
          <input
            value={company}
            onChange={(e) => {
              let value = e.target.value;
              // if (value >= 0 && value <= 10) {
              setCompany(value);
            }}
            type="text"
            name="floating_company"
            id="floating_company"
            className={`block py-2.5  w-full text-sm   border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-800 focus:outline-none focus:ring-0 focus:bg-blue-900 focus:bg-opacity-20 transition-colors px-3 peer ${
              company ? "bg-blue-900 bg-opacity-20" : " bg-transparent"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
          >
           Production Company
          </label>
        </div>
      </div>
    </>
  );
}

import React from 'react'

export default function date({ year, setYear, month, setMonth, day, setDay, setSwitchForm }) {
  return (
    <>
      <h1 className="mb-5"> Release Date or First Aired Date</h1>
      <div className="grid grid-cols-3 z-10 gap-6">
        {/* year */}
        <div className="relative  w-full mb-5 group">
          <input
            value={year}
            onChange={(e) => {
              let value = e.target.value;
              if (/^\d*$/.test(value) && value >= 0 && value <= 9999) {
                setYear(value);
              }
            }}
            type="text"
            name="year" // Changed name to descriptive one
            id="year" // Changed ID to descriptive one
            className={`block py-2.5  w-full text-sm    border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-800 focus:outline-none focus:ring-0 focus:bg-blue-900 focus:bg-opacity-20 transition-colors px-3 peer ${
              year ? "bg-blue-900 bg-opacity-20" : " bg-transparent"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="year" // Changed htmlFor to match ID
            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
          >
            Year
          </label>
        </div>
        {/* month */}
        <div className="relative w-full mb-5 group">
          <input
            value={month}
            onChange={(e) => {
              let value = e.target.value;
              if (/^\d*$/.test(value) && value >= 0 && value <= 12) {
                setMonth(value);
              }
            }}
            type="text"
            name="month" // Changed name to descriptive one
            id="month" // Changed ID to descriptive one
            className={`block py-2.5  w-full text-sm   border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-800 focus:outline-none focus:ring-0 focus:bg-blue-900 focus:bg-opacity-20 transition-colors px-3 peer ${
              month ? "bg-blue-900 bg-opacity-20" : " bg-transparent"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="month" // Changed htmlFor to match ID
            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
          >
            Month
          </label>
        </div>
        {/* Day */}
        <div className="relative  w-full mb-5 group">
          <input
            value={day}
            onChange={(e) => {
              let value = e.target.value;
              if (/^\d*$/.test(value) && value >= 0 && value <= 31) {
                setDay(value);
              }
            }}
            type="text"
            name="day" // Changed name to descriptive one
            id="day" // Changed ID to descriptive one
            className={`block py-2.5  w-full text-sm   border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-800 focus:outline-none focus:ring-0 focus:bg-blue-900 focus:bg-opacity-20 transition-colors px-3 peer ${
              day ? "bg-blue-900 bg-opacity-20" : " bg-transparent"
            }`}
            placeholder=" "
            required
          />
          <label
            htmlFor="day" // Changed htmlFor to match ID
            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
          >
            Day
          </label>
        </div>
      </div>

      <div className="w-full h-8 flex  space-x-3 items-center ">
        <div className="w-full flex space-x-3">
          <p
            className="text-xs transition-all text-gray-50 px-3 py-2 bg-blue-900 bg-opacity-20 hover:bg-opacity-80 rounded-md cursor-pointer"
            onClick={() => {
              setYear(new Date().getFullYear());
              setMonth(new Date().getMonth() + 1);
              setDay(new Date().getDate());
            }}
          >
            Fill with Today's Date
          </p>
        </div>

        <svg
          onClick={() => {
            setSwitchForm(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-3 mr-3 hover:mr-2 h-full  hover:text-red-600 transition-all cursor-pointer "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </>
  );
}

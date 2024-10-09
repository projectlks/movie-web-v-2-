import React from 'react'

export default function review({review, setReview}) {
  return (
    <>
      <div className="relative z-0 w-full mb-6 group">
        <textarea
          value={review}
          onChange={(e) => {
            setReview(e.target.value);
          }}
          type="text"
          name="review" 
          id="review"
          className={`block py-2.5  w-full text-sm  overflow-hidden   border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-800 focus:outline-none focus:ring-0 focus:bg-blue-900 focus:bg-opacity-20 transition-colors px-3 peer ${
            review ? "bg-blue-900 bg-opacity-20" : " bg-transparent"
          }`}
          style={{    textWrap: 'none'}}
          placeholder=" "
          required
        />
        <label
          htmlFor="review" // Changed htmlFor to match ID
          className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
        >
          Reviews
        </label>
      </div>
    </>
  );
}

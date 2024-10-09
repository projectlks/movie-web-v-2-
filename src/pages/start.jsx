import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../img/start.jpg'

export default function start() {
  return (
    <section
      className="w-full h-screen   bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${image1})` }}
    >
      <Link to="/home">
        <button className="bg-blue-500 bg-opacity-20 transition-all hover:bg-blue-900 hover:bg-opacity-20 px-4 py-2 absolute top-[80%] mx-auto left-0 right-0 w-[200px] rounded-xl flex justify-center items-center border border-blue-800">
          Get Start
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-1 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </Link>

      <div className="flex justify-center absolute top-[90%] w-full">
        <p style={{textWrap : 'balance'}} className='text-center'>
          Welcome to our movie website! To unlock a world of entertainment, sign
          in now.
        </p>
      </div>
    </section>
  );
}

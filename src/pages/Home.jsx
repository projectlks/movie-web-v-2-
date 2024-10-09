import React, { useState } from "react";
import Menu from "./menu";
import Search from "./search";
import menuIcon from "../assets/menu.svg";
import MainShow from "../components/mainShow";
import PromotionShow from "../components/PromotionShow";

export default function App() {
  const [leftPosition, setLeftPosition] = useState(-100);

  return (
    <section >
      {/* Hero section */}
      <section
        className="hero-section border-b-2 relative bg-cover bg-no-repeat bg-center h-[300px] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(https://cdn.marvel.com/content/1x/deadpool3_lob_fea_dsk_01.jpg)`
        }}
      >
        <div className="absolute inset-0 opacity-50"></div>
        <h1 className="text-4xl font-bold mb-6 z-10">Eternal Odyssey</h1>
        <p className="text-lg mb-8 z-10 text-center">
          Experience the epic adventure that spans galaxies. Prepare to be
          captivated by the wonders of the cosmos.
        </p>
        <button className="px-4 py-2 bg-blue-500 rounded-full text-lg uppercase tracking-wide z-10 hover:bg-orange-600 transition duration-300 ease-in-out">
          <p className="text-sm">Explore the Odyssey</p>
        </button>
      </section>

      {/* Upcoming Section */}
      <h1 className="text-4xl font-bold">Upcoming Movies</h1>
      <PromotionShow
        url={`https://api.themoviedb.org/3/movie/upcoming?api_key=31d6afcc99f364c40d22f14b2fe5bc6e`}
        arrayName={'results'}
      />

      {/* Search input */}
      <div>
        <Search />
      </div>

      <div className="flex relative w-full">
        {/* Menu icon */}
        <div
          className="fixed right-3 top-3 rounded-full transition-all bg-blue-400 z-50 bg-opacity-20 hover:bg-opacity-80"
          onClick={() => {
            setLeftPosition(leftPosition !== 0 ? 0 : -100);
          }}
        >
          <img src={menuIcon} alt="menu" className="w-7 m-1 h-7" />
        </div>

        {/* Left */}
        <div
          className={`${
            leftPosition === 0 ? "xl:w-[300px]" : "w-0"
          } transition-all overflow-visible z-50`}
        >
          <span
            style={{ left: `${leftPosition}%` }}
            className={`left w-[300px] overflow-x-visible xl:w-[20%] z-50 h-screen overflow-auto md:left-0 fixed top-1 md:inline-block transition-all bg-black`}
          >
            <Menu setLeftPosition={setLeftPosition} />
          </span>
        </div>

        {/* Right */}
        <div className={` w-[90%] mx-auto right`}>
          <MainShow />
        </div>
      </div>
    </section>
  );
}

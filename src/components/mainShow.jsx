import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import MoviePageLoading from "./loading/MoviePageLoading.jsx";
import useFetch from "../hooks/useFetch";
import useFetchGenres from "../hooks/useFetchGenres.jsx";
import useMainUrl from "../hooks/useMainUrl.jsx";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import star from "../assets/star.svg";

export default function MainShow() {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const { link } = useMainUrl();
  const { data, loading, error } = useFetch(link);
  const { movieGenres, tvGenres } = useFetchGenres();

  const handleWidth = (size) => {
    let perPage = 10;
    if (size < 600) {
      perPage = 6;
    } else if (size < 1000) {
      perPage = 8;
    }
    setItemsPerPage(perPage);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      setCurrentPage(1);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleWidth(screenSize);
    if (data && data.results) {
      const totalPages = Math.ceil(data.results.length / itemsPerPage);
      setTotalPages(totalPages);
    }
  }, [data, itemsPerPage, screenSize]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const nextFun = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevFun = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      {error && (
        <h1 className="w-full text-center text-red-600 text-4xl">{error}</h1>
      )}
      <section className="relative  w-full min-h-screen pb-[90px]">
        {!error && loading && <MoviePageLoading itemsPerPage={itemsPerPage} />}
        {!loading && (
          <SwitchTransition>
            <CSSTransition timeout={300} classNames="fade" key={startIndex}>
              <div className="w-full grid grid-cols-2  md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-10 px-3 mt-3 md:px-5">
                {data &&
                  data.results &&
                  data.results.slice(startIndex, endIndex).map((m) => (
                    <Link
                      to={
                        !m.name
                          ? `/detailMovie/${m.id}`
                          : `/detailSeries/${m.id}`
                      }
                      key={m.id}
                    >
                      <div className="relative aspect-[1/1.5] animate-right-to-left group h-full w-full mx-auto">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                          alt={`${m.title} Poster`}
                          className="w-full rounded-xl transition-all group-hover:brightness-[30%] group-hover:scale-105"
                        />
                        {m.media_type && m.media_type === "tv" && (
                          <p className="absolute top-2 left-2 px-3 py-1 rounded-full bg-black text-white bg-opacity-50 flex items-center">
                            Series
                          </p>
                        )}
                        <p className="absolute top-2 right-2 px-3 py-1 rounded-full bg-black text-white bg-opacity-50 flex items-center">
                          <img src={star} alt="star" className="w-4 h-4 mr-1" />
                          {m.vote_average.toFixed(1)}
                        </p>
                        <h1 className="absolute text-xl whitespace-nowrap overflow-hidden overflow-ellipsis w-full px-3 top-[90%] group-hover:top-[50%] opacity-0 text-white group-hover:opacity-100 transition-all duration-4000 ease left-0">
                          {m.title} {m.name}
                        </h1>
                        <p className="absolute top-[90%] text-md group-hover:top-[60%] opacity-0 text-white group-hover:opacity-100 transition-all duration-4000 ease left-3 delay-200 flex items-center">
                          <img src={star} alt="star" className="w-4 h-4 mr-1" />
                          {m.vote_average} | {m.release_date?.slice(0, 4)}{" "}
                          {m.first_air_date?.slice(0, 4)}
                        </p>
                        <div className="absolute w-full px-3 text-base top-[90%] left-0 group-hover:top-[69%] opacity-0 text-white group-hover:opacity-100 transition-all duration-4000 ease delay-300 flex items-center whitespace-nowrap overflow-hidden space-x-2 overflow-ellipsis">
                          {m.genre_ids &&
                            m.genre_ids
                              .slice(0, 1)
                              .map((genreId) => (
                                <span key={genreId}>
                                  {m.name
                                    ? tvGenres && tvGenres[genreId]
                                    : movieGenres && movieGenres[genreId]}
                                </span>
                              ))}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </CSSTransition>
          </SwitchTransition>
        )}
        {data && !data.results.length && (
          <h1 className="w-full text-center py-10 text-3xl">
            Sorry, couldn't find any matches!
          </h1>
        )}
        <div className="w-full flex justify-center absolute bottom-[-25px] text-white space-x-4 mb-6 mx-auto py-6">
          <button
            onClick={prevFun}
            className="flex justify-center items-center px-4 py-2 border rounded-lg hover:bg-white hover:bg-opacity-10"
          >
            <img src={left} alt="left" className="w-6 h-6 mr-2" />
            <p className="line-clamp-1">Prev</p>
          </button>
          <button
            onClick={nextFun}
            className="flex justify-center items-center px-4 py-2 border rounded-lg hover:bg-white hover:bg-opacity-10"
          >
            <p>Next</p>
            <img src={right} alt="right" className="w-6 h-6 ml-2" />
          </button>
        </div>
      </section>
    </>
  );
}

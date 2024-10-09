import React from "react";
import { useNavigate, useParams } from "react-router";
import PromotionShow from "../components/PromotionShow";
import useFetch from "../hooks/useFetch";
import left from "../assets/left.svg";


export default function CastDetailPage() {
  let { id } = useParams();

let { data, loading } = useFetch(
  `https://api.themoviedb.org/3/person/${id}?language=en-US%27&api_key=31d6afcc99f364c40d22f14b2fe5bc6e`
);
  let navigate = useNavigate()

  return (
    <>
      {loading && (
        <section className="w-[90%] mt-10 h-dvh border-blue-300 animate-pulse border py-10 xl:w-[80%] flex flex-wrap md:flex-nowrap space-x-0   rounded-lg shadow-lg mx-auto">
          <div className="w-full p-4 h-auto mx-auto md:min-w-[40%] xl:min-w-[30%]   mb-4 md:mb-0">
            <span className="md:w-full bg-slate-700 animate-pulse block w-1/2 mx-auto  aspect-[1/1.5]  rounded-lg"></span>
          </div>

          <div className="w-full  px-8 animate-pulse md:min-w-[60%] xl:min-w-[70%]">
            <span className="w-[70%] xl:w-[400px] mb-4 block h-10 bg-slate-700 animate-pulse"></span>
            <span className="w-[80%] mb-6 block h-8 bg-slate-700 animate-pulse"></span>
            <span className="w-full  mb-2 block h-[400px] bg-slate-700 animate-pulse"></span>
            <span> </span>
          </div>
        </section>
      )}

      {!loading && data && (
        <section className="w-[90%]   py-10 xl:w-[80%] mx-auto">
          <img
            src={left}
            alt="left"
            className="w-10 h-10 fixed top-3 left-3 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <div className="w-full h-auto flex flex-wrap md:flex-nowrap  p-4  rounded-lg shadow-lg">
            <span className="w-full h-full  mx-auto md:min-w-[40%] xl:min-w-[30%]  flex items-center mb-4 md:mb-0">
              <img
                src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
                alt="profile_path"
                className="md:w-full animate-left-to-right w-1/2 mx-auto h-auto  rounded-lg"
              />
            </span>
11111111111111111111111111111
            <div className="w-full mt-10 md:mt-0 px-0 md:px-7 xl:px-10  md:min-w-[60%] xl:min-w-[70%]">
              <h1 className="md:text-4xl animate-top-to-bottomanimate-top-to-bottom text-xl  font-bold mb-2">
                {data.name}
              </h1>
              <span className="text-base animate-animate-top-to-bottom md:text-lg w-full mx-auto xl:flex xl:space-x-3 block mb-5">
                <span className=" flex space-x-3">
                  <h2 className="text-xl whitespace-nowrap text-blue-500 font-semibold">
                    Birthday :
                  </h2>
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {data.birthday},
                  </p>
                </span>
                <span className="flex space-x-3">
                  <h2 className="text-xl whitespace-nowrap text-blue-500 font-semibold">
                    Place of Birth :
                  </h2>
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {data.place_of_birth}
                  </p>
                </span>
              </span>

              <p className="text-base animate-right-to-left bg-opacity-20 text-gray-200 p-5  w-full mx-auto h-[400px] overflow-y-auto text-justify leading-relaxed md:p-10  bg-blue-600 font-serif shadow-lg rounded-lg">
                {data.biography}
              </p>
            </div>
          </div>

          <PromotionShow
            url={`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=31d6afcc99f364c40d22f14b2fe5bc6e`}
            arrayName={"cast"}
          />
        </section>
      )}
    </>
  );
}

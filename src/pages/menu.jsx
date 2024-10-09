import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";
import MenuButton from "../components/menuButton";
import FilterOption from "../components/FilterOption";
// Import profile images
import images from "../components/Image";
import img1 from "../data/profile/pf1.jfif";
// Import icons
import all from "../assets/all.svg";
import correct from "../assets/correct.svg";
import dropDown from "../assets/dropDown.svg";
import editIcon from "../assets/edit.svg";
import logout from "../assets/logout.svg";
import movie from "../assets/movie.svg";
import series from "../assets/series.svg";
import useFetch from "../hooks/useFetch";
import useMainUrl from "../hooks/useMainUrl";

// chnage link



function Menu({ setUrl, setLeftPosition }) {
  const [activeFilter, setActiveFilter] = useState("");
  const [moviesFilter, setMoviesFilter] = useState(0);
  const [seriesFilter, setSeriesFilter] = useState(0);
  const [nameEdit, setNameEdit] = useState(false);
  const [userName, setUserName] = useState(() => {
    const value = localStorage.getItem("userName");
    return value !== null ? value : "User Name";
  });
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState(() => {
    const value = localStorage.getItem("pf");
    return value !== null ? value : img1;
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
  let { changeLink } = useMainUrl();

  const filterFun = (genID, type, genType) => {
    changeLink(
      `https://api.themoviedb.org/3/discover/${genType}?api_key=31d6afcc99f364c40d22f14b2fe5bc6e&with_genres=${genID}`
    );
    setLeftPosition(-100);
    setActiveFilter(type);
  };

  let { data: movieGenres } = useFetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en%27&api_key=31d6afcc99f364c40d22f14b2fe5bc6e`
  );
  let { data: tvGenres } = useFetch(
    `https://api.themoviedb.org/3/genre/tv/list?language=en%27&api_key=31d6afcc99f364c40d22f14b2fe5bc6e`
  );


  return (
    <menu className="w-full border rounded-md min-h-full relative overflow-visible">
      {edit && (
        <div className="absolute w-[90%] mx-auto left-0 right-0 gap-2 p-2 bg-black border bg-opacity-80 z-50 top-40 rounded-lg grid grid-cols-5">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`w-[100%] rounded-sm hover:brightness-100 ${
                profile === img
                  ? "brightness-100 border-blue-800 border-4"
                  : "brightness-50"
              }`}
              alt="profile"
              onClick={() => {
                setProfile(img);
                localStorage.setItem("pf", img);
                setEdit(false);
              }}
            />
          ))}
        </div>
      )}
      <div className="w-[90%] mx-auto flex flex-col justify-center overflow-visible items-center border-b-2 py-2">
        <img
          src={profile}
          alt="profile"
          className="rounded-full mx-auto w-[50%] aspect-square"
          onDoubleClick={() => setEdit(!edit)}
        />
        <img
          src={editIcon}
          alt=""
          onClick={() => setEdit(!edit)}
          className="w-6 h-6 absolute top-2 right-2"
        />
        {!nameEdit ? (
          <h1 className="my-2" onDoubleClick={() => setNameEdit(true)}>
            {userName}
          </h1>
        ) : (
          <div className="flex items-center">
            <input
              type="text"
              className="bg-black border-b-2 border-gray-200 outline-none w-auto text-center my-2 text-[16px]"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <img
              src={correct}
              alt=""
              className="w-6 h-6"
              onClick={() => {
                if (userName === "") {
                  setUserName("User Name");
                }
                setNameEdit(false);
                localStorage.setItem("userName", userName);
              }}
            />
          </div>
        )}
      </div>
      <div className="px-3 py-3 text-sm">Library</div>

      {/* All */}
      <MenuButton
        onClick={() => {
          changeLink(
            "https://api.themoviedb.org/3/trending/all/day?api_key=31d6afcc99f364c40d22f14b2fe5bc6e"
          );
          setLeftPosition(-100);
        }}
        text={"All"}
        imgName={all}
      />

      {/* Movies */}
      <MenuButton
        imgName={movie}
        text={"Movies"}
        addclass={"justify-between p-0 space-x-0"}
        onClick={() => {
          setMoviesFilter(moviesFilter === 0 ? 180 : 0);
          setSeriesFilter(0);
        }}
      >
        <div className="min-w-[20%] rounded-full flex justify-center max-h-full">
          <img
            src={dropDown}
            alt=""
            className="h-6 w-6 transition-all hover:bg-gray-100 hover:bg-opacity-20 p-0.5 rounded-full"
            style={{ transform: `rotate(${moviesFilter}deg)` }}
          />
        </div>
      </MenuButton>
      <div
        className={`w-[90%] transition-all cursor-pointer mx-auto flex flex-col text-[14px]  px-3 rounded-md mb-2 ${
          moviesFilter === 180
            ? "h-[238px] py-2 opacity-100 bg-blue-950"
            : "h-0 py-0 opacity-0 bg-transparent"
        }`}
      >
        {moviesFilter === 180 && (
          <section>
            {movieGenres &&
              movieGenres.genres
                .slice(0, 6)
                .map((data) => (
                  <FilterOption
                    key={data.id}
                    type={data.name}
                    id={data.id}
                    filterFun={filterFun}
                    isActive={activeFilter === data.name}
                    genType={"movie"}
                  />
                ))}
          </section>
        )}
      </div>

      {/* Series */}
      <MenuButton
        imgName={series}
        text={"Series"}
        addclass={"justify-between pl-3 pr-0"}
        onClick={() => {
          setSeriesFilter(seriesFilter === 0 ? 180 : 0);
          setMoviesFilter(0);
        }}
      >
        <div className="min-w-[20%] rounded-full flex justify-center max-h-full">
          <img
            src={dropDown}
            alt=""
            className="h-6 w-6 transition-all hover:bg-gray-400 p-1 rounded-full"
            style={{ transform: `rotate(${seriesFilter}deg)` }}
          />
        </div>
      </MenuButton>
      <div
        className={`w-[90%] transition-all cursor-pointer mx-auto flex flex-col text-[14px] bg-blue-950 px-3 rounded-md mb-2 ${
          seriesFilter === 180
            ? "h-[238px] py-2 opacity-100 bg-blue-950"
            : "h-0 py-0 opacity-0 bg-transparent"
        }`}
      >
        {seriesFilter === 180 && (
          <section>
            {tvGenres &&
              tvGenres.genres
                .slice(0, 6)
                .map((data) => (
                  <FilterOption
                    key={data.id}
                    type={data.name}
                    id={data.id}
                    filterFun={filterFun}
                    isActive={activeFilter === data.name}
                    genType={"tv"}
                  />
                ))}
          </section>
        )}
      </div>

      {/* Custom */}
      <div className="px-3  py-3 text-sm">Custom</div>
      {!user ? (
        <MenuButton
          onClick={() => navigate("/login")}
          text={"Login"}
          imgName={logout}
        />
      ) : (
        <MenuButton
          text={"Logout"}
          imgName={logout}
          onClick={() => {
            signOut(auth).then(() => navigate("/login"));
          }}
        />
      )}
      <MenuButton
        onClick={() => navigate("/create")}
        text={"Create"}
        imgName={editIcon}
      />
      <MenuButton
        onClick={() => navigate("/movie")}
        text={"Dashboard"}
        imgName={editIcon}
      />
    </menu>
  );
}

export default Menu;

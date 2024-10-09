import React, { useEffect, useState } from 'react'
import plus from "../../assets/plus.svg";
import X from "../../assets/x.svg";
import useAutoComplete from '../../hooks/useAutoComplete';
import { suggestGenres } from './genresArray';

export default function ({genres, setGenres}) {
  const [type, setType] = useState("");

  const [isDelete, setIsDelete] = useState(false)
      let { handleKeys, selectIndex, filterArray } = useAutoComplete(
        suggestGenres,
        type,
        setType
      );

      useEffect(() => {
        if (!genres.length) {
          setIsDelete(false);
        }
      }, [genres]);
  return (
    <>
      <div
        className={`relative z-50 w-full  mb-6 group h-[42px] flex ${
          !!genres.length ? "mb-0" : "mb-6"
        }`}
        onClick={() => setIsDelete(false)}
      >
        <input
          value={type}
          type="text"
          onKeyDown={(e) => {
            handleKeys(e);
            if (e.key === "Enter") {
              if (
                type !== "" &&
                !filterArray.length &&
                !genres.includes(type)
              ) {
                setGenres((prev) => [...prev, type]);
                setType("");
              } else {
                setType("");
              }
            }
          }}
          onChange={(e) => {
            setType(e.target.value);
            setIsDelete(false);
          }}
          name="movieOrSeriesTitle"
          id="movieOrSeriesTitle"
          className={`block py-2.5  w-full text-sm   border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-800 focus:outline-none focus:ring-0 focus:bg-blue-900 focus:bg-opacity-20 transition-colors px-3 peer ${
            type ? "bg-blue-900 bg-opacity-20" : " bg-transparent"
          }`}
          placeholder=" "
          required
        />
        <label
          htmlFor="movieOrSeriesTitle"
          className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
        >
          Movie or Series Type
        </label>
        {/* plus icon */}
        <div
          className="h-full cursor-pointer aspect-square flex justify-center transition-all items-center p-1  rounded-full"
          onClick={() => {
            if (type !== "" && !genres.includes(type)) {
              setGenres((prev) => [...prev, type]);
            }
            setType("");
          }}
        >
          <img
            src={plus}
            alt=""
            className="w-full h-full active:w-[90%] active:has-[90%]:"
          />
        </div>

        {/* auto complete genres */}
        <div
          className={`absolute top-full max-h-[200px] w-[calc(100%-42px)]  overflow-auto ${
            filterArray.length
              ? "bg-black border-x-[1px] z-50 "
              : "hidden border-none"
          }`}
          // style={{width : calc(100% - 42px)}}
        >
          <div
            className={`bg-gray-900 ${
              type && filterArray.length ? "p-2" : "p-0"
            }`}
          >
            {type &&
              filterArray.map((data, index) => (
                <p
                  key={data.name}
                  className={`py-2 px-3  rounded-md cursor-pointer hover:bg-blue-900 hover:bg-opacity-90 ${
                    index === selectIndex ? "bg-blue-900 bg-opacity-90" : ""
                  }`}
                  onClick={() => {
                    setType(data.name);
                  }}
                >
                  {data.name}
                </p>
              ))}
          </div>
        </div>
      </div>
      {/* to show genres */}
      <div
        className={`w-full  px-2 items-center flex space-x-2 -z-10 ${
          !!genres.length ? "mb-6" : "hidden"
        }`}
        onClick={() => setIsDelete(false)}
      >
        <p className="w-24 py-1 px-2 whitespace-nowrap"> Genres : </p>

        {genres && !!genres.length && (
          <span className="w-full flex flex-wrap  gap-4 " >
            {genres.map((g) => (
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
                      let newGenres = genres.filter((d) => d !== g);
                      setGenres(newGenres);
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

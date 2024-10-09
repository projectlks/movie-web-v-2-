import React, { useEffect, useState } from "react";
import plus from "../../assets/plus.svg";
import { useParams } from "react-router";



export default function Image({setPosterPrev,poster, backDrop, setBackDrop }) {

  let [img, setImg] = useState(null);

useEffect(()=>{
    if (poster) {
      setImg(poster);
    }
},[])
  return (
    <>
      <div className="relative space-x-6 max-h-[200px] flex mb-6 justify-between w-full">
        {/* Poster image */}
        <div className="min-w-[100px] h-[200px] space-y-3 flex items-center flex-col">
          {img && (
            <div className="w-full h-full">
              <img
                src={img}
                alt="Poster Preview"
                className="w-auto h-full rounded"
                style={{ maxWidth: "100px" }}
              />
            </div>
          )}

          {!img && (
            <label
              htmlFor="poster"
              className="w-full h-full cursor-pointer flex items-center justify-center bg-blue-400 bg-opacity-30 hover:bg-opacity-20 transition-all"
            >
              <img src={plus} alt="" className="w-6 h-6" />
            </label>
          )}
          <div className="flex items-center">
            <label
              htmlFor="poster"
              className="text-xs transition-all text-gray-50 px-3 py-2 bg-blue-900 bg-opacity-20 hover:bg-opacity-80 rounded-md cursor-pointer"
            >
              Upload Poster
            </label>
            <input
              onChange={(e) => {
                setPosterPrev(e.target.files[0]);
                setImg(URL.createObjectURL(e.target.files[0]));
              }}
              type="file"
              accept="image/*"
              name="poster"
              id="poster"
              className="hidden"
            />
          </div>
        </div>

        {/* Back drop */}
        <div className="w-full overflow-hidden max-h-[200px] space-y-3 flex flex-col items-center">
          {backDrop && (
            <div className="w-full h-[156px]">
              <img
                src={backDrop}
                alt="Back Drop Preview"
                className="w-auto h-full mx-auto rounded"
              />
            </div>
          )}
          {!backDrop && (
            <label
              htmlFor="backDrop"
              className="w-full cursor-pointer h-full flex items-center justify-center bg-blue-400 bg-opacity-30 hover:bg-opacity-20 transition-all"
            >
              <img src={plus} alt="" className="w-6 h-6" />
            </label>
          )}

          <div className="flex items-center">
            <label
              htmlFor="backDrop"
              className="text-xs transition-all text-gray-50 px-3 py-2 bg-blue-900 bg-opacity-20 hover:bg-opacity-80 rounded-md cursor-pointer"
            >
              Upload Back Drop Poster
            </label>
            <input
              onChange={(e) => {
                let value = e.target.files[0];
                setBackDrop(URL.createObjectURL(value));
              }}
              type="file"
              accept="image/*"
              name="backDrop"
              id="backDrop"
              className="hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}

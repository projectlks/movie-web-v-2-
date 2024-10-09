import React from "react";

export default function MoviePageLoading({ itemsPerPage }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-10 px-3 mt-3 md:px-5 ">
      {Array.from({ length:  itemsPerPage  }).map((_, index) => (
        <div
          key={index}
          className={`rounded-xl bg-slate-700  w-full aspect-[1/1.5] animate-pulse`}
        ></div>
      ))}
    </div>
  );
}

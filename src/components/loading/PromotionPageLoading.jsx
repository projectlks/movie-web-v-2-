import React from "react";

export default function PromotionPageLoading() {
  return (
    <section className="w-full flex  py-4 px-5 space-x-10 overflow-auto">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`rounded-lg  border flex min-w-[250px] h-[130px]  `}
        >
          <span className="w-20 rounded-md m-2 object-contain animate-pulse bg-slate-700"></span>
          <div className="w-[170px] p-2 px-4 h-full flex justify-between flex-col">
            <div className=" w-full  flex flex-col h-full">
              <span className="w-20 block h-4 bg-slate-700 my-2 animate-pulse"></span>
              <span className="w-full h-[1px] border mb-2"></span>
              <span className="h-3 w-full  mb-4 pt-1 bg-slate-700 animate-pulse"></span>
            </div>

            <div className="w-full flex space-x-2 h-10">
              <span className="w-[60px] rounded-md h-7 bg-slate-700 animate-pulse"></span>
              <span className="w-[45px] rounded-md h-7 bg-slate-700 animate-pulse"></span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

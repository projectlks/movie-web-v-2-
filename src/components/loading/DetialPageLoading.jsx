import React, { useState } from 'react'

export default function DetialPageLoading() {



  return (
    <div className="md:border animate-left-to-right rounded-lg  py-0 xl:py-0 md:py-[50px]  min-h-screen m-10 flex w-full justify-center flex-col md:flex-row md:w-[80%]  mx-auto">
      <div className="w-[50%]  md:mt-0 mx-auto flex justify-center items-center  ">
        <span className="w-[80%] block mx-auto aspect-[1/1.5] h-auto  shadow-md bg-slate-700 animate-pulse"></span>
      </div>

      <div className="w-full flex flex-col justify-center px-10 my-[50px] md:mt-0 ">
        <span className="h-[48px] w-[250px] mb-7 bg-slate-700 animate-pulse"></span>
        <span className="h-[36px] w-[350px] mb-3 bg-slate-700 animate-pulse"></span>
        <span className="h-[24px] w-[300px]  mb-7 bg-slate-700 animate-pulse max-w-full"></span>
        <span className="h-[60px] md:w-[450px] mb-4 bg-slate-700 w-[80%] animate-pulse"></span>
        <span className="h-[100px] w-full mb-4 bg-slate-700 animate-pulse"></span>
      </div>
    </div>
  );
}

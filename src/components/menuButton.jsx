import React from "react";

export default function MenuButton({
  imgName,
  text,
  children,
  ParentType = "li",
  addclass,

  ...props
}) {
  return (
    <ParentType
      className={`w-[90%]  mx-auto cursor-pointer flex text-[14px] items-center  pl-3 rounded-md py-2 hover:bg-opacity-80 hover:bg-blue-900 mb-2 ${addclass}`}
      {...props}
    >
      <div className="flex space-x-2 h-full  w-full">
        <img src={imgName} alt="" className="w-6 h-6" />
        <p>{text}</p>
      </div>
      {children}
    </ParentType>
  );
}

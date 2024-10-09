import React from "react";

const FilterOption = ({ type, id, filterFun, isActive, genType }) => {
  return (
    <div
      className={`transition-all animate-top-to-bottom px-3 rounded-md py-2 w-full hover:bg-blue-600 ${
        isActive ? "bg-cyan-600" : "bg-transparent"
      }`}
      onClick={() => filterFun(id, type, genType)}
    >
      <p>{type}</p>
    </div>
  );
};

export default FilterOption;

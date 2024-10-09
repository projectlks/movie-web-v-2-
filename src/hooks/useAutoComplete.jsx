import { useEffect, useState } from "react";

let useAutoComplete = (resultArray, text, setText) => {
  const [selectIndex, setSelectIndex] = useState(-1); 
          const [filterArray, setFilterArray] = useState([]);
          useEffect(() => {
            setFilterArray(
              resultArray.filter((data) => data.name.toLowerCase().includes(text.toLowerCase())
                )
            );
           
          }, [text]);

          useEffect(() => {
            setSelectIndex(-1);
          }, [filterArray]);


  let handleKeys = async (e) => {
    if (e.key === "ArrowDown") {
      if (selectIndex !== filterArray.length - 1) {
        setSelectIndex((prev) => prev + 1);
      } else {
        setSelectIndex(0);
      }
    } else if (e.key === "ArrowUp") {
      if (selectIndex !== 0) {
        setSelectIndex((prev) => prev - 1);
      } else {
        setSelectIndex(filterArray.length - 1);
      }
    } else if (e.key === "Enter") {
      if (filterArray.length) {
        let data = filterArray[selectIndex].name;

        setText(data);
      }
    }
      if (text === "") {
        setSelectIndex(-1);
      }
     

    return selectIndex;
  };

  return { selectIndex, handleKeys, filterArray };
};

export default useAutoComplete

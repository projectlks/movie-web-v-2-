import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { database } from "../firebase";
import useFirestore from "./useFirestore";
import useFetch from "./useFetch";
import useMainUrl from "./useMainUrl";

const useSortAndFilter = () => {
  const [finalData, setFinalData] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");


// let {getCollection} = useFirestore()
// let { loading, error, data } = getCollection("movie");
 let {link} =  useMainUrl()
let { loading, error, data } = useFetch(link);
  useEffect(() => {
    if (data) {
      let filteredData = [...data.results];

      if (searchValue) {
        filteredData = filteredData.filter((d) =>
          d.original_title.toLowerCase().includes(searchValue.toLowerCase())
        );
      }

      if (sortValue === "original_title") {
        filteredData.sort((a, b) => a.title.localeCompare(b.original_title));
      }
      if (sortValue === "release_date") {
        filteredData.sort((a, b) => a.date.localeCompare(b.release_date));
      }
      if (sortValue === "id") {
        filteredData.sort((a, b) => a.id - b.id);
      }

      setFinalData([...filteredData]);
    }
  }, [data, searchValue, sortValue]);


  return {
    finalData,
    setFinalData,
    sortValue,
    setSortValue,
    setSearchValue,
    loading,
    error
  };
};

export default useSortAndFilter;

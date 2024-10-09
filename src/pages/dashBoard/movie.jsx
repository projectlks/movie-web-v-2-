import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import useSortAndFilter from "../../hooks/useSortAndFilter";
import useFirestore from "../../hooks/useFirestore";
import plus from '../../assets/plus.svg'
import PageLoading from '../../components/loading/PageLoading'
export default function Movie() {
  const [isSoft, setIsSoft] = useState(false);
  const [deleteID, setDeleteID] = useState("");

  let navigate = useNavigate();

  let { finalData,setFinalData, searchValue, sortValue, setSearchValue, setSortValue, loading, error} =
    useSortAndFilter();

let {deleteDocument} = useFirestore()

  return (
    <>
      {/* <Account/> */}
      <section className="w-full md:p-10 p-2 ">
        {/* top  */}
        <div className="w-full py-4 xl:px-8 px-4 border items-center flex justify-between border-blue-800">
          <h1 className="md:text-3xl xl:text-4xl text-2xl font-bold whitespace-nowrap">
            Movies - {finalData && finalData.length}
          </h1>

          {/* search input */}
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            aria-describedby="helper-text-explanation"
            className="md:w-[50%] hidden md:block  px-6 py-2 cursor-pointer rounded-xl border-gray-50 bg-blue-500 bg-opacity-20 focus:border-blue-800 focus:bg-blue-900 focus:bg-opacity-20  border outline-none"
            placeholder=" Search movie here ... "
          />

          <button
            onClick={() => {
              navigate("/create");
            }}
            className="relative inline-flex bg-transparent  h-[42px] items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-300 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none "
          >
            <span className="relative w-[130px] h-full flex items-center justify-evenly py-[6px] text-gray-50 transition-all ease-in  bg-black rounded-md group-hover:text-gray-900 group-hover:bg-opacity-0">
              <img src={plus} alt="plus" className="h-full" />
              <p>Add More</p>
            </span>
          </button>

          {/* Sort by */}
          <div className="py-1 px-4 hidden xl:inline-block relative whitespace-nowrap">
            <div
              className="md:text-xl cursor-pointer bg-gray-300 transition-all bg-opacity-80 hover:bg-opacity-100 text-gray-900 font-bold px-6 py-1 items-center space-x-3 rounded flex"
              onClick={() => {
                setIsSoft(!isSoft);
              }}
            >
              <h1>Sort By </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 text-gray-900 font-bold transition-all transform ${
                  isSoft ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Select value */}
            <div
              className={`w-full transition-all absolute px-4 right-0 ${
                isSoft
                  ? "top-full opacity-100 z-50"
                  : "-top-full opacity-0 -z-10"
              }`}
            >
              <div className="w-full px-2 text-sm bg-gray-300 text-gray-900 font-bold py-2 rounded">
                <p
                  className="cursor-pointer rounded-sm bg-transparent px-5 py-1 hover:bg-gray-500 hover:text-gray-200"
                  onClick={() => {
                    setSortValue("original_title");
                  }}
                >
                  Name
                </p>
                <p
                  className="cursor-pointer rounded-sm px-5 py-1 hover:bg-gray-500 hover:text-gray-200"
                  onClick={() => {
                    setSortValue("release_date");
                  }}
                >
                  Date
                </p>
                <p
                  className="cursor-pointer rounded-sm px-5 py-1 hover:bg-gray-500 hover:text-gray-200"
                  onClick={() => {
                    setSortValue("id");
                  }}
                >
                  ID
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="relative overflow-x-auto border border-blue-800 py-4 xl:px-8 px-4 shadow-md rounded">
          <table className="w-full text-sm text-left rounded-sm text-gray-50 border-collapse">
            <thead className="text-base text-gray-50 uppercase bg-blue-800 bg-opacity-50 border border-blue-500">
              <tr>
                <th scope="col" className="px-6 py-4 border-r border-blue-500">
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 border-r border-blue-500 "
                  style={{ textWrap: "balance" }}
                >
                  Movie Title
                </th>
                <th scope="col" className="px-6 py-4 border-r border-blue-500">
                  Release Date
                </th>
                <th scope="col" className="px-6 py-4 border-r border-blue-500">
                  Genre
                </th>
                <th scope="col" className="px-6 py-4 border-r border-blue-500">
                  Director
                </th>
                <th scope="col" className="px-6 py-4 border-r border-blue-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="border border-blue-500">
              {/* show  data*/}
              {finalData &&
                finalData.map((movie) => (
                  <tr
                    key={movie.id}
                    className="odd:bg-gray-700  even:bg-blue-700 even:bg-opacity-20 odd:bg-opacity-20 dark:border-gray-700 "
                  >
                    <th
                      scope="row"
                      className="px-6 py-3 border-r border-blue-500 "
                    >
                      {movie.id}
                    </th>
                    <td
                      className="px-6 py-3 border-r border-blue-500 cursor-pointer hover:text-blue-600 hover:underline"
                      onClick={() => {
                        navigate(`/detailMovie/${movie.id}`);
                      }}
                    >
                      {movie.title}
                    </td>

                    <td className="px-6 py-3 border-r border-blue-500">
                      {movie.release_date}
                    </td>
                    <td className="px-6 py-3 border-r border-blue-500">
                      {movie.genres && movie.genres.slice(0, 1).map((g) => g)}
                    </td>
                    <td className="px-6 py-3 border-r border-blue-500">
                      {movie.director}
                    </td>
                    <td className="px-6 py-3  border-blue-500 flex space-x-3">
                      <p
                        className="px-3 text-sm py-1 bg-green-600 cursor-pointer transition-all hover:bg-green-700 rounded"
                        onClick={() => navigate(`/edit/${movie.id}`)}
                      >
                        Edit
                      </p>
                      <p
                        className="px-3 text-sm py-1 bg-red-600 cursor-pointer transition-all hover:bg-red-700 rounded"
                        onClick={() => setDeleteID(movie.id)}
                      >
                        Delete
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* {error} */}
      {error && <p> {error}</p>}
      {/* loading */}
      {loading && <PageLoading />}
      {/* delete section */}
      {deleteID && (
        <form
          className="fixed top-0 w-full h-screen flex-col bg-black bg-opacity-50 flex justify-center items-center "
          onClick={() => {
            setDeleteID("");
          }}
        >
          <div className="flex-col flex justify-center w-[350px] md:w-[500px] items-center bg-gray-200 text-gray-900 rounded-md py-6 px-8">
            <h1 className="text-2xl font-bold md:text-3xl">
              Are you sure you want to delete this item?
            </h1>
            <p className="text-sm mt-2">
              This action cannot be undone. Deleting this item will permanently
              remove it from your records.
            </p>
            <div className="flex justify-end space-x-3 w-full mt-4">
              <p
                className="px-3 py-1 transition-all border hover:border-gray-600 rounded cursor-pointer hover:bg-gray-300"
                onClick={() => setDeleteID("")}
              >
                Cancel
              </p>
              <p
                className="px-3 py-1 bg-red-600 text-gray-100 rounded cursor-pointer hover:bg-red-700"
                onClick={(e) => {
                  e.preventDefault();
                  setFinalData((prev) =>
                    prev.filter((data) => data.id !== deleteID)
                  );
                  deleteDocument("movie", deleteID);
                }}
              >
                Yes, Delete
              </p>
            </div>
          </div>
        </form>
      )}
    </>
  );
}



import React, { createContext, useReducer } from "react";

// Create context
const MainUrlContext = createContext();

// Define reducer
const UrlReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LINK":
      return { ...state, link: action.payload };
    default:
      return state;
  }
};

// Create provider component
const MainUrlContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UrlReducer, {
    link: "https://api.themoviedb.org/3/trending/movie/day?api_key=31d6afcc99f364c40d22f14b2fe5bc6e"
  });

  // Function to change the link
  const changeLink = (link) => {
    dispatch({ type: "CHANGE_LINK", payload: link });
  };

  return (
    <MainUrlContext.Provider value={{ ...state, changeLink }}>
      {children}
    </MainUrlContext.Provider>
  );
};

export { MainUrlContext, MainUrlContextProvider };

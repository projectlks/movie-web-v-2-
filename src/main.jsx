import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  Router  from "./router";
import AuthContextProvider from './contexts/AuthContext.jsx';
import { MainUrlContextProvider } from './contexts/MainUrlContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <MainUrlContextProvider>
      <Router />
    </MainUrlContextProvider>
  </AuthContextProvider>
);

import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Start from "../pages/start.jsx";
import Detial from "../pages/detial.jsx";
import Login from "../pages/login/login.jsx";
import Layout from "../pages/layout.jsx";
import CreateAndEditForm from "../pages/createAndEditForm/createAndEditForm.jsx";
import Movie from "../pages/dashBoard/movie.jsx";
import CastDetailPage from "../pages/CastDetailPage.jsx";
import  { AuthContext } from "../contexts/AuthContext.jsx";
import React, { useContext } from 'react'

export default function index() {
let { authReady, user } = useContext(AuthContext);

  const isUserLogin = !!user

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Start />
        },
        {
          path: "/home",
          element: isUserLogin ? <Home /> : <Navigate to="/login" />
        },
        {
          path: "/detailMovie/:id",
          element: isUserLogin ? <Detial /> : <Navigate to="/login" />
        },
        {
          path: "/detailSeries/:id",
          element: isUserLogin ? <Detial /> : <Navigate to="/login" />
        },
        {
          path: "/login",
          element: !isUserLogin ? <Login /> : <Navigate to="/home" />
        },
        {
          path: "/create",
          element: isUserLogin ? (
            <CreateAndEditForm />
          ) : (
            <Navigate to="/login" />
          )
        },
        {
          path: "/edit/:id",
          element: isUserLogin ? (
            <CreateAndEditForm />
          ) : (
            <Navigate to="/login" />
          )
        },
        {
          path: "/movie",
          element: isUserLogin ? <Movie /> : <Navigate to="/login" />
        },
        {
          path: "/cast/:id",
          element: isUserLogin ? <CastDetailPage /> : <Navigate to="/login" />
        }
      ]
    }
  ]);

  return (
   authReady && <RouterProvider router={router} />
  )
}

import React from "react";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Dashboard/Dashboard";
import Auth from "../pages/Auth/Auth";
import Orders from "../pages/Orders/Orders";
import Clients from "../pages/Clients/Clients";
import Marketing from "../pages/Marketing/Marketing";
import Sales from "./../pages/Marketing/Sales/Sales";
import Banners from "./../pages/Marketing/Banners/Banners";
import Reviews from "./../pages/Marketing/Reviews/Reviews";
import Sending from "../pages/Marketing/Sending/Sending";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/marketing",
        element: <Marketing />,
      },
      {
        path: "/marketing/sales",
        element: <Sales />,
      },
      {
        path: "/marketing/banners",
        element: <Banners />,
      },
      {
        path: "/marketing/reviews",
        element: <Reviews />,
      },
      {
        path: "/marketing/sending",
        element: <Sending />,
      },
    ],
  },
  {
    path: "/login",
    element: <Auth />,
  },
]);

export default router;

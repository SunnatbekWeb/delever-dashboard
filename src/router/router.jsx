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
import Company from "../pages/Settings/Company/Company";
import Filials from "../pages/Settings/Filials/Filials";
import Rates from "../pages/Settings/Rates/Rates";
import Liko from "../pages/Settings/Liko/Liko";

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
      {
        path: "/settings/company",
        element: <Company />,
      },
      {
        path: "/settings/company/filials",
        element: <Filials />,
      },
      {
        path: "settings/rates",
        element: <Rates />,
      },
      {
        path:"/settings/liko",
        element: <Liko />,
      }
    ],
  },
  {
    path: "/login",
    element: <Auth />,
  },
]);

export default router;

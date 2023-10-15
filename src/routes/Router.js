import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";


/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));
const Productoss = Loadable(lazy(() => import("../pages/Productos/Productos")));
const QuienesSomoss = Loadable(lazy(() => import("../pages/QuienesSomos/QuienesSomos")));
const Servicios = Loadable(lazy(() => import("../pages/Servicios/Servicios")));



/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "productos", exact: true, element: <Productoss />},
      { path: "quienes-somos", exact: true, element: <QuienesSomoss />},  // Cambiado aquí
      { path: "servicios", exact: true, element: <Servicios />},
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
    ],
  },
];


export default Router;

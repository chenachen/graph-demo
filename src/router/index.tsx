import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

import Layout from "src/layouts";

const LineChart = lazy(() => import("src/pages/echarts/line-chart"));
const BarChart = lazy(() => import("src/pages/echarts/bar-chart"));
const G6 = lazy(() => import("src/pages/g6"));
const X6 = lazy(() => import("src/pages/x6"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Navigate to="g6_demo" />,
      },
      {
        path: "g6_demo",
        element: <G6 />,
      },
      {
        path: "x6_demo",
        element: <X6 />,
      },
      {
        path: "echarts",
        children: [
          {
            index: true,
            path: "bar",
            element: <BarChart />,
          },
          {
            path: "line",
            element: <LineChart />,
          },
        ],
      },
    ],
  },
]);

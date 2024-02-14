import { Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Spin } from "antd";

import "./tailwind.less";
import "./index.less";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Spin />}>
      <RouterProvider router={router} fallbackElement={<div>loading...</div>} />
    </Suspense>
  </StrictMode>
);

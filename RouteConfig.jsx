import React from "react";
import { createHashRouter } from "react-router-dom";

// Root
import { Root } from "./routes/Root.jsx";

// Routes
import Start from "./routes/Start.jsx";

export const Router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
           // Använd Outlet för att rendera barnkomponenter
          path: "/start",
          element: <Start/>,
        }
      ],
    },
  ]);
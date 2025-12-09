// router.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
import React, { Suspense } from "react";

// Pages
const QuickCreate = React.lazy(() => import("../Pages/QuickCreate"));
const Lifecycle = React.lazy(() => import("../Pages/Lifecycle"));
const Analytics = React.lazy(() => import("../Pages/Analytics"));
const Projects = React.lazy(() => import("../Pages/Projects"));
const Team = React.lazy(() => import("../Pages/Team"));
const Dashboard = React.lazy(() => import("../Pages/Dashboard"));
import LoadingFallback from "@/Layout/LoadingFallBack";
import NotFound from "@/Layout/PageNotFound";

// Wrap lazy-loaded components with Suspense

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout wraps Sidebar + Outlet
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Dashboard />
          </Suspense>
        ),
      }, // "/"
      {
        path: "quickcreate",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <QuickCreate />
          </Suspense>
        ),
      },
      {
        path: "lifecycle",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Lifecycle />
          </Suspense>
        ),
      },
      {
        path: "analytics",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Analytics />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "team",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Team />
          </Suspense>
        ),
      },
    ],
  },
]);

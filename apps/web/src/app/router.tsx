import { createBrowserRouter } from "react-router-dom"
import AppLayout from "@/components/layouts/app-layout"
import Overview from "@/pages/overview"

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
      },
    ],
  },
])

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PostList from "./components/postList";
import Createpost from "./components/createPost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/createpost", element: <Createpost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

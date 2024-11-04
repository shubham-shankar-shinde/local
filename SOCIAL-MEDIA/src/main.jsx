import React from "react";
import ReactDOM from "react-dom/client";
import PostList from "./components/postList";
import Createpost from "./components/createPost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
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

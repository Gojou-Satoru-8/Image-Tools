import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ImageToolsPage from "./pages/ImageToolsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/image-tools", element: <ImageToolsPage /> },
    ],
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;

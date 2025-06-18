import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterProvider } from "react-router";
import { Layout } from "./page/Layout";
import { Home } from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

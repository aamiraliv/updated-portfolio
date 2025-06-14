import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterProvider } from "react-router";
import { Layout } from "./page/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

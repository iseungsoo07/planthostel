import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/common.css";
import { Home } from "./pages/home";
import Root from "./pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>정신차려!</p>,
    children: [{ index: true, element: <Home /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

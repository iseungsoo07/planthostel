import Tel from "./pages/Tel";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/common.css";
import { Home } from "./pages/home";
import Root from "./pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>경로 확인 제대로해라 ㅄ아</p>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/hos",
        element: <Tel />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

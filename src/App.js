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
        element: <p>Hos버튼 누르면 여기로간다! 페이지 만들면 됨</p>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

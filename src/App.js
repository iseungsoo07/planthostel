import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/common.css";
import { Home } from "./pages/home";
import Root from "./pages/Root";
import { Mypage } from "pages/mypage";
import { Myinfo } from "pages/myinfo";
import { MyinfoModify } from "./pages/myinfoModify";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <p>경로 확인 제대로해라 ㅄ아</p>,
        children: [
            { index: true, element: <Home /> },
            {
                path: "/hos",
                element: <p>Hos버튼 누르면 여기로간다! 페이지 만들면 됨</p>
            },
            {
                path: "/mypage",
                element: <Mypage />
            },
            { path: "/myinfo", element: <Myinfo /> },
            { path: "/myinfo_modify", element: <MyinfoModify /> }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

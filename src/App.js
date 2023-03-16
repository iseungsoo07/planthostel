import Tel from "./pages/Tel";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/common.css";
import { Home } from "./pages/home";
import Root from "./pages/Root";
import { Mypage } from "pages/mypage";
import { Myinfo } from "pages/myinfo";
import { MyinfoModify } from "./pages/myinfo_modify";
import { PlantManage } from "pages/plant_manage";
import { PlantDetail } from "pages/plant_detail";
import { PlantModify } from "pages/plant_modify";
import { PlantRegist } from "pages/plant_regist";
import { Reservation } from "pages/reservation";
import { ReservationHos } from "pages/reservation_hos";
import { ReservationTel } from "pages/reservation_tel";
import { ReservationPickup } from "pages/reservation_pickup";
import PickUp from "pages/PickUp";

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
            {
                path: "/mypage",
                element: <Mypage />,
            },
            {
                path: "/pickup",
                element: <PickUp />,
            },
            { path: "/myinfo", element: <Myinfo /> },
            { path: "/myinfo_modify", element: <MyinfoModify /> },
            { path: "/plant_manage", element: <PlantManage /> },
            { path: "/plant_detail/:id", element: <PlantDetail /> },
            { path: "/plant_modify/:id", element: <PlantModify /> },
            { path: "/plant_regist", element: <PlantRegist /> },
            { path: "/reservation", element: <Reservation /> },
            { path: "/reservation_hos/:id", element: <ReservationHos /> },
            { path: "/reservation_tel/:id", element: <ReservationTel /> },
            { path: "/reservation_pickup/:id", element: <ReservationPickup /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

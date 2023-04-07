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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "pages/login";
import { Info } from "pages/info";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ</p>,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/info", element: <Info /> },
      {
        path: "/tel",
        element: <Tel />,
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

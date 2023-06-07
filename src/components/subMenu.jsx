import styles from "styles/Navbar.module.css";
import { Link } from "react-router-dom";

export const SubMenu = () => {
    return (
        <ul className={styles.sub_menu_ul}>
            <li>
                <Link to="./hos/hos.html">병원예약</Link>
            </li>
            <li>
                <Link to="/tel">호텔예약</Link>
            </li>
            <li>
                <Link to="/pickup">픽업서비스</Link>
            </li>
            <li>
                <Link to="#">이용후기</Link>
            </li>
            <li>
                <Link to="#">공지사항</Link>
            </li>
            <li>
                <Link to="/info">이용안내</Link>
            </li>
            <li>
                <Link to="#">이벤트</Link>
            </li>
            <li>
                <Link to="#">오시는길</Link>
            </li>
            <li>
                <Link to="/mypage">내정보</Link>
            </li>
        </ul>
    );
};

import { MypageBox } from "components/mypageBox";
import { Link } from "react-router-dom";
import styles from "styles/mypage.module.css";
import "styles/common.css";

export const Mypage = () => {
    const showButton = false;

    return (
        <MypageBox showButton={showButton}>
            <ul className={`${styles.mypage_list} content_font`}>
                <Link to="/myinfo">
                    <li>내 정보</li>
                </Link>
                <Link to="/plant_regist">
                    <li>반려식물 등록</li>
                </Link>
                <Link to="/reservation">
                    <li>예약 내역</li>
                </Link>
                <Link to="">
                    <li>이용 약관 / 개인정보방침</li>
                </Link>
                <Link to="">
                    <li>오픈소스 / 라이선스</li>
                </Link>
                <Link to="">
                    <li>설정</li>
                </Link>
            </ul>
        </MypageBox>
    );
};

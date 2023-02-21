import { Footer } from "components/footer";
import { Header } from "components/header";
import { Navbar } from "components/navbar";
import { Body } from "components/body";
import { Link } from "react-router-dom";
import styles from "styles/home.module.css";

export const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Body>
                <div className={styles.main_box}>
                    <div className={styles.Shortcuts}>
                        <div className={styles.items}>
                            <p>Plant HOS & TEL이 궁금하다면?</p>
                            <Link to="#">자주 묻는 질문</Link>
                        </div>
                        <div className={styles.items}>
                            <p>반려식물을 키우고 계신가요?</p>
                            <Link to="./mypage/plant_regist.html">반려식물 등록하러 가기</Link>
                        </div>
                        <div className={styles.last_items}>
                            <div className={styles.half_items}>
                                <p>
                                    <Link to="#">호스텔 내부시설</Link>
                                </p>
                            </div>
                            <div className={styles.half_items}>
                                <p>
                                    <Link to="#">예약내역</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.main_right_box}>
                    <p className={styles.logo_small}>
                        Plant <span>HOS & TEL</span>
                    </p>
                    <div className={styles.main_right_items}>
                        <p>Plant HOSTEL 이용방법!</p>
                        <p>
                            1. 반려식물의 병원예약은 HOS에서 가능합니다
                            <br />
                            2. 반려식물의 호텔예약은 TEL에서 가능합니다
                            <br />
                            3. 반려식물의 정보등록은 로그인을 한 후 등록합니다
                            <br />
                            4. 모든 서비스는 로그인을 하신 뒤 이용가능합니다
                        </p>
                    </div>
                    <div className={styles.right_last_items}>
                        <div className={styles.right_half_items_left}>
                            <p className={styles.items_title}>반려식물 병원예약</p>
                            <p className={styles.items_link}>
                                <Link to="./hos/hos.html">HOS</Link>
                            </p>
                        </div>
                        <div className={styles.right_half_items_right}>
                            <p className={styles.items_title}>반려식물 호텔예약</p>
                            <p className={styles.items_link_white}>
                                <Link to="./tel/tel.html">TEL</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Body>
            <Footer />
        </>
    );
};

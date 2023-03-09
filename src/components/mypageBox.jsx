import styles from "styles/mypage.module.css";
import { Body } from "./body";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const MypageBox = ({ children, showButton }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: 1,
        userid: "apple123",
        username: "김사과"
    });

    const onClick = (e) => {
        if (e.target.value === "내 정보 수정") {
            navigate("/myinfo_modify");
        }
        if (e.target.value === "반려식물 관리하기") {
            navigate("/plant_manage");
        }
    };

    return (
        <Body>
            <div className={styles.main_box}>
                <div className={styles.flex}>
                    <div className={`${styles.member_info_box} subtitle_font`}>
                        ID : <span className={styles.userid}>{user.userid}</span> /{" "}
                        <span className={styles.name}>{user.username}</span>
                    </div>
                    {showButton && (
                        <div className={styles.btn_area}>
                            <button className="myinfo_modify_btn" onClick={onClick} value="내 정보 수정">
                                내 정보 수정
                            </button>
                            <button className="plant_magnage_btn" onClick={onClick} value="반려식물 관리하기">
                                반려식물 관리하기
                            </button>
                        </div>
                    )}
                </div>
                <div className={styles.mypage_box}>{children}</div>
            </div>
        </Body>
    );
};

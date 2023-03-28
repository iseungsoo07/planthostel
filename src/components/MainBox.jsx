import React, { useState } from "react";
import styles from "styles/MainBox.module.css";

export default function MainBox({ subTitle, info, onBtnClick, children }) {
    const [agree, setAgree] = useState(false);
    const handleChange = () => setAgree((agree) => !agree);
    const handleClick = (e) => {
        // 동의 버튼 눌렀을 때
        if (agree) {
            onBtnClick(true);
        } else {
            alert("개인정보 수집 및 이용에 동의해주세요!");
        }
    };
    return (
        <div className={styles.container}>
            <p className={styles.subTitle}>{subTitle}</p>
            {/* 내부 내용 */}
            {children}
            {/* 안내사항 */}
            <div className={styles.info}>
                {info.map((text, idx) => {
                    return <p key={idx}>{text}</p>;
                })}
            </div>
            {/* 개인정보 수집 및 이용 동의 */}
            <div>
                <input
                    type="checkbox"
                    id="agree"
                    value={agree}
                    onChange={handleChange}
                    className={styles.checkBox}
                />
                <label htmlFor="agree" className={styles.label}>
                    개인정보보호법에 따라 위와 같이 입력한 개인정보 수집 및
                    이용에 동의합니다.
                </label>
            </div>
            {/* 예약하기 버튼 */}
            <button type="submit" onClick={handleClick} className={styles.btn}>
                예약하기
            </button>
        </div>
    );
}

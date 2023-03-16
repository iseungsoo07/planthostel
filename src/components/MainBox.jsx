import React from "react";
import styles from "styles/MainBox.module.css";

export default function MainBox({ subTitle, info, children }) {
    const handleClick = () => {};
    return (
        <div className={styles.container}>
            <p className={styles.subTitle}>{subTitle}</p>
            {children}
            <div className={styles.info}>
                {info.map((text, idx) => {
                    return <p key={idx}>{text}</p>;
                })}
            </div>
            <input type="checkbox" name="agree" />
            <span>
                개인정보보호법에 따라 위와 같이 입력한 개인정보 수집 및 이용에
                동의합니다.
            </span>
            <button onClick={handleClick}>예약하기</button>
        </div>
    );
}

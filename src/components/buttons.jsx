import styles from "styles/myinfo.module.css";
import styles2 from "styles/mypage.module.css";

export const Buttons = ({ text1, text2, type, onClick1, onClick2 }) => {
    return (
        <div className={`${styles2.btn_area} ${styles.flex_center}`}>
            <button onClick={onClick1}>{text1}</button>
            <button type={type} onClick={onClick2}>
                {text2}
            </button>
        </div>
    );
};

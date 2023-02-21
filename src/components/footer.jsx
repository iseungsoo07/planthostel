import { Link } from "react-router-dom";
import styles from "styles/footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.center_info_title}>PLANT HOSTEL</div>
            <div className={styles.center_info}>
                <span className={styles.link}>
                    <Link to="#">운영정책</Link>
                </span>
                <span className={styles.link}>
                    <Link to="#">브랜드보호정책</Link>
                </span>
                <span className={styles.link}>
                    <Link to="#">이용약관</Link>
                </span>
                <span className={styles.link}>
                    <Link to="#">공지사항</Link>
                </span>
                <span className={styles.link}>
                    <Link to="#">개인정보처리방침</Link>
                </span>
            </div>
            <div className={styles.center_info}>@planthostel | 010 - 1234 - 1234</div>
        </footer>
    );
};

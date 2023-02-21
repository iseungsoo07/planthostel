import { Link } from "react-router-dom";
import styles from "styles/header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_box}>
                <Link to="/" className={styles.logo}>
                    PLANT <span className={styles.logo_white}>HOS&TEL</span>
                </Link>
            </div>
        </header>
    );
};

import styles from "styles/body.module.css";

export const Body = ({ children }) => {
    return (
        <div className={styles.body_wrapper}>
            <section className={`${styles.body_content} ${styles.index_box}`}>{children}</section>
        </div>
    );
};

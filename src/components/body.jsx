import styles from "styles/body.module.css";

export const Body = ({ children, isFlex = true }) => {
    return (
        <div className={styles.body_wrapper}>
            {isFlex ? (
                <section className={`${styles.body_content} ${styles.index_box}`}>{children}</section>
            ) : (
                <section className={`${styles.body_content} ${styles.column_content}`}>{children}</section>
            )}
        </div>
    );
};

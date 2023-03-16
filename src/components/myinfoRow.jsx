import styles from "styles/myinfo.module.css";

export const MyinfoRow = ({ id, text, type, name, value, canModify }) => {
    return (
        <li className={styles.myinfo_row}>
            <label htmlFor={id}>
                <div className={styles.label_title}>{text}</div>
                {canModify ? (
                    <input className="content_font" type={type} name={name} id={id} defaultValue={value} />
                ) : (
                    <input className="content_font" type={type} name={name} id={id} defaultValue={value} disabled />
                )}
            </label>
        </li>
    );
};

import React from "react";
import styles from "styles/WhiteBtn.module.css";
import { IoCallOutline } from "react-icons/io5";

export default function WhiteBtn({ text, type }) {
    return (
        <button className={styles.button}>
            {type && <IoCallOutline className={styles.call} />}
            {text}
        </button>
    );
}

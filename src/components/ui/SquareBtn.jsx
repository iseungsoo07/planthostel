import React from "react";
import styles from "styles/SquareBtn.module.css";

export default function SquareBtn({ text, color }) {
    let style = styles.green;
    if (color === "white") {
        style = styles.white;
    }

    return <button className={`${styles.btn} ${style}`}>{text}</button>;
}

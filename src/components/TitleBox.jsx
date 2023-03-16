import React from "react";
import styles from "styles/TitleBox.module.css";

export default function TitleBox({ title, title_span, src }) {
    return (
        <>
            <p className={styles.title}>
                {title} <span>{title_span}</span>
            </p>
            <div>
                <img src={src} alt="픽업 이미지" className={styles.image_box} />
            </div>
        </>
    );
}

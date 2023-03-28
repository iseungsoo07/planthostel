import React from "react";
import styles from "styles/PickUpItem.module.css";

export default function PickUpItem({ src, name, price }) {
    return (
        <div className={styles.container}>
            <img src={src} alt="픽업식물" className={styles.image} />
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>{price}</p>
        </div>
    );
}

import React from "react";
import { BiCaretDown } from "react-icons/bi";
import styles from "styles/FaqItem.module.css";
import { useState } from "react";

export default function FaqItem({ que, ans }) {
    const [open, setOpen] = useState(false);
    const [iconStyle, setIconStyle] = useState(styles.close);
    const handleClick = () => {
        if (open) {
            setOpen(false);
            setIconStyle(styles.close);
        } else {
            setOpen(true);
            setIconStyle(styles.open);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.queBox} onClick={handleClick}>
                <p>{que}</p>
                <BiCaretDown className={`${styles.icon} ${iconStyle}`} />
            </div>
            {open && <p className={styles.ansBox}>{ans}</p>}
        </div>
    );
}

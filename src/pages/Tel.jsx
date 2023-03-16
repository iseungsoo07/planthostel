import Reserve from "../components/Reserve";
import React from "react";
import styles from "../styles/Tel.module.css";

export default function Tel() {
  return (
    <div className={styles.container}>
      <p2 className={styles.logo_small}>
        PLANT <span>TEL</span>
      </p2>
      <Reserve />
    </div>
  );
}

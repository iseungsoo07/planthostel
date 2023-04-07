import React from "react";
import styles from "../styles/TimeTable.module.css";

export default function CheckInTimeTable({ handleChange }) {
  const a = "disabled";
  return (
    <div className={styles.time_item}>
      <p className={styles.sub_title}>체크인 시간을 선택해주세요</p>
      <div className={styles.time_box}>
        <div className={styles.flex_box} onChange={handleChange}>
          <label>
            <input type="radio" value="08:00" name="checkInTime" />
            <div className={styles.time_block}>08:00</div>
          </label>
          <label>
            <input type="radio" value="08:30" name="checkInTime" />
            <div className={styles.time_block}>08:30</div>
          </label>
          <label>
            <input type="radio" value="09:00" name="checkInTime" />
            <div className={styles.time_block}>09:00</div>
          </label>
          <label>
            <input type="radio" value="09:30" name="checkInTime" />
            <div className={styles.time_block}>09:30</div>
          </label>
          <label>
            <input type="radio" value="10:00" name="checkInTime" />
            <div className={styles.time_block}>10:00</div>
          </label>
          <label>
            <input type="radio" value="10:30" name="checkInTime" />
            <div className={styles.time_block}>10:30</div>
          </label>
          <label>
            <input type="radio" value="11:00" name="checkInTime" />
            <div className={styles.time_block}>11:00</div>
          </label>
        </div>
        <div className={styles.flex_box} onChange={handleChange}>
          <label>
            <input type="radio" value="11:30" name="checkInTime" />
            <div className={styles.time_block}>11:30</div>
          </label>
          <label>
            <input type="radio" value="13:30" name="checkInTime" />
            <div className={styles.time_block}>13:30</div>
          </label>
          <label>
            <input type="radio" value="14:00" name="checkInTime" />
            <div className={styles.time_block}>14:00</div>
          </label>
          <label>
            <input type="radio" value="14:30" name="checkInTime" />
            <div className={styles.time_block}>14:30</div>
          </label>
          <label>
            <input type="radio" value="15:00" name="checkInTime" />
            <div className={styles.time_block}>15:00</div>
          </label>
          <label>
            <input type="radio" value="15:30" name="checkInTime" />
            <div className={styles.time_block}>15:30</div>
          </label>
          <label>
            <input type="radio" value="16:00" name="checkInTime" />
            <div className={styles.time_block}>16:00</div>
          </label>
        </div>
        <div className={styles.flex_box} onChange={handleChange}>
          <label>
            <input type="radio" value="16:30" name="checkInTime" />
            <div className={styles.time_block}>16:30</div>
          </label>
          <label>
            <input type="radio" value="17:00" name="checkInTime" />
            <div className={styles.time_block}>17:00</div>
          </label>
          <label>
            <input type="radio" value="17:30" name="checkInTime" />
            <div className={styles.time_block}>17:30</div>
          </label>
          <label>
            <input type="radio" value="18:00" name="checkInTime" />
            <div className={styles.time_block}>18:00</div>
          </label>
          <label>
            <input type="radio" value="18:30" name="checkInTime" />
            <div className={styles.time_block}>18:30</div>
          </label>
          <label>
            <input type="radio" value="19:00" name="checkInTime" />
            <div className={styles.time_block}>19:00</div>
          </label>
          <label>
            <input type="radio" value="19:30" name="checkInTime" />
            <div className={styles.time_block}>19:30</div>
          </label>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import styles from "../styles/Calendar.module.css";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState([]);
  useEffect(() => {
    setDay(makeCalendar(date));
  }, [date]);
  const handlePrev = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };
  const handleNext = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  return (
    <div className={styles.container}>
      <p>체크인 예정일을 선택해주세요</p>
      <div className={styles.calendar}>
        <p>체크인 가능 날짜</p>
        <div className={styles.date_YN}>
          <span className={styles.YN_box}>가능</span>
          <span className={styles.YN_box}>불가능</span>
        </div>
        <div className={styles.rap}>
          <div className={styles.header}>
            <button
              className={styles.btn_prevDay}
              onClick={handlePrev}
            ></button>
            <h2 className={styles.dateTitle}>
              {date.getFullYear() + "년" + (date.getMonth() + 1) + "월"}
            </h2>
            <button
              onClick={handleNext}
              className={styles.btn_nextDay}
            ></button>
          </div>
          <div className={styles.date}>
            <div>SUN</div>
            <div>MON</div>
            <div>THU</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
          </div>
          <div className={styles.dateBoard}>
            {day.map((day, index) => (
              <div value={day} className={styles.day_box} key={index}>
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const makeCalendar = (date) => {
  // 현재 년도와 월 받아오기
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  let day = [];

  // 첫날의 요일 구하기 - 초기 시작위치를 위해서
  const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();

  // 마지막 날짜 구하기
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  // 남은 박스만큼 다음달 날짜 표시
  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  // 한달전 날짜 표시하기
  for (let i = 0; i < firstDay; i++) {
    day.push(" ");
  }

  // 이번달 날짜 표시하기
  for (let i = 1; i <= lastDay; i++) {
    day.push(i);
  }

  // 다음달 날짜 표시하기
  for (let i = limitDay; i < nextDay; i++) {
    day.push(" ");
  }

  return day;
};

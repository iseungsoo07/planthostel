import SquareBtn from "components/ui/SquareBtn";
import WhiteBtn from "components/ui/WhiteBtn";
import React from "react";
import styles from "styles/Faq.module.css";
import FaqItem from "./../components/FaqItem";

export default function Faq() {
    return (
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <p className={styles.text}>
                    플랜트호스텔 서비스를 이용해주셔서 감사합니다. 도움이
                    필요하신가요?
                </p>
                <p className={styles.title}>
                    PLANT <span>HOSTEL FAQ</span>
                </p>
                <p className={styles.text}>
                    운영시간 : 평일 오전 8시 ~ 오후 8시
                </p>

                <div className={styles.btnBox}>
                    <WhiteBtn text="031-234-5678" type />
                    <WhiteBtn text="1:1 문의하기" onClick="handleClick" />
                </div>
            </div>

            <div className={styles.category}>
                <SquareBtn text={"병원 서비스"} color={"green"} />
                <SquareBtn text={"호텔 서비스"} color={"white"} />
                <SquareBtn text={"이용요금"} color={"green"} />
                <SquareBtn text={"주차시설"} color={"white"} />
                <SquareBtn text={"상담 예약"} color={"green"} />
                <SquareBtn text={"변경 및 취소"} color={"white"} />
                <SquareBtn text={"회원탈퇴"} color={"green"} />
            </div>

            <div className={styles.faq}>
                <FaqItem que={"Faq 예시 질문"} ans={"Faq 예시 답안"} />
                <FaqItem que={"Faq 예시 질문"} ans={"Faq 예시 답안"} />
                <FaqItem que={"Faq 예시 질문"} ans={"Faq 예시 답안"} />
                <FaqItem que={"Faq 예시 질문"} ans={"Faq 예시 답안"} />
            </div>
        </div>
    );
}

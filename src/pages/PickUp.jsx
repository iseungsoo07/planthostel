import TitleBox from "components/TitleBox";
import React, { useState } from "react";
import styles from "styles/PickUp.module.css";
import img from "assets/image/plant5.jpg";
import MainBox from "components/MainBox";
import PickUpList from "components/PickUpList";
import ReserveInfo from "components/ReserveInfo";

export default function PickUp() {
    const info = [
        "- 택배 배송은 어렵습니다. 픽업만 가능합니다.",
        "- 정해진 픽업 날짜와 시간을 초과할 시, 예약이 자동 취소됩니다.",
        "- 픽업 예약을 신청할 시 플랜트호스텔과 제휴를 맺은 곳과의 연결을 통해 재고를 채워두는 시스템이니 취소환급금에 관한 연락이 있을 수 있으니 양해 부탁드립니다.",
        "- 화분의 사이즈에 따라 가격이 다를 수 있습니다.",
        "- 2개 이상 픽업 예약 시 10% 할인율이 적용됩니다.",
    ];

    const [reserve, setReserve] = useState({ name: "", phone: "" });
    const handleChange = (form) => setReserve(form);

    const handleSubmit = {};

    return (
        <div className={styles.container}>
            <TitleBox title="PLANT" title_span="Pick Up" src={img} />
            <MainBox
                subTitle="▷ 반려식물 고르고 편하게 픽업! ◁"
                info={info}
                onSubmit={handleSubmit}
            >
                <PickUpList />
                <ReserveInfo onChange={handleChange} />
            </MainBox>
        </div>
    );
}

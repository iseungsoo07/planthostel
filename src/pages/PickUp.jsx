import TitleBox from "components/TitleBox";
import React, { useState } from "react";
import styles from "styles/PickUp.module.css";
import img from "assets/image/plant5.jpg";
import MainBox from "components/MainBox";
import PickUpList from "components/PickUpList";

export default function PickUp() {
    const monthList = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
    ];
    const info = [
        "- 택배 배송은 어렵습니다. 픽업만 가능합니다.",
        "- 정해진 픽업 날짜와 시간을 초과할 시, 예약이 자동 취소됩니다.",
        "- 픽업 예약을 신청할 시 플랜트호스텔과 제휴를 맺은 곳과의 연결을 통해 재고를 채워두는 시스템이니 취소환급금에 관한 연락이 있을 수 있으니 양해 부탁드립니다.",
        "- 화분의 사이즈에 따라 가격이 다를 수 있습니다.",
        "- 2개 이상 픽업 예약 시 10% 할인율이 적용됩니다.",
    ];

    const [form, setForm] = useState({
        name: "",
        phone: "",
        month: "",
        date: "",
    });

    // 예약 버튼 클릭했을 때
    const handleClick = (agree) => {
        if (agree) {
            console.log(form);
        }
    };

    // 성함, 휴대폰 번호 입력받아서 값 업데이트
    const handleChange = (e) => {
        if (e.target.name === "name") {
            setForm((prev) => ({ ...prev, name: e.target.value }));
        } else if (e.target.name === "phone") {
            setForm((prev) => ({ ...prev, phone: e.target.value }));
        }
    };

    const handleSelect = (e) => {
        setForm((prev) => ({ ...prev, month: e.target.value }));
    };

    return (
        <div className={styles.container}>
            <TitleBox title="PLANT" title_span="Pick Up" src={img} />
            <MainBox
                subTitle="▷ 반려식물 고르고 편하게 픽업! ◁"
                info={info}
                onBtnClick={handleClick}
            >
                <PickUpList />
                {/* 예약 정보 입력 */}
                <form className={styles.form}>
                    <div className={styles.formBox}>
                        <p>예약자 성함</p>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            placeholder="성함을 입력해주세요"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formBox}>
                        <p>예약자 휴대폰 번호</p>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            placeholder="번호를 입력해주세요"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.timeBox}>
                        <p>픽업 날짜와 시간을 선택해주세요</p>
                        <div className={styles.selectbox}>
                            <select onChange={handleSelect} value={form.month}>
                                {monthList.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </form>
            </MainBox>
        </div>
    );
}

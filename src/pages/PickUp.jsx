import TitleBox from "components/ui/TitleBox";
import React, { useState, useEffect } from "react";
import styles from "styles/PickUp.module.css";
import img from "assets/image/plant5.jpg";
import MainBox from "components/MainBox";
import PickUpList from "components/PickUpList";
import { AiFillCaretDown } from "react-icons/ai";

export default function PickUp() {
    const [monthList, setMonthList] = useState([]);
    const [dateList, setDateList] = useState([]);
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
        month: month,
        date: date,
        time: "",
    });

    // 한 번만 실행
    useEffect(() => {
        setMonthList(getMonthList());
        setDateList(getDateList(month));
    }, []);

    // 월 선택 후 일 리스트 변경
    useEffect(() => {
        console.log(form.month);
        setDateList(() => {
            var arr = [];
            const lastDate = new Date(year, form.month, 0).getDate();
            var first = month === form.month ? date : 1;
            for (let i = first; i <= lastDate; i++) {
                arr.push(`${i}일`);
            }
            return arr;
        });
        setForm((prev) => ({
            ...prev,
            date: month === form.month ? date : 1,
        }));
    }, [form.month]);

    // 성함, 휴대폰 번호 입력받아서 값 업데이트
    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // 월, 일 선택
    const handleSelect = (e) => {
        let data = 0;
        if (e.target.name === "month") {
            data = parseInt(e.target.value.replace("월", ""));
        } else {
            data = parseInt(e.target.value.replace("일", ""));
        }
        setForm((prev) => ({ ...prev, [e.target.name]: data }));
    };

    // 예약 버튼 클릭했을 때
    const handleClick = (agree) => {
        if (agree) {
            console.log(form);
        }
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
                </form>
                <div className={styles.timeBox}>
                    <p>픽업 날짜와 시간을 선택해주세요</p>
                    <div className={styles.selectBox}>
                        <select
                            onChange={handleSelect}
                            name="month"
                            defaultValue={form.month}
                        >
                            {monthList.map((item) => (
                                <option
                                    className={styles.selectOption}
                                    value={item}
                                    key={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>

                        <select
                            onChange={handleSelect}
                            name="date"
                            defaultValue={form.date}
                        >
                            {dateList.map((item) => (
                                <option
                                    className={styles.selectOption}
                                    value={item}
                                    key={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>

                        <select
                            onChange={handleSelect}
                            defaultValue={form.date}
                        >
                            {dateList.map((item) => (
                                <option
                                    className={styles.selectOption}
                                    value={item}
                                    key={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </MainBox>
        </div>
    );
}

// 오늘 날짜 가져오기
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

// 이번 달 기준 +2 까지만 월 리스트 수정
const getMonthList = () => {
    var next1 = month + 1;
    var next2 = month + 2;
    var arr = [`${month}월`, `${next1}월`, `${next2}월`];
    return arr;
};

// 선택된 월 기준으로 일 리스트 구하기
const getDateList = (m) => {
    var arr = [];
    const lastDate = new Date(year, m, 0).getDate();
    var first = month === m ? date : 1;
    for (let i = first; i <= lastDate; i++) {
        arr.push(`${i}일`);
    }
    return arr;
};

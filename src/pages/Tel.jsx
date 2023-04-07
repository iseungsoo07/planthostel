import Reserve from "../components/Reserve";
import { useQuery } from "@tanstack/react-query";
import { React, useState, useEffect } from "react";
import styles from "../styles/Tel.module.css";
import TitleBox from "./../components/TitleBox";
import MainBox from "./../components/MainBox";
import img from "assets/image/plant5.jpg";
import CheckInTimeTable from "components/CheckInTimeTable";
import Calendar from "components/Calendar";

export default function Tel() {
    const info = [
        "- 당일 픽업은 호텔비용이 추가되지 않습니다.",
        "- 진료 시간 외의 방문은 상담이 어려울 수 있습니다.",
        "- 12시간 이상 병원 및 호텔에 보관 시 시간 당 비용 2000원이 부과됩니다.",
        "- 상태에 따라 진료 시간이 연장될 수 있습니다.",
        "- 자세한 문의사항은 하단에 있는 연락처로 전화주세요.",
    ];
    const [inputs, setInputs] = useState({
        name: "",
        phone: "",
        plant: "",
        notice: "",
        checkInDate: "",
        checkInTime: "",
        checkOutDate: "",
        checkOutTime: "",
    });

    const {
        name,
        phone,
        plant,
        notice,
        checkInDate,
        checkInTime,
        checkOutDate,
        checkOutTime,
    } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const {
        isLoading,
        error,
        data: memberData,
    } = useQuery(["memberData"], async () => {
        return fetch(`data/memberData.json`).then((res) => res.json());
    });

    if (isLoading) return <p>loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className={styles.container}>
            <TitleBox title="PLANT" title_span="TEL" src={img} />
            <MainBox subTitle="▷ 반려식물 호텔 예약 ◁" info={info}>
                <Reserve data={memberData} />
                <form className={styles.tel_form} onSubmit={handleSubmit}>
                    <div className={styles.reserve_box}>
                        <div className={styles.name_box}>
                            <label htmlFor="name">예약자 성함</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="name"
                                placeholder="성함을 입력해주세요"
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.phone_box}>
                            <label htmlFor="phone">예약자 휴대폰번호</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="phone"
                                placeholder="휴대폰 번호를 입력해주세요"
                                value={phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.plant_box}>
                        <label htmlFor="plant">나의 반려식물 선택하기</label>
                        <select
                            name="plant"
                            onChange={handleChange}
                            className={styles.plant_input}
                        >
                            <option>식물을 선택하세요</option>
                            {memberData.plant.map((plant, index) => (
                                <option key={index} value={plant}>
                                    {plant}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.notice_box}>
                        <label htmlFor="notice">
                            반려식물의 주의사항을 자세히 설명해주세요
                        </label>
                        <textarea
                            className={styles.notice_input}
                            name="notice"
                            value={notice}
                            onChange={handleChange}
                            placeholder="여러분의 소중한 반려식물의 원활한 관리에 도움이 됩니다.&#13;&#13;&#13;&#13;&#13;&#13;&#13;&#13;
            ex)
            뿌리썩음병 | 시들음병 | 탄저병 | 깜부기병 등 질병이 있다면 먼저 말씀해주세요!
            물을 주는 시기가 특별히 관리되고 있다면 적어주세요
            관리사가 주의해야할 점이 있다면 적어주세요
            특별한 내용이 없다면 해당 식물에 맞는 원칙적인 관리법으로 호텔 서비스가 진행됩니다. "
                        ></textarea>
                    </div>
                    <Calendar />
                    <CheckInTimeTable handleChange={handleChange} />
                </form>
            </MainBox>
        </div>
    );
}

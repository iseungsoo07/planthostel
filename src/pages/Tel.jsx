import Reserve from "../components/Reserve";
import { useQuery } from "@tanstack/react-query";
import { React, useState } from "react";
import styles from "../styles/Tel.module.css";
import TitleBox from "./../components/TitleBox";
import MainBox from "./../components/MainBox";
import img from "assets/image/plant5.jpg";

export default function Tel() {
  const {
    isLoading,
    error,
    data: memberData,
  } = useQuery(["memberData"], async () => {
    return fetch(`data/memberData.json`).then((res) => res.json());
  });

  const info = [
    "- 택배 배송은 어렵습니다. 픽업만 가능합니다.",
    "- 정해진 픽업 날짜와 시간을 초과할 시, 예약이 자동 취소됩니다.",
    "- 픽업 예약을 신청할 시 플랜트호스텔과 제휴를 맺은 곳과의 연결을 통해 재고를 채워두는 시스템이니 취소환급금에 관한 연락이 있을 수 있으니 양해 부탁드립니다.",
    "- 화분의 사이즈에 따라 가격이 다를 수 있습니다.",
    "- 2개 이상 픽업 예약 시 10% 할인율이 적용됩니다.",
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
                className={styles.name_input}
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
                className={styles.phone_input}
                type="text"
                name="phone"
                placeholder="휴대폰 번호를 입력해주세요"
                value={phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </MainBox>
    </div>
  );
}

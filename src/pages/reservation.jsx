import { MypageBox } from "components/mypageBox";
import styles from "styles/mypage.module.css";
import "styles/reservation.css";
import { useNavigate } from "react-router-dom";

export const Reservation = () => {
    const showButton = false;
    const username = "김사과";
    const navigate = useNavigate();

    const reservations = [
        {
            id: 1,
            date: "2022.10.14 14:00",
            category: "HOS Service",
            name: "김사과",
            hp: "010-1234-1234",
            plant_nickname: "준인장",
            plant_species: "선인장",
            notice: "부끄러움을 많이 타요"
        },
        {
            id: 2,
            date: "2022.10.16 15:00",
            category: "TEL Service",
            name: "김사과",
            hp: "010-1234-1234",
            plant_nickname: "칸초",
            plant_species: "난초",
            notice: "난초랍니다"
        },
        {
            id: 3,
            date: "2022.10.17 17:00",
            category: "Pick Up",
            name: "김사과",
            hp: "010-1234-1234",
            plant_nickname: "나무",
            plant_species: "동백나무",
            notice: ""
        }
    ];

    const goBack = () => {
        navigate("/mypage");
    };

    const goReservationInfo = (id) => {
        const reservation = reservations.filter((reservation) => reservation.id === id);

        if (reservation[0].category === "HOS Service") {
            navigate(`/reservation_hos/${id}`, { state: reservation[0] });
        } else if (reservation[0].category === "TEL Service") {
            navigate(`/reservation_tel/${id}`, { state: reservation[0] });
        } else if (reservation[0].category === "Pick Up") {
            navigate(`/reservation_pickup/${id}`, { state: reservation[0] });
        }
    };

    return (
        <MypageBox showButton={showButton}>
            <div className={styles.message}>{username}님의 예약 내역입니다.</div>
            {reservations.map((reservation) => {
                return (
                    <div className="reservation" key={reservation.id}>
                        <div className="reservation_date">{reservation.date}</div>
                        <input
                            className="content_font"
                            type="text"
                            defaultValue={`${reservation.plant_nickname} / ${reservation.category}`}
                            readOnly
                        />
                        <button
                            className="reservation_info_btn content_font"
                            onClick={() => goReservationInfo(reservation.id)}>
                            예약 정보
                        </button>
                        <button className="reservation_cancel_btn content_font">예약 취소</button>
                    </div>
                );
            })}
            <div className="btn_area">
                <button onClick={goBack}>뒤로가기</button>
            </div>
        </MypageBox>
    );
};

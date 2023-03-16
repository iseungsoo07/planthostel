import { Buttons } from "components/buttons";
import { MypageBox } from "components/mypageBox";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "styles/mypage.module.css";
import "styles/reservation_hos.css";

export const ReservationHos = () => {
    const showButton = false;

    const { state: reservation } = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/reservation");
    };

    return (
        <MypageBox showButton={showButton}>
            <div className={styles.message}>
                {reservation.name}님의 [{reservation.plant_nickname}] {reservation.category} 예약 내역입니다.
            </div>
            <div className="reservation_info_row">
                <div className="reservation_date">
                    <label htmlFor="reservation_date">
                        <div className="label_title">예약날짜</div>
                        <input
                            className="content_font"
                            type="text"
                            id="reservation_date"
                            name="reservation_date"
                            defaultValue={reservation.date}
                            readOnly
                        />
                    </label>
                </div>
                <div className="reservation_category">
                    <label htmlFor="reservation_category">
                        <div className="label_title">카테고리명</div>
                        <input
                            className="content_font"
                            type="text"
                            id="reservation_category"
                            name="reservation_category"
                            defaultValue={reservation.category}
                            readOnly
                        />
                    </label>
                </div>
            </div>
            <div className="reservation_info_row">
                <div className="name">
                    <label htmlFor="name">
                        <div className="label_title">예약자명</div>
                        <input
                            className="content_font"
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={reservation.name}
                            readOnly
                        />
                    </label>
                </div>
                <div className="reservation_category">
                    <label htmlFor="tel">
                        <div className="label_title">예약자번호</div>
                        <input
                            className="content_font"
                            type="text"
                            id="tel"
                            name="tel"
                            defaultValue={reservation.hp}
                            readOnly
                        />
                    </label>
                </div>
            </div>
            <div className="reservation_info_row">
                <div className="reservation_date">
                    <label htmlFor="plant_nickname">
                        <div className="label_title">반려식물</div>
                        <input
                            className="content_font"
                            type="text"
                            id="plant_nickname"
                            name="plant_nickname"
                            defaultValue={reservation.plant_nickname}
                            readOnly
                        />
                    </label>
                </div>
                <div className="reservation_category">
                    <label htmlFor="species">
                        <div className="label_title">반려식물종</div>
                        <input
                            className="content_font"
                            type="text"
                            id="species"
                            name="species"
                            defaultValue={reservation.plant_species}
                            readOnly
                        />
                    </label>
                </div>
            </div>
            <div className="textarea_row">
                <label htmlFor="plant_state">
                    <div className="label_title">식물상태</div>
                    <textarea
                        className="plant_state content_font"
                        name="plant_state"
                        id="plant_state"
                        defaultValue={reservation.notice}
                        readOnly></textarea>
                </label>
            </div>
            <Buttons text1="뒤로가기" text2="예약취소" onClick1={goBack} />
        </MypageBox>
    );
};

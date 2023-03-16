import { Buttons } from "components/buttons";
import { MypageBox } from "components/mypageBox";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "styles/mypage.module.css";

export const PlantModify = () => {
    const showButton = false;

    const { state: plant } = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/plant_manage");
    };

    const username = "김사과";

    return (
        <MypageBox showButton={showButton}>
            <div className={styles.message}>{username} 님의 소중한 반려식물의 정보를 수정해주세요!</div>
            <form className="plant_info_list">
                <ul>
                    <li className="plant_info_row">
                        <label htmlFor="nickname">
                            <div className="label_title">반려식물 별명</div>
                            <input
                                className="content_font"
                                type="text"
                                name="nickname"
                                id="nickname"
                                defaultValue={plant.nickname}
                            />
                        </label>
                    </li>
                    <li className="plant_info_row">
                        <label htmlFor="species">
                            <div className="label_title">종</div>
                            <input
                                className="content_font"
                                type="text"
                                name="species"
                                id="species"
                                defaultValue={plant.species}
                            />
                        </label>
                    </li>
                    <li className="plant_info_row">
                        <label htmlFor="flowerpot_size">
                            <div className="label_title">화분사이즈</div>
                            <input
                                className="content_font"
                                type="text"
                                name="flowerpot_size"
                                id="flowerpot_size"
                                defaultValue={plant.size}
                            />
                        </label>
                    </li>
                    <li className="plant_info_row">
                        <label htmlFor="age">
                            <div className="label_title">나이</div>
                            <input className="content_font" type="text" name="age" id="age" defaultValue={plant.age} />
                        </label>
                    </li>
                    <li className="plant_info_row">
                        <label htmlFor="disease">
                            <div className="label_title">보유 병명</div>
                            <input
                                className="content_font"
                                type="text"
                                name="disease"
                                id="disease"
                                defaultValue={plant.diseases}
                            />
                        </label>
                    </li>
                    <li className="plant_info_row">
                        <label htmlFor="watering">
                            <div className="label_title">물 주기</div>
                            <input
                                className="content_font"
                                type="text"
                                name="watering"
                                id="watering"
                                defaultValue={plant.watering}
                            />
                        </label>
                    </li>
                    <li className="plant_info_row">
                        <label htmlFor="etc">
                            <div className="label_title">그 외 정보</div>
                            <textarea
                                className="etc_info content_font"
                                name="etc"
                                id="etc"
                                defaultValue={plant.etc}></textarea>
                        </label>
                    </li>
                </ul>
            </form>
            <Buttons text1="취소" text2="완료" onClick1={goBack} />
        </MypageBox>
    );
};

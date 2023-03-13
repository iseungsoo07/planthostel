import { Buttons } from "components/buttons";
import { MypageBox } from "components/mypageBox";
import styles from "styles/mypage.module.css";
import { useNavigate } from "react-router-dom";

export const PlantRegist = () => {
    const showButton = false;
    const username = "김사과";

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/plant_manage");
    };

    return (
        <MypageBox showButton={showButton}>
            <div className={styles.message}>{username} 님의 소중한 반려식물의 정보를 자세히 등록해주세요!</div>
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
                                placeholder="반려식물의 별명을 입력해주세요."
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
                                placeholder="반려식물의 종을 입력해주세요."
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
                                placeholder="화분 사이즈를 입력해주세요."
                            />
                        </label>
                    </li>
                    <li className="plant_info_row">
                        <label htmlFor="age">
                            <div className="label_title">나이</div>
                            <input
                                className="content_font"
                                type="text"
                                name="age"
                                id="age"
                                placeholder="*선택 / 대략적인 식물의 나이를 입력해주세요."
                            />
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
                                placeholder="*선택 / 반려식물의 질병이 있다면, 상세히 적어주세요."
                            />
                        </label>
                    </li>
                    <li className="plant_info_row">
                        <label htmlFor="watering">
                            <div className="label_title">물 주기</div>
                            <select
                                className="watering content_font"
                                name="watering"
                                id="watering"
                                placeholder="평소 물을 주는 주기를 선택해주세요">
                                <option>---</option>
                                <option>1시간</option>
                                <option>2시간</option>
                                <option>3시간</option>
                            </select>
                        </label>
                    </li>
                    <li className="plant_info_row">
                        <label htmlFor="etc">
                            <div className="label_title">그 외 정보</div>
                            <textarea className="etc_info content_font" name="etc" id="etc"></textarea>
                        </label>
                    </li>
                </ul>
            </form>
            <Buttons text1="목록" text2="완료" onClick1={goBack} />
        </MypageBox>
    );
};

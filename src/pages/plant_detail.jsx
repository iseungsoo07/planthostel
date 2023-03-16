import { MypageBox } from "components/mypageBox";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "styles/mypage.module.css";
import "styles/plant_manage.css";
import "styles/plant_detail.css";
import "styles/common.css";
import "styles/plant_regist.css";
import { Buttons } from "components/buttons";

export const PlantDetail = () => {
    const { state: plant } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const user = {
        username: "김사과"
    };

    const goBack = () => {
        navigate("/plant_manage");
    };

    const goPlantModify = () => {
        navigate(`/plant_modify/${id}`, { state: plant });
    };

    return (
        <MypageBox>
            <div className={styles.message}>
                {user.username}님의 소중한 반려식물 '{plant.nickname}'의 정보입니다.
            </div>
            <ul className="plant_info_list">
                <li className="plant_info_row">
                    <label htmlFor="nickname">
                        <div className="label_title">반려식물 별명</div>
                        <div className="content_font">{plant.nickname}</div>
                    </label>
                </li>
                <li className="plant_info_row">
                    <label htmlFor="species">
                        <div className="label_title">종</div>
                        <div className="content_font">{plant.species}</div>
                    </label>
                </li>
                <li className="plant_info_row">
                    <label htmlFor="flowerpot_size">
                        <div className="label_title">화분사이즈</div>
                        <div className="content_font">{plant.size}</div>
                    </label>
                </li>
                <li className="plant_info_row">
                    <label htmlFor="age">
                        <div className="label_title">나이</div>
                        <div className="content_font">{plant.age}</div>
                    </label>
                </li>
                <li className="plant_info_row">
                    <label htmlFor="disease">
                        <div className="label_title">보유 병명</div>
                        <div className="content_font">{plant.diseases}</div>
                    </label>
                </li>
                <li className="plant_info_row">
                    <label htmlFor="watering">
                        <div className="label_title">물 주기</div>
                        <div className="content_font">{plant.watering}</div>
                    </label>
                </li>
                <li className="plant_info_row">
                    <label htmlFor="etc">
                        <div className="label_title">그 외 정보</div>
                        <textarea
                            className="etc_info etc_detail content_font"
                            name="etc"
                            id="etc"
                            value={plant.etc}
                            style={{ padding: "10px" }}
                            readOnly></textarea>
                    </label>
                </li>
            </ul>
            <Buttons text1="목록" text2="수정" onClick1={goBack} onClick2={goPlantModify} />
        </MypageBox>
    );
};

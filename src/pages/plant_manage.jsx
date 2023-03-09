import { MypageBox } from "components/mypageBox";
import styles from "styles/mypage.module.css";
import "styles/plant_manage.css";
import { useState } from "react";
import "styles/common.css";
import { Buttons } from "components/buttons";
import { useNavigate } from "react-router-dom";

export const PlantManage = () => {
    const showButton = false;

    const [plants, setPlants] = useState([
        {
            id: 1,
            nickname: "준인장",
            species: "선인장",
            size: "소형",
            age: "3개월",
            diseases: "없음",
            watering: "2일에 한 번",
            etc: "부끄러움을 많이 타요"
        },
        {
            id: 2,
            nickname: "칸초",
            species: "난초",
            size: "대형",
            age: "1년 5개월",
            diseases: "누런 잎",
            watering: "1일에 두 번",
            etc: "나초"
        },
        {
            id: 3,
            nickname: "나무",
            species: "동백나무",
            size: "소형",
            age: "7개월",
            diseases: "없음",
            watering: "2일에 한 번",
            etc: "생각보다 작아요"
        }
    ]);

    const navigate = useNavigate();

    const careReservation = () => {
        // 케어 상담예약 페이지 생성해서 해당 페이지로 이동
    };

    const registPlant = () => {
        navigate("/plant_regist");
    };

    const goPlantDetail = (id) => {
        const selectedPlant = plants.filter((plant) => {
            return plant.id === id;
        });
        navigate(`/plant_detail/${id}`, { state: selectedPlant[0] });
    };

    const goPlantModify = (id) => {
        const selectedPlant = plants.filter((plant) => {
            return plant.id === id;
        });

        navigate(`/plant_modify/${id}`, { state: selectedPlant[0] });
    };

    return (
        <MypageBox showButton={showButton}>
            <div className={styles.message}>
                현재 등록된 반려식물은 총 {plants.length}개 입니다. / care service 0개 진행중
            </div>
            {plants.map((plant) => {
                return (
                    <div className="plant_info" key={plant.id}>
                        <div className="plant_nickname">{plant.nickname}</div>
                        <input
                            className="content_font"
                            type="text"
                            defaultValue={`${plant.species} / ${plant.size} / ${plant.age}`}
                            readOnly
                        />
                        <button className="plant_detail_btn" onClick={() => goPlantDetail(plant.id)}>
                            정보 자세히 보기
                        </button>
                        <button className="plant_modify_btn" onClick={() => goPlantModify(plant.id)}>
                            식물 정보 수정
                        </button>
                    </div>
                );
            })}
            <Buttons
                text1="케어 상담예약"
                text2="반려식물 등록하기"
                onClick1={careReservation}
                onClick2={registPlant}
            />
        </MypageBox>
    );
};

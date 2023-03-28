import { Body } from "components/body";
import styles from "styles/info.module.css";
import "styles/common.css";

export const Info = () => {
    return (
        <Body>
            <div className={`${styles.top_logo} subtitle_font`}>
                PLANT<span> HOS&TEL</span>
            </div>
            <div className={styles.big_image}></div>
            <div className={`${styles.info_box} content_font`}>
                <div className={styles.info_box_row}>
                    <span>당신의 반려식물, 이제는 케어를 받을 수 있습니다!</span>
                    <div className={styles.green_box}>
                        <p>
                            최근들어 플랜테리어가 인테리어에 접목되면서 반려식물이라는 키워드가 떠오르고 있죠.
                            <br />
                            근데 식물은 아프다고 말도 못하고, 잘 크고 있는건지 육안으로 확인하기에는 한계가 있습니다.
                            <br />
                            <br />
                            반려동물을 위한 병원과 간식매장, 케어서비스 등은 우리도 알다싶이 쉽게 접근할 수 있습니다.{" "}
                            <br />
                            <br />이 점을 착안하여 저희 플랜트호스텔은 반려식물에게 맞는 1:1 케어와 장시간의 보관 및
                            케어가 필요할 경우 반려식물 호텔 서비스를 이용하여 여러분들의 고민거리를 해결하고 싶습니다.
                        </p>
                    </div>
                </div>

                <span className={styles.service_guide}>＞ 서비스는 이렇게 진행됩니다 ＜</span>
                <div className={styles.info_box_row}>
                    <div className={styles.service_box}>
                        <div className={styles.absolute_box}>
                            <div className={`${styles.top_logo} subtitle_font`}>
                                PLANT<span> HOS&TEL</span>
                            </div>
                            <div className={`${styles.small_logo} subtitle_font`}>service</div>
                            <div>
                                <p>1. 반려식물 상태 진단 및 케어</p>
                                <p>2. 반려식물 약 처방</p>
                                <p>3. 호텔 서비스를 통한 장시간 관리</p>
                                <p>4. 반려식물 및 플랜테리어 매장 오픈</p>
                                <p>5. 반려식물 질병 예방 검진 서비스</p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={styles.store_guide}>
                    ＞ plant store <span>OPEN</span> ＜
                </span>
                <div className={styles.info_box_row}>
                    <div className={styles.store_box}>
                        <div className={styles.absolute_box}>
                            <div className={`${styles.top_logo} subtitle_font`}>
                                PLANT<span> HOS&TEL</span>
                            </div>
                            <div className={`${styles.small_logo} subtitle_font`}>pick up!</div>
                            <div>
                                <p>
                                    1. 다육 식물부터 계절에 따라 유행하는
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;식물들을 모두 찾아보실 수 있습니다.
                                </p>
                                <p>
                                    2. 혹시나 찾으시는 식물이 없다면, 주문 <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;및 예약 픽업 가능합니다.
                                </p>
                                <p>3. 인테리어용 식물 견적 상담 가능!</p>
                                <p>4. 1+1 이벤트 진행중입니다.^^</p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={styles.gifts_guide}>＞ OPEN 기념 사은품 증정 ＜</span>
                <div className={styles.info_box_gifts_row}>
                    <div className={styles.left_box}>
                        <div className={styles.image_box_left}></div>
                        <div className={styles.image_box_left_conten}>
                            <p>
                                해당 이벤트는 오픈 기념 이벤트로
                                <br />
                                선착순 100명 마감 또는 조기 소진 시 <br />
                                공지 없이 종료될 수 있습니다.
                            </p>
                        </div>
                    </div>
                    <div className={styles.right_box}>
                        <div className={styles.image_box_right_content}>
                            <p>
                                아로마, 로즈, 라벤더 등의 꽃잎 추출물을 <br />
                                이용한 피로회복 오일 및 그 외 다양한 사은품들을 <br />
                                반려식물 호텔 서비스 or 케어 서비스 or 매장픽업을 <br />
                                이용해주신 분들께 무료로 제공합니다!
                            </p>
                        </div>
                        <div className={styles.image_box_right}></div>
                    </div>
                </div>
            </div>
        </Body>
    );
};

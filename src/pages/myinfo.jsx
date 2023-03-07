import { MypageBox } from "components/mypageBox";
import styles from "styles/myinfo.module.css";
import "styles/common.css";
import { MyinfoRow } from "components/myinfoRow";

export const Myinfo = () => {
    const showButton = true;

    return (
        <MypageBox showButton={showButton}>
            <ul className={styles.myinfo_list}>
                <MyinfoRow id="id" text="ID" type="text" name="id" value="apple123" canModify={false} />
                <MyinfoRow id="password" text="PW" type="password" name="password" value="apple123" canModify={false} />
                <MyinfoRow
                    id="password_check"
                    text="PW Check"
                    type="password"
                    name="password_check"
                    value="apple123"
                    canModify={false}
                />
                <MyinfoRow id="name" text="name" type="text" name="name" value="김사과" canModify={false} />
                <MyinfoRow
                    id="email"
                    text="E-mail"
                    type="text"
                    name="email"
                    value="apple123@naver.com"
                    canModify={false}
                />
                <MyinfoRow id="hp" text="H.P" type="text" name="hp" value="010-1234-1234" canModify={false} />
                <MyinfoRow id="zipcode" text="Zipcode" type="text" name="zipcode" value="12345" canModify={false} />
                <MyinfoRow id="address" text="Address" type="text" value="서울특별시 강남구" canModify={false} />

                <li className={styles.myinfo_row}>
                    <div className={styles.detail_address}>
                        <div className={styles.label_title}></div>
                        <div className={styles.flex_input}>
                            <input
                                className="content_font"
                                type="text"
                                id="sample6_detailAddress"
                                value="역삼1동 강남대로 362-33"
                                disabled
                            />
                            <input
                                className="content_font"
                                type="text"
                                id="sample6_extraAddress"
                                value="106동 1103호"
                                disabled
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </MypageBox>
    );
};

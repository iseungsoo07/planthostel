import { MypageBox } from "components/mypageBox";
import styles from "styles/myinfo.module.css";
import "styles/common.css";
import { MyinfoRow } from "components/myinfoRow";
import { useState } from "react";

export const Myinfo = () => {
    const showButton = true;

    const [user, setUser] = useState({
        id: 1,
        userid: "apple123",
        username: "김사과",
        password: "apple123",
        password_check: "apple123",
        email: "apple123@naver.com",
        hp: "010-1234-1234",
        zipcode: "12345",
        address: "서울특별시 강남구",
        detailAddress: "역삼1동 강남대로 362-33",
        extraAddress: "106동 1103호"
    });

    return (
        <MypageBox showButton={showButton}>
            <ul className={styles.myinfo_list}>
                <MyinfoRow id="id" text="ID" type="text" name="id" value={user.userid} canModify={false} />
                <MyinfoRow
                    id="password"
                    text="PW"
                    type="password"
                    name="password"
                    value={user.password}
                    canModify={false}
                />
                <MyinfoRow
                    id="password_check"
                    text="PW Check"
                    type="password"
                    name="password_check"
                    value={user.password_check}
                    canModify={false}
                />
                <MyinfoRow id="name" text="name" type="text" name="name" value={user.username} canModify={false} />
                <MyinfoRow id="email" text="E-mail" type="text" name="email" value={user.email} canModify={false} />
                <MyinfoRow id="hp" text="H.P" type="text" name="hp" value={user.hp} canModify={false} />
                <MyinfoRow
                    id="zipcode"
                    text="Zipcode"
                    type="text"
                    name="zipcode"
                    value={user.zipcode}
                    canModify={false}
                />
                <MyinfoRow id="address" text="Address" type="text" value={user.address} canModify={false} />

                <li className={styles.myinfo_row}>
                    <div className={styles.detail_address}>
                        <div className={styles.label_title}></div>
                        <div className={styles.flex_input}>
                            <input
                                className="content_font"
                                type="text"
                                id="sample6_detailAddress"
                                value={user.detailAddress}
                                disabled
                            />
                            <input
                                className="content_font"
                                type="text"
                                id="sample6_extraAddress"
                                value={user.extraAddress}
                                disabled
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </MypageBox>
    );
};

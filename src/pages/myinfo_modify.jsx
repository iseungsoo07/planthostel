import { MypageBox } from "components/mypageBox";
import styles from "styles/myinfo.module.css";
import "styles/common.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Buttons } from "components/buttons";
import * as yup from "yup";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const MyinfoModify = () => {
    const showButton = false;

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

    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleComplete = (data) => {
        var addr = ""; // 주소 변수
        var extraAddr = ""; // 참고항목 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;
        } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress;
        }

        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                extraAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
                extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraAddr !== "") {
                extraAddr = " (" + extraAddr + ")";
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            document.getElementById("sample6_extraAddress").value = extraAddr;
        } else {
            document.getElementById("sample6_extraAddress").value = "";
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById("sample6_postcode").value = data.zonecode;
        document.getElementById("sample6_address").value = addr;
        document.getElementById("sample6_detailAddress").value = "";
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById("sample6_detailAddress").focus();
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    const hpRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    const zipcodeRegex = /^\d{5}$/;

    const schema = yup.object().shape({
        password: yup.string().required("비밀번호를 작성해주세요").min(8, "비밀번호는 최소 8자 이상 입력해야 합니다."),
        password_check: yup
            .string()
            .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
            .required("비밀번호 확인을 작성해주세요."),
        name: yup.string().required("이름을 작성해주세요."),
        email: yup
            .string()
            .email("이메일 형식을 지켜 작성해주세요. (ex. aaa@naver.com)")
            .required("이메일을 작성해주세요"),
        hp: yup
            .string()
            .required("핸드폰 번호를 작성해주세요.")
            .matches(hpRegex, "전화번호 형식을 지켜 작성해주세요. (ex. 010-1234-1234)"),
        zipcode: yup
            .string()
            .required("우편번호 찾기 버튼을 눌러 주소를 입력해주세요.")
            .matches(zipcodeRegex, "우편번호 형식을 지켜 작성해주세요."),
        detailAddress: yup.string().required("상세주소를 입력해주세요.")
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <MypageBox showButton={showButton}>
            <form className={styles.myinfo_list} onSubmit={handleSubmit(onSubmit)}>
                <ul>
                    <li className={styles.myinfo_row}>
                        <label htmlFor="id">
                            <div className={styles.label_title}>ID</div>
                            <input
                                className="content_font"
                                type="text"
                                name="id"
                                id="id"
                                defaultValue={user.userid}
                                disabled
                            />
                        </label>
                    </li>
                    <li className={styles.myinfo_row}>
                        <label htmlFor="password">
                            <div className={styles.label_title}>PW</div>
                            <input
                                className="content_font"
                                type="password"
                                name="password"
                                id="password"
                                defaultValue=""
                                {...register("password")}
                            />
                        </label>
                    </li>
                    {errors.password && <p className={styles.errorMsg}>{errors.password?.message}</p>}
                    <li className={styles.myinfo_row}>
                        <label htmlFor="password_check">
                            <div className={styles.label_title}>PW Check</div>
                            <input
                                className="content_font"
                                type="password"
                                name="password_check"
                                id="password_check"
                                defaultValue=""
                                {...register("password_check")}
                            />
                        </label>
                    </li>
                    {errors.password_check && <p className={styles.errorMsg}>{errors.password_check?.message}</p>}
                    <li className={styles.myinfo_row}>
                        <label htmlFor="name">
                            <div className={styles.label_title}>name</div>
                            <input
                                className="content_font"
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={user.username}
                                {...register("name")}
                            />
                        </label>
                    </li>
                    {errors.name && <p className={styles.errorMsg}>{errors.name?.message}</p>}
                    <li className={styles.myinfo_row}>
                        <label htmlFor="email">
                            <div className={styles.label_title}>E-mail</div>
                            <input
                                className="content_font"
                                type="text"
                                name="email"
                                id="email"
                                defaultValue={user.email}
                                {...register("email")}
                            />
                        </label>
                    </li>
                    {errors.email && <p className={styles.errorMsg}>{errors.email?.message}</p>}
                    <li className={styles.myinfo_row}>
                        <label htmlFor="hp">
                            <div className={styles.label_title}>H.P</div>
                            <input
                                className="content_font"
                                type="text"
                                name="hp"
                                id="hp"
                                defaultValue={user.hp}
                                {...register("hp")}
                            />
                        </label>
                    </li>
                    {errors.hp && <p className={styles.errorMsg}>{errors.hp?.message}</p>}
                    <li className={styles.myinfo_row}>
                        <label htmlFor="zipcode">
                            <div className={styles.label_title}>Zipcode</div>
                            <div className={styles.flex_input}>
                                <input
                                    className="content_font"
                                    type="text"
                                    id="sample6_postcode"
                                    name="zipcode"
                                    defaultValue={user.zipcode}
                                    readOnly
                                    {...register("zipcode")}
                                />
                                <input
                                    type="button"
                                    className={`${styles.address_btn} content_font`}
                                    onClick={handleClick}
                                    defaultValue="우편번호 찾기"
                                />
                            </div>
                        </label>
                    </li>
                    {errors.zipcode && <p className={styles.errorMsg}>{errors.zipcode?.message}</p>}
                    <li className={styles.myinfo_row}>
                        <label htmlFor="address">
                            <div className={styles.label_title}>Address</div>
                            <input
                                className="content_font"
                                type="text"
                                id="sample6_address"
                                defaultValue={user.address}
                                readOnly
                            />
                            <br />
                        </label>
                    </li>
                    {errors.address && <p className={styles.errorMsg}>{errors.address?.message}</p>}
                    <li className={styles.myinfo_row}>
                        <div className={styles.detail_address}>
                            <div className={styles.label_title}></div>
                            <div className={styles.flex_input}>
                                <input
                                    className="content_font"
                                    type="text"
                                    id="sample6_detailAddress"
                                    defaultValue={user.detailAddress}
                                    {...register("detailAddress")}
                                />
                                <input
                                    className="content_font"
                                    type="text"
                                    id="sample6_extraAddress"
                                    defaultValue={user.extraAddress}
                                    readOnly
                                />
                            </div>
                        </div>
                    </li>
                    {errors.detailAddress && <p className={styles.errorMsg}>{errors.detailAddress?.message}</p>}
                </ul>
                <Buttons text1="취소" text2="완료" type="submit" onClick1={() => handleNavigate("/myinfo")} />
            </form>
        </MypageBox>
    );
};

import { Body } from "components/body";
import styles from "styles/login.module.css";

export const Login = () => {
    return (
        <Body isFlex={false}>
            <div className={styles.logo_top}>
                <p>
                    Plant <span className={styles.logo_top_span}>HOS & TEL</span>
                </p>
            </div>
            <form className={styles.login_box} action="../join/join.html">
                <input type="text" name="id" id="id" maxlength="20" placeholder="아이디를 입력해주세요" required />
                <input
                    type="password"
                    name="pw"
                    id="pw"
                    maxlength="20"
                    placeholder="비밀번호를 입력해주세요"
                    required
                />
                <button type="submit" value="LOGIN">
                    LOGIN
                </button>
                <p>
                    아직 회원이 아니신가요? <span className={styles.go_join}>회원가입</span>
                </p>
            </form>
        </Body>
    );
};

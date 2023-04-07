import styles from "../styles/reserve.module.css";
export default function Reserve({ data }) {
    return (
        <div className={styles.container}>
            <h2>회원정보</h2>
            <article className={styles.infoBox}>
                <p>이름:{data.name}</p>
                <p>이메일: {data.email}</p>
                <p>휴대폰번호: {data.phone}</p>
                <p>반려식물 등록수: {data.plant.length}</p>
            </article>
        </div>
    );
}

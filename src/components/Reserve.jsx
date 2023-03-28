import { useQuery } from "@tanstack/react-query";
import styles from "../styles/reserve.module.css";
export default function Reserve() {
  const {
    isLoading,
    error,
    data: memberData,
  } = useQuery(["memberData"], async () => {
    return fetch(`data/memberData.json`).then((res) => res.json());
  });
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className={styles.container}>
      <h2>회원정보</h2>
      <article className={styles.infoBox}>
        <p>이름:{memberData[0].name}</p>
        <p>이메일: {memberData[0].email}</p>
        <p>휴대폰번호: {memberData[0].phone}</p>
        <p>반려식물 등록수: {memberData[0].plant}</p>
      </article>
    </div>
  );
}

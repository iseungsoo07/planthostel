import React, { useState } from "react";
import styles from "styles/ReserveInfo.module.css";

export default function ReserveInfo(onChange) {
    const [form, setForm] = useState({ name: "", phone: "" });

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setForm((prev) => ({ ...prev, name: e.target.value }));
        } else if (e.target.name === "phone") {
            setForm((prev) => ({ ...prev, phone: e.target.value }));
        }
        onChange(form);
    };
    return (
        <form className={styles.container}>
            <div className={styles.box}>
                <p>예약자 성함</p>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="성함을 입력해주세요"
                    onChange={handleChange}
                />
            </div>
            <div className={styles.box}>
                <p>예약자 휴대폰 번호</p>
                <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    placeholder="번호를 입력해주세요"
                    onChange={handleChange}
                />
            </div>
        </form>
    );
}

import React from "react";
import PickUpItem from "./PickUpItem";
import src from "assets/image/plant20 (1).jpg";
import styles from "styles/PickUpList.module.css";

export default function PickUpList() {
    return (
        <div className={`${styles.container} ${styles.scrollBar}`}>
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
            <PickUpItem src={src} name="픽업 식물" price="15,000￦ / 소형" />
        </div>
    );
}

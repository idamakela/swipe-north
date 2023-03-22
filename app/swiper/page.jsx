"use client";
import { useState } from "react";
import data from '../../public/jobsData.js'
import Cards from "./cards.jsx";
import styles from "../../styles/swiper.module.scss";

export default function Swiper() {
    const [job, setJob] = useState(data);

    return (
        <>
            <div className={styles.title}>
                <h2>this is filter "menu"</h2>
            </div>
            <div className={styles.cardsContainer}>
                {job.map((job) => (
                    <Cards key={job.id} {...job} />
                ))}
            </div>
        </>
    );
}

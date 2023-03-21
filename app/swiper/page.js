"use client";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import Cards from "./cards";
import styles from "../../styles/swiper.modules.css";

export default function Swiper() {
    const [job, setJob] = useState([]);

    return (
        <>
            <div>
                <h2 className={styles.title}>
                    HI. this is the swiper page select
                </h2>
            </div>
            <div className={styles.cards}>
                {job.map((job) => (
                    <TinderCard>
                        <div className={styles.card}>
                            <div className={styles.titles}>
                                <h3>{job.title}</h3>
                                <h4>{job.company}</h4>
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </>
    );
}

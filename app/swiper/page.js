"use client";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import Cards from "./cards";
import styles from "../../styles/swiper.module.scss";

export default function Swiper() {
    const [job, setJob] = useState([]);

    return (
        <>
            <div className={styles.title}>
                <h2>HI. this is the swiper page select</h2>
            </div>
            <div className={styles.cards}>
                {job.map((job) => (
                    <TinderCard>
                        <div className={styles.card}>
                            <div>
                                <img
                                    src={job.img}
                                    alt={job.imgAlt}
                                    height='500px'
                                    width='500px'
                                />
                            </div>
                            <div className={styles.text}>
                                <h3>{job.title}</h3>
                                <h4>{job.company}</h4>
                                <p>{`${job.icon} ${job.type}%`}</p>
                                <p>{job.desc}</p>
                            </div>
                            <div className={styles.btnContainer}>
                                <button onClick={funciton}>back</button>
                                <button onClick={funciton}>heart</button>
                                <button onClick={funciton}>remove</button>
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </>
    );
}

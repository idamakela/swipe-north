"use client";
import { useState } from "react";
import Cards from "./cards";
import styles from "../../styles/swiper.module.scss";


export default function Swiper() {

    const [job, setJob] = useState([
        {
            id: 1,
            img: "",
            alt: "img alt",
            title: "caffis",
            company: "byrå",
            icon: "travel",
            type: 100,
            desc: "hdjks fsdkjöahf djsiaöjfeia öjsdöjfieö ajfdköasf jei sjdklöf jeisa ö",
        },
        {
            id: 2,
            img: "",
            alt: "img alt",
            title: "chef",
            company: "max",
            icon: "office",
            type: 100,
            desc: "hdjks fsdkjöahf djsiaöjfeia öjsdöjfieö ajfdköasf jei sjdklöf jeisa ö",
        },
    ]);

    //setJob[dataFile];

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

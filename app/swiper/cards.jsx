"use client";
import { useState } from "react";
import TinderCard from 'react-tinder-card';
import { RxDoubleArrowUp } from 'react-icons/rx';
import styles from '../../styles/swiper.module.scss';

export default function Cards({
    id,
    picture,
    title,
    company,
    iconDescription,
    percentajeJob,
    jobbDescription,
    aboutUs,
    lastDate, 
    experience,
}) {

    const icon = 'icon';
    const fullDesc = jobbDescription;
    const words = fullDesc.split(' ');
    const selectedWords = words.slice(0, 15);
    const smallDesc = selectedWords.join(' ');

    return (
            <div className={styles.card}>
                <div className={styles.upperElements}>
                    <div className={styles.imgContainer}>
                        <img
                            src={picture}
                            height="200px"
                            width="200px"
                        />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.header}>
                            <h3 className={styles.title}>{title}</h3>
                            <h4 className={styles.company}>{company}</h4>
                            <button className={styles.more}>
                                <RxDoubleArrowUp />
                            </button>
                        </div>
                        <p
                            className={styles.icons}>{`${icon} ${percentajeJob}%`}</p>
                        <p>{`${smallDesc}...`}</p>
                    </div>
                </div>
            </div>
    );
}
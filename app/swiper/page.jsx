'use client';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import data from '../../public/jobsData.js';
import Cards from './cards.jsx';
import styles from '../../styles/swiper.module.scss';
import Filter from '../filter';
import dynamic from 'next/dynamic';
import { FaHeart } from 'react-icons/fa';
import { Close, Revert } from 'grommet-icons';

const TinderCard = dynamic(
    () => import('react-tinder-card'),
    { ssr: false }
);

export default function Swiper() {
    const [jobs, setJobs] = useState(data.slice(0, 7)); //sets data, from index 0-7


    return (
        <>
        <div className={styles.title}>
        <Filter /> 
        </div>
            <div className={styles.cardsContainer}>
            {jobs.map((job, index) => (
                    <TinderCard
                        key={job.id}
                        className={styles.swipe}
                        preventSwipe={['right', 'left']}
                    >
                        <Cards {...job} />

                    </TinderCard>
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.back} >
                        <Revert />
                    </button>
                    <button className={styles.heart}>
                        <FaHeart />
                    </button>
                    <button className={styles.remove}>
                        <Close />
                    </button>
                </div>
            </div>
        </>
    );
}

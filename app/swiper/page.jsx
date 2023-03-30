'use client';
import React, { useState, useEffect } from 'react';
import data from '../../public/jobsData.js';
import Cards from './cards.jsx';
import styles from '../../styles/swiper.module.scss';
import Filter from '../filter';
import { FaHeart } from 'react-icons/fa';
import { Close, Revert } from 'grommet-icons';


export default function Swiper() {
    const [jobs, setJobs] = useState(data.slice(0, 7)); //sets data, from index 0-7

    //reload localstorage on page reload ONLY FOR DEV ENVIRONMENT!!!
    // useEffect(() => {
    //     localStorage.clear();
    //     console.log('Page reloaded!');
    // }, []);


    return (
        <>
            <div className={styles.title}>
                <Filter />
            </div>
            <div className={styles.cardsContainer}>
                {jobs.map((job) => (
                    <Cards key={job.id} {...job} />
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.back}>
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

'use client';
import { useState } from 'react';
import data from '../../public/jobsData.js';
import Cards from './cards.jsx';
import styles from '../../styles/swiper.module.scss';

export default function Swiper() {
    const [jobs, setJobs] = useState(data.slice(0, 2));

    const loadMoreJobs = () => {
        const currentLength = jobs.length;
        const nextJobs = data.slice(currentLength, currentLength + 2);
        setJobs([...jobs, ...nextJobs]);
    }

    return (
        <>
            <div className={styles.title}>
                <h2>this is filter "menu"</h2>
            </div>
            <div className={styles.cardsContainer}>
                {jobs.map((job) => (
                    <Cards key={job.id} {...job} />
                    /* on swipe: loadMoreJobs */
                ))}
            </div>
        </>
    );
}

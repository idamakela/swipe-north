'use client';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import data from '../../public/jobsData.js';
import Cards from './cards.jsx';
import styles from '../../styles/swiper.module.scss';

export default function Swiper() {
    const [jobs, setJobs] = useState(data.slice(0, 2));

    const loadMoreJobs = () => {
        const currentLength = jobs.length;
        const nextJobs = data.slice(currentLength, currentLength + 2).reverse();
        setJobs([...jobs, ...nextJobs]);
    }

    const onSwipe = () => {
        loadMoreJobs();
    }

    return (
        <>
            <div className={styles.title}>
                <h2>this is filter "menu"</h2>
            </div>
            <div className={styles.cardsContainer}>
                {jobs.map((job) => (
                    <TinderCard
                        className={styles.swipe}
                        preventSwipe={['down']}
                        onSwipe={onSwipe}
                    >
                        <Cards key={job.id} {...job} />
                    </TinderCard>
                ))}
            </div>
        </>
    );
}

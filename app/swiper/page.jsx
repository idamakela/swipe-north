'use client';
import React, { useState, useEffect } from 'react';
import data from '../../public/jobsData.js';
import Cards from './cards.jsx';
import styles from '../../styles/swiper.module.scss';
import Filter from '../filter';
import dynamic from 'next/dynamic';

const TinderCard = dynamic(() => import('react-tinder-card'), { ssr: false });

export default function Swiper() {
    const [jobs, setJobs] = useState(data.slice(0, 7)); //sets data, from index 0-7

    //reload localstorage on page reload ONLY FOR DEV ENVIRONMENT!!!
    useEffect(() => {
        localStorage.clear();
        console.log('Page reloaded!');
    }, []);

    //handles the swipes and execudes code depending on direction
    const handleSwipe = (direction, job) => {

        //to see items id and direction of swipe
        console.log(`Card ID: ${job.id}, Direction: ${direction}`);

        if (direction == 'up') {
            //saves item in localstorage
            const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
            savedJobs.push(job.id);
            localStorage.setItem('savedJobs', JSON.stringify(savedJobs));

            //see what job.id are in localstorage in savedJobs key
            const myStorage = localStorage.getItem('savedJobs');
            console.log(myStorage);
        }
    };

    return (
        <>
            <div className={styles.title}>
                <Filter />
            </div>
            <div className={styles.cardsContainer}>
                {jobs.map((job) => (
                    <TinderCard
                        key={job.id}
                        className={styles.swipe}
                        preventSwipe={['right', 'left']}
                        onSwipe={(direction) => handleSwipe(direction, job)}
                    >
                        <Cards {...job} />
                    </TinderCard>
                ))}
            </div>
        </>
    );
}

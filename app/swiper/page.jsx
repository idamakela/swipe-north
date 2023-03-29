'use client';
import React, { useState, useEffect } from 'react';
import data from '../../public/jobsData.js';
import Cards from './cards.jsx';
import styles from '../../styles/swiper.module.scss';
import Filter from '../filter';
import dynamic from 'next/dynamic';
import { FaHeart } from 'react-icons/fa';
import { Close, Revert } from 'grommet-icons';

const TinderCard = dynamic(() => import('react-tinder-card'), { ssr: false });

export default function Swiper() {
    const [jobs, setJobs] = useState(data.slice(0, 7)); //sets data, from index 0-7
    const [currentjob, setCurrentJob] = useState(jobs[jobs.length - 1]);

    //reload localstorage on page reload
    useEffect(() => {
        localStorage.clear();
        console.log('Page reloaded!');
    }, []);

    //handles the swipes and execudes code depending on direction
    const handleSwipe = (direction, job) => {
        //to see items id and direction of swipe
        console.log(`Card ID: ${job.id}, Direction: ${direction}`);

        //changes current job
        setCurrentCard(currentCard - 1);

        if (direction == 'up') {
            console.log('up motherfucker');

            //saves item in localstorage
            const savedJobs =
                JSON.parse(localStorage.getItem('savedJobs')) || [];
            savedJobs.push(job.id);
            localStorage.setItem('savedJobs', JSON.stringify(savedJobs));

            //see what keys are in localstorage in specific place
            const myStorage = localStorage.getItem('savedJobs');
            console.log(myStorage);

            //views value for spec key in localstorage
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                console.log(key, value);
            }
        }

        if (direction == 'down') {
        }
    };

    const handleRemove = () => {
        //take the objects id
        //swipe it down
        //handleSwipe
    };

    const handleUndo = () => {
        //method in library
        //tindercards restoreCard()
    };

    const handleHeart = (direction) => {
        setCurrentCard(currentCard - 1);
        console.log(currentjob)
    }

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
                        onSwipe={(direction) =>
                            handleSwipe(direction, job)
                        }
                    >
                        <Cards {...job} />
                    </TinderCard>
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.back}>
                        <Revert />
                    </button>
                    <button
                        className={styles.heart}
                        onClick={() => handleSwipe('up')}
                    >
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

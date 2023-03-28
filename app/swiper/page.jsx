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
    const [jobs, setJobs] = useState(data.slice(0, 5));
    const [currentJob, setCurrentJob] = useState(jobs[jobs.length - 1])  //för att tindercards visar högsta index item först

    // const loadMoreJobs = () => {
    //     const currentLength = jobs.length;
    //     const nextJobs = data.slice(currentLength, currentLength + 2);
    //     setJobs([...jobs, ...nextJobs]);
    // }


    // BELOW FROM LIBRARY EXAMPLE, ADVANCED
    // const [currentIndex, setCurrentIndex] = useState(jobs.length - 1);
    // const [lastDirection, setLastDirection] = useState();
    // const currentIndexRef = useRef(currentIndex);

    // const childRefs = useMemo(
    //     () => 
    //         Array(jobs.length - 1)
    //             .fill(0)
    //             .map((i) => React.forwardRef()),
    //         [jobs]
    // )
    
    // const updateCurrentIndex = (val) => {
    //     setCurrentIndex(val)
    //     currentIndexRef.current = val
    // }

    // const canGoBack = currentIndex < jobs.length - 1
    // const canSwipe = currentIndex >= 0

    // const swiped = (direction, nameToDelete, index) => {
    //     setLastDirection(direction)
    //     updateCurrentIndex(index - 1)
    // }

    // const outOfFrame = (name, idx) => {
    //     console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    //     currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // }

    // const swipe = async (dir) => {
    //     if (canSwipe && currentIndex < jobs.length) {
    //       await childRefs[currentIndex].current.swipe(dir)
    //     }
    // }

    // const goBack = async () => {
    //     if (!canGoBack) return
    //     const newIndex = currentIndex + 1
    //     updateCurrentIndex(newIndex)
    //     await childRefs[newIndex].current.restoreCard()
    // }
    // ABOVE FROM LIBRARY EXAMPLE

    //THERESE STUFF
    const [currentJobIndex, setCurrentJobIndex] = useState(jobs.length - 1);
    // const currentJob = jobs[currentJobIndex];


    const handleNextClick = () => {
        setCurrentJobIndex(currentJobIndex + 1);
    };

    const handlePrevClick = () => {
        setCurrentJobIndex(currentJobIndex - 1);
    };

    //fel object som åker in i localstorage
    const handleSaveClick = () => {
        localStorage.setItem('myKey', JSON.stringify(jobs[currentJobIndex]));
        setCurrentJobIndex(currentJobIndex + 1);
        console.log(currentJob)
    };

    //ChatGPT reworked example
    const childRefs = useRef([]);

    const handleSwipe = (direction, jobId) => {
        console.log(`Swiped ${direction} on job with id ${jobId}`);
    }

    const handleSwipeUp = (jobId) => {
        const index = jobs.findIndex((job) => job.id === jobId);
        if (index !== -1) {
          childRefs.current[index].current.swipeUp();
        }
    };
    
    const handleSwipeDown = (jobId) => {
        const index = jobs.findIndex((job) => job.id === jobId);
        if (index !== -1) {
          childRefs.current[index].current.swipeDown();
        }
    };


    //OWN SHIT
    const onSwipe = (direction, id) => {

        if(direction == 'up') {
            console.log('UP')
        }

        if(direction == 'down') {
            console.log('DOWN')
        }

    }

    return (
        <>
        <div className={styles.title}>
        <Filter /> 
        </div>
            <div className={styles.cardsContainer}>
            {jobs.map((job, index) => (
                    <TinderCard
                        // ref={childRefs[index]}
                        key={job.id}
                        className={styles.swipe}
                        preventSwipe={['right', 'left']}
                        // onSwipe={(dir) => swiped(dir, job.id, index)}
                        // onCardLeftScreen={() => outOfFrame(job.id, index)}
                        // onSwipe={onSwipe}
                        onSwipe={(dir) => handleSwipe(dir, job.id)}
                        ref={(el) => (childRefs.current[index] = el)}
                    >
                        <Cards {...job} />

                    </TinderCard>
                ))}
                <div className={styles.btnContainer}>
                    <button className={styles.back} /*onClick={() => swipe('left')}*/ /*disabled={currentJobIndex === 0}*/ onClick={handlePrevClick}>
                        <Revert />
                    </button>
                    <button className={styles.heart} /*onClick={() => goBack()}*/ /*onClick={handleSaveClick}*/ onClick={() => handleSwipeUp(jobs[0].id)}>
                        <FaHeart />
                    </button>
                    <button className={styles.remove}  /*onClick={() => swipe('right')}*/ /*disabled={currentJobIndex === jobs.length - 1}*/ /*onClick={handleNextClick}*/ onClick={() => handleSwipeDown(jobs[0].id)}>
                        <Close />
                    </button>
                </div>
            </div>
        </>
    );
}

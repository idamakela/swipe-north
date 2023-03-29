"use client";
import {useState, UseRef, forwardRef} from 'react'
import dynamic from 'next/dynamic';

import { RxDoubleArrowUp } from 'react-icons/rx';
import { FaHeart } from 'react-icons/fa';
import { Close, Revert } from 'grommet-icons';
//styles


const TinderCard = dynamic(
    () => import('react-tinder-card'),
    { ssr: false }
);

const Card = forwardRef(({job, onSwipe}, ref)) => {
    //shit

    return (
        <TinderCard 
            key={job.id}
            onSwipe={(dir) => onSwipe(dir, job.id)}
            ref={ref}
            // className={styles.swipe}
        >
            <div className={styles.card}>
                <div className={styles.upperElements}>
                    <div className={styles.imgContainer}>
                        <img
                            src={picture}
                            /*alt={imgAlt}*/ height="200px"
                            width="200px"
                        />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.header}>
                            <h3 className={styles.title}>{title}</h3>
                            <h4 className={styles.company}>{company}</h4>
                            <button className={styles.more} /*onClick={handleClick}*/>
                                <RxDoubleArrowUp />
                            </button>
                        </div>
                        <p
                            className={styles.icons}>{`${icon} ${percentajeJob}%`}</p>
                        <p>{`${smallDesc}...`}</p>
                    </div>
                </div>
            </div>
        </TinderCard>
    )
}

const Cards = ({job}) => {
    const childRefs = useRef([]);

    const handleSwipe = (direction, jobId) => {
        console.log(`Swiped ${direction} on job with id ${jobId}`);
    }

    const handleSwipeUp = () => {
        const index = jobs.findIndex((job) => job.id === jobId)
        if (index !== -1) {
            childRefs.current[index].current.swipeUp();
        }
    }

    const handleSwipeDown = (jobId) => {
        const index = jobs.findIndex((job) => job.id === jobId)
        if (index !== -1 ) {
            childRefs.current[index].current.swipeDown();
        }
    }

    return (
        <div className={styles.cardsContainer}>
            {jobs.map((job, index) => (
                <Card
                    key={job.id}
                    job={job}
                    onSwipe={handleSwipe}
                    ref={(el) => (childRefs.current[index] = el)}
                >
                </Card>
            ))}
            <div className={styles.btnContainer}>
                <button className={styles.back} >
                    <Revert />
                </button>
                <button className={styles.heart} onClick={() => handleSwipeUp(jobs[0].id)}>
                    <FaHeart />
                </button>
                <button className={styles.remove} onClick={() => handleSwipeDown(jobs[0].id)}>
                    <Close />
                </button>
            </div>
        </div>
    )
}

export default Cards; 
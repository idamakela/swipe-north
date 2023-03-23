"use client";
import { useState } from "react";
import TinderCard from 'react-tinder-card';
import { FaHeart } from 'react-icons/fa';
import { Close, Revert } from 'grommet-icons';
import { RxDoubleArrowUp } from 'react-icons/rx';
import styles from '../../styles/swiper.module.scss';
import BigCard from "./BigCard";
import jobs from "@/public/jobsData";


// continue functions from this example: https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js

export default function Cards({
    id,
    picture,
    /*imgAlt,*/
    title,
    company,
    iconDescription,
    percentajeJob,
    jobbDescription,
    aboutUs,
    lastDate, 
    experience,
    //contactEmail
}) {
    // function icon () {
    //     //iconDescription[i] if true => correct icon
    // }
    const [currentCard, setCurrentCard] = useState(0);
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
     setShowModal(true)
    }

    function handleCurrentCard() {
        setCurrentCard((currentCard - 1) % jobs.length);
        console.log('clicked');
    }

    const icon = 'icon';
    const fullDesc = jobbDescription;
    const words = fullDesc.split(' ');
    const selectedWords = words.slice(0, 10);
    const smallDesc = selectedWords.join(' ');

    const onSwipe = (direction) => {
        console.log('you swiped' + ' ' + direction);
    };

    return (
        <TinderCard
            className={styles.swipe}
            key={id}
            preventSwipe={['down']}
            onSwipe={onSwipe}
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
                            <h3 className={styles.title}>{jobs[currentCard].title}</h3>
                            {/*<h4 className={styles.company}>{company}</h4>*/}
                            <button className={styles.more} onClick={handleClick}>
                                <RxDoubleArrowUp />
                            </button>
                        </div>
                        {/* this below needs logic to set right icon */}
                        <p
                            className={styles.icons}
                        >{`${jobs[currentCard].icon} ${jobs[currentCard].percentajeJob}%`}</p>
                        <p>{smallDesc}</p>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.back} onClick={handleCurrentCard}>
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
            {showModal && (
              <BigCard
               setShowModal={setShowModal}
               showModal={showModal} 
               title={title} company={company} 
               jobbDescription={jobbDescription} 
               aboutUs={aboutUs} 
               lastDate={lastDate}
               experience={experience}
               //contactEmail={contactEmail}
               />
            )}
        </TinderCard>
    );
}

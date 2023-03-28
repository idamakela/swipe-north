"use client";
import { useState } from "react";
import TinderCard from 'react-tinder-card';
import { RxDoubleArrowUp } from 'react-icons/rx';
import styles from '../../styles/swiper.module.scss';
// import BigCard from "./BigCard";
// import jobs from "@/public/jobsData";

// import Icon from '../icon.js';

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

    // const [currentJobIndex, setCurrentJobIndex] = useState(0);
    // const [showModal, setShowModal] = useState(false)

    // const handleClick = () => {
    //  setShowModal(true)
    // }

    // const handleNextClick = () => {
    //   setCurrentJobIndex(currentJobIndex + 1);
    // };
  
    // const handlePrevClick = () => {
    //   setCurrentJobIndex(currentJobIndex - 1);
    // };

    // const handleSaveClick = () => {
    //     localStorage.setItem(currentJob.id, JSON.stringify(jobs[currentJobIndex]));
    //     setCurrentJobIndex(currentJobIndex + 1);
    //     console.log(currentJob)
    //   };
      

    // const currentJob = jobs[currentJobIndex];

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
            // {showModal && (
            //   <BigCard id={id} job={currentJob} setShowModal={setShowModal}/>
            // )}
    );
}
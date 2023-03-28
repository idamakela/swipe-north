"use client";
import { useState } from "react";
import { FaHeart, FaTaxi } from 'react-icons/fa';
import {BsWifi} from 'react-icons/bs';
import {HiHome} from 'react-icons/hi';
import { MdOutlineWork } from "react-icons/md";
import {SiHomeassistant} from 'react-icons/si'
import { Close, Revert } from 'grommet-icons';
import { RxDoubleArrowUp } from 'react-icons/rx';
import styles from '../../styles/swiper.module.scss';
import BigCard from "./BigCard";
import jobs from "@/public/jobsData";

import Icon from '../icon.js';


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

    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
     setShowModal(true)
    }

    const handleNextClick = () => {
      setCurrentJobIndex(currentJobIndex + 1);
    };
  
    const handlePrevClick = () => {
      setCurrentJobIndex(currentJobIndex - 1);
    };

    const handleSaveClick = () => {
        localStorage.setItem(currentJob.id, JSON.stringify(jobs[currentJobIndex]));
        setCurrentJobIndex(currentJobIndex + 1);
        console.log(currentJob)
    };
      
    const currentJob = jobs[currentJobIndex];

    //placeholder medans nedan
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
                    src={currentJob.picture}
                    /*alt={imgAlt}*/ height="200px"
                    width="200px"
                />
            </div>
            <div className={styles.text}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{currentJob.title}</h3>
                    <h4 className={styles.company}>{currentJob.company}</h4>
                    <button className={styles.more} onClick={handleClick}>
                        <RxDoubleArrowUp />
                    </button>
                </div>
                {/* this below needs logic to set right icon */}
                <p
                    className={styles.icons}>{`${currentJob.icon} ${currentJob.percentajeJob}%`}</p>
                <p>{`${currentJob.smallDesc}...`}</p>
            </div>
        </div>
        <div className={styles.btnContainer}>
            <button className={styles.back} disabled={currentJobIndex === 0} onClick={handlePrevClick}>
                <Revert />
            </button>
            <button className={styles.heart} onClick={handleSaveClick}>
                <FaHeart />
            </button>
            <button className={styles.remove}  disabled={currentJobIndex === jobs.length - 1} onClick={handleNextClick}>
                <Close />
            </button>
        </div>
         {showModal && (
      <BigCard id={id} job={currentJob} setShowModal={setShowModal}/>
    )}
    </div>
    );
}
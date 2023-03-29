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
    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

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
    
 /*   const getIconDescription = (iconDescription) => {
        let icon;
        switch (iconDescription) {
            case 'transport':
                icon = <FaTaxi />;
                break;
            case 'remote':
                icon = <BsWifi />;
                break;
            case 'local':
                icon = <HiHome />;
                break;
            case 'hybrid':
                icon = <SiHomeassistant />;
                break;
            default:
                icon = <MdWork />;
                break;
    }
    return icon;

      };

    */
    const currentJob = jobs[currentJobIndex];
    const fullDesc = jobbDescription;
    const words = fullDesc.split(' ');
    const selectedWords = words.slice(0, 15);
    const smallDesc = selectedWords.join(' ');

    const onSwipe = (direction) => {
        console.log('you swiped' + ' ' + direction);
    };

    return (
        <TinderCard
            className={styles.swipe}
            key={id}
            preventSwipe={['down']}
            onSwipe={onSwipe}>
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
                        <p className={styles.icons}>{`${currentJob.icon} ${currentJob.percentajeJob}%`}</p>
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
            </div>
            {showModal && (
              <BigCard id={id} job={currentJob} setShowModal={setShowModal}/>
            )}
        </TinderCard>
    );
}

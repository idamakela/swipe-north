'use client';
import { useState } from 'react';
import { RxDoubleArrowUp } from 'react-icons/rx';
import styles from '../../styles/swiper.module.scss';
import Icon from "../icon";
import BigCard from './BigCard';
import dynamic from 'next/dynamic';
import jobsArray from '../../public/jobsData.js';

const TinderCard = dynamic(() => import('react-tinder-card'), { ssr: false });

export default function Cards({
    id,
    picture,
    title,
    company,
    iconDescription,
    percentajeJob,
    jobbDescription,
    aboutUs,
    lastDate,
    experience,
}) {

    const [showModal, setShowModal] = useState(false);

    const fullDesc = jobbDescription;
    const words = fullDesc.split(' ');
    const selectedWords = words.slice(0, 15);
    const smallDesc = selectedWords.join(' ');

    const handleClick = () => {
     setShowModal(true)
    }

    const handleSwipe = (direction, id) => {
        console.log(`Card ID: ${id}, Direction: ${direction}`);

        let currentData = null;

        //data manipulation for localstorage
        for (let i = 0; i <= jobsArray.length - 1; i++) {
            if (jobsArray[i].id === id) {
                currentData = jobsArray[i];
            } else {
                continue;
            }
        }

        if (direction == 'up') {
            console.log('up if works');

            localStorage.setItem(id, JSON.stringify(currentData));

            //see whats in localstorage in specific key
            const myStorage = localStorage.setItem(
                id,
                JSON.stringify(currentData)
            );
            console.log(myStorage);
        }
    };
 
    return (
        <>
                <TinderCard
                    className={styles.swipe}
                    preventSwipe={['right', 'left']}
                    onSwipe={(direction) => handleSwipe(direction, id)}
                >
                    <div className={styles.card}>
                    <div className={styles.upperElements}>
                    <div className={styles.imgContainer}>
                        <img src={picture} height="200px" width="200px" />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.header}>
                            <h3 className={styles.title}>{title}</h3>
                            <h4 className={styles.company}>{company}</h4>
                            <button className={styles.more} onClick={handleClick}>
                                <RxDoubleArrowUp />
                            </button>
                        </div>
                        <p className={styles.icons}>
                            <Icon iconDescription={iconDescription}/>
                            {` ${percentajeJob}%`}
                        </p>
                        <p>{`${smallDesc}...`}</p>
                    </div>
                </div>
            </div>
            </TinderCard>
                {showModal && (
                    <BigCard
                        id={id}
                        title={title}
                        company={company}
                        setShowModal={setShowModal}
                        iconDescription={iconDescription}
                        percentajeJob={percentajeJob}
                        jobbDescription={jobbDescription}
                        experience={experience}
                        aboutUs={aboutUs}
                    />
                )}
        </>

    );
}

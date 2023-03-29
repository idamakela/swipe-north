'use client';
import { useState } from 'react';
import data from '../../public/jobsData.js';
import Cards from './cards.jsx';
import styles from '../../styles/swiper.module.scss';
import Filter from '../filter';

export default function Swiper() {
    const [jobs, setJobs] = useState(data.slice(0, 5));
    const [filtrering, setFiltrering] = useState();

    const loadMoreJobs = () => {
        const currentLength = jobs.length;
        const nextJobs = data.slice(currentLength, currentLength + 2);
        setJobs([...jobs, ...nextJobs]);

    }

    console.log(filtrering)

    return (
        <>
            <div className={styles.title}>
                <Filter f={filtrering} setF={setFiltrering}
                />
            </div>
            <div className={styles.cardsContainer}>             
                    {jobs.filter((job)=> {
                        if (filtrering === undefined) {
                            return true
                        } else {
                         return filtrering === job.profession
                        }
                    }).map((job) => (
                    <Cards key={job.id} {...job} />
                   /* on swipe: loadMoreJobs */
                ))}
            </div>
        </>
    );
}

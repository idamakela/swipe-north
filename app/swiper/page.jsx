'use client';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import data from '../../public/jobsData.js';
import Cards from './cards.jsx';
import styles from '../../styles/swiper.module.scss';

/*
* TODO:
*   sätt ihop bigCard och cards så samma data (useState) visas 
*   sätt in funktionerna för SwipeButtons i cards
*/

export default function Swiper() {
    const [jobs, setJobs] = useState(data.slice(0, 2));

    //dis dont work how I want it to, dunno the best way for dynamic reload of content (that dosen't fuck up the order)
    const loadMoreJobs = () => {
        const currentLength = jobs.length;
        const nextJobs = data.slice(currentLength, currentLength + 2).reverse();
        setJobs([...jobs, ...nextJobs]);
    };

    const onSwipe = (direction) => {
        console.log('you swiped' + ' ' + direction);

        if (direction == 'left') {
            //function
            console.log('left');
        }

        if (direction == 'right') {
            //function
            console.log('right');
        }

        if (direction == 'up') {
            //function
            console.log('up');
        }

        // loadMoreJobs();
    };

    return (
        <>
            <div className={styles.title}>
                <h2>this is filter "menu"</h2>
            </div>
            <div className={styles.cardsContainer}>
                {jobs.map((job) => (
                    <TinderCard
                        key={job.id}
                        className={styles.swipe}
                        preventSwipe={['down']}
                        onSwipe={onSwipe}
                    >
                        <Cards {...job} />
                    </TinderCard>
                ))}
            </div>
        </>
    );
}

'use client';
import React, { useState, useEffect, use } from 'react';
import styles from '../../styles/savedjobs.module.scss'

import { VscHeartFilled, VscHeart, VscArrowLeft } from 'react-icons/vsc';
import {useAutoAnimate} from '@formkit/useAutoAnimate/react';
import Link from 'next/link';


function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([0]);
  const [listRef] = useAutoAnimate();

  useEffect(() => {
    const savedJobsData = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));

    if (savedJobsData){
      setSavedJobs(
        savedJobsData.map((job) => ({...job,heartFilled:true}))
      );

    }
  },[]);
 

  const handleClickClose = (id) => {
    localStorage.removeItem(id);
    setSavedJobs ((prevJobs) => 
      
     prevJobs
        .map((job)=>
            job.id === id
           ? {...job,heartFilled: !job.heartFilled }
           :job

        )
        .filter(job => job.id !== id)
    );
  };

  const handleLike = (id) => {
    setSavedJobs(prevJobs => prevJobs.map(job => {
      if (job.id === id) {
        return {...job, liked: !job.liked};
      }
      return job;
    }));
  };

  return (
    <>

    <link href='/swiper'>
      <VscArrowLeft className={styles.goBack} />
    </link>
    <h1 className={styles.title}>Saved Jobs</h1>
    <div className={styles.savedJobsContainer} ref={listRef}>
      {savedJobs.map(job => (
        <div className={styles.savedJobsList} key={job.id}>

          <div className={styles.imgContainer}>

            <img className={styles.img} src={job.picture} /*alt={imgAlt}*/ height="120px" width="120px"/>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.innerText}>
              <div>
                <h2 className={styles.jobTitle}>{job.title}</h2>
                <h4 className={styles.company}>{job.company}</h4>
              </div>

              <div
                        onClick={() => handleClickClose(job.id)}
                              className={styles.close}
                 >
                            {job.heartFilled ? (
                                        <VscHeartFilled />
                                ) : (
                                        <VscHeart />
                                )}
                </div>
          </div>
            
            <h4 className={styles.icons}
            >{`${job.icon} ${job.percentajeJob}%`}</h4>
          </div>
        </div>
      ))}
     
    </div>
    <EmailModel/>
    </>
  );
}

export default SavedJobs;

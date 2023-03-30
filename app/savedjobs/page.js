"use client"
import React, { useState, useEffect } from 'react';
import styles from '../../styles/savedjobs.module.scss'

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const savedJobsData = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)))
    if (savedJobsData) {
      setSavedJobs(savedJobsData);
    }
  }, []);

  const handleClickClose = (id) => {
    localStorage.removeItem(id);
    setSavedJobs(prevJobs => prevJobs.filter(job => job.id !== id));
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
    <h1 className={styles.title}>Saved Jobs</h1>
    <div className={styles.savedJobsContainer}>
      {savedJobs.map(job => (
        <div className={styles.savedJobsList} key={job.id}>
          <div className={styles.imgContainer}>
            <img className={styles.bigImg} src={job.picture} /*alt={imgAlt}*/ height="120px" width="120px"/>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.innerText}>
              <div>
                <h2 className={styles.jobTitle}>{job.title}</h2>
                <h4 className={styles.company}>{job.company}</h4>
              </div>
              
             

              <div onClick={() => handleClickClose(job.id)} className={styles.close}>⊗</div>
            </div>
            <h4 className={styles.icons}>{`${job.icon} ${job.percentajeJob}%`}</h4>
          </div>
        </div>
      ))}
     
    </div>
    </>
  );
}

export default SavedJobs;

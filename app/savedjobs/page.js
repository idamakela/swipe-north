"use client"
import React, { useState, useEffect } from 'react';
import styles from '../../styles/savedjobs.module.scss'

function ClearLocalStorage() {
  const [cleared, setCleared] = useState(false);

  const handleClearClick = () => {
    localStorage.clear();
    setCleared(true);
  };

  return (
    <div>
      <button className={styles.clearBtn} onClick={handleClearClick}>Clear List</button>
      {cleared && <p className={styles.paragraph} >List has been cleared, reload page.</p>}
    </div>
  );
}
function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const savedJobsData = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)))
    if (savedJobsData) {
      setSavedJobs(savedJobsData);
    }
  }, []);

  return (
    <>
    <h1 className={styles.title}>Saved Jobs</h1>
    <div className={styles.savedJobsContainer}>
      {savedJobs.map(job => (
        <div className={styles.savedJobsList} key={job.id}>
          <div className={styles.imgContainer}>
            <img className={styles.bigImg} src={job.picture} /*alt={imgAlt}*/ height="200px" width="200px"/>
          </div>
          <div className={styles.infoContainer}>
            <div>
              <h2>{job.title}</h2>
              <h4>{job.company}</h4>
            </div>
            <h4 className={styles.icons}>{`${job.icon} ${job.percentajeJob}%`}</h4>
          </div>
        </div>
      ))}
      <ClearLocalStorage />
    </div>
    
    </>
  );
}

export default SavedJobs;
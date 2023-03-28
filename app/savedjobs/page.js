"use client"
import React, { useState } from 'react';
import styles from '../../styles/savedjobs.module.scss';

const SaveJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // your code to save the job goes here
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.box}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={handleChangeTitle} />
        </div>
        <div className={styles.box}>
          <label htmlFor="location">Location</label>
          <input id="location" type="text" value={location} onChange={handleChangeLocation} />
        </div>
        <div className={styles.box}>
          <label htmlFor="image">Image</label>
          <input id="image" type="file" value={image} onChange={handleChangeImage} />
        </div>
        <button type="submit">Save Job</button>
      </form>
    </div>
  );
};

export default SaveJob;
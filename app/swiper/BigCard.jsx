import React from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';
import styles from '../../styles/BigCard.module.scss';
import Icon from '../icon';

export default function BigCard({
    id,
    setShowModal,
    title,
    company,
    jobbDescription,
    iconDescription,
    percentajeJob,
    experience,
    aboutUs,
}) {
    const handleClick = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.bigCard} key={id}>
            <div className={styles.text}>
                <div className={styles.mainInfo}>
                    <div>
                        <h3 className={styles.title}>{title}</h3>
                        <h4 className={styles.company}>{company}</h4>
                    </div>
                    <button className={styles.more} onClick={handleClick}>
                        <RxDoubleArrowDown />
                    </button>
                </div>
                <button className={`${styles.btn} ${styles.pulse}`}>
                    ANSÖK HÄR!
                </button>
                <p className={styles.icons}>
                    <Icon iconDescription={iconDescription} />
                    {` ${percentajeJob}%`}
                </p>
                <h4 className={styles.subTitle}>Vi söker dig som:</h4>
                <p className={styles.paragraph}>{jobbDescription}</p>
                <h4 className={styles.subTitle}>Erfarenheter</h4>
                <p className={styles.paragraph}>{experience}</p>
                <h4 className={styles.subTitle}>Om oss</h4>
                <p className={styles.paragraph}>{aboutUs}</p>
                <h4 className={styles.subTitle}>Kontaktuppgifter</h4>
                <p className={styles.paragraph}>Test@ansökhär.com</p>
                <h4 className={styles.last}>
                    Sista ansökningsdatum{' '}
                    <span className={styles.date}>2023-05-04</span>
                </h4>
            </div>
        </div>
    );
}

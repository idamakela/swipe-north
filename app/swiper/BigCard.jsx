import React from 'react'
import { RxDoubleArrowDown } from "react-icons/rx";
import styles from '../../styles/BigCard.module.scss'
//import jobs from '@/public/jobsData';

export default function BigCard({
  id,
  title,
  company,
  icon,
  type,
  desc,
  setShowModal
}) {

  const handleClick = () => {
    console.log("clicked")
    setShowModal(false)
}

  return (
    <div className={styles.bigCard} key={id}>
            <div className={styles.text}>
                    <div className={styles.mainInfo}>
                      <div>
                        <h3 className={styles.title}>Taxichaufför</h3>
                        <h4 className={styles.company}>Skellefteå taxi</h4>
                      </div>
                        <button className={styles.more} onClick={handleClick}>
                            <RxDoubleArrowDown />
                        </button>
                    </div>
                    {/* this below needs logic to set right icon */}
                    <p className={styles.icons}>*icons*</p>
                    <h4 className={styles.subTitle}>Vi söker dig som:</h4>
                    <p className={styles.paragraph}>Du är en serviceinriktad person som trivs med att möta och samarbeta med nya människor.
                       Du sätter en stor heder i punktlighet och är stolt över att vara en duktig förare. </p>
                    <h4 className={styles.subTitle}>Erfarenheter</h4>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>Lifeskills</li>
                      <li className={styles.listItem}>Knowledge</li>
                    </ul>
                    <h4 className={styles.subTitle}>Om oss</h4>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h4 className={styles.subTitle}>Kontaktuppgifter</h4>
                    <h4>Sista ansökningsdatum 2023-04-15</h4>
                    <button className={styles.btn}>ANSÖK HÄR!</button>
                </div>
            
        </div>
  )
}

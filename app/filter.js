'use client';
import jobs from "../public/jobsData";
import React from "react";
import Cards from './swiper/cards';
//import styles from '../../styles/swiper.module.scss';

import { useState } from "react";
import styles from '../styles/filter.module.scss';
//import jobs from './public/jobsData'


export default function JobList({jobs}) {

  const [profession, setProfession] = useState({jobs});


  return (
    
    <div className={styles.jobfilter}>
      <select className={styles.selector}>
        <option value="">Alla yrken</option>
	      <option value="Administration">Administration</option>
        <option value="It-Consult">It-Consult</option>
	      <option value="It-Support">It-Support</option>
        <option value="Konstruktör">Konstruktör</option>
        <option value="Restaurang">Restaurang</option>
        <option value="Säkerhetsarbete">Säkerhetsarbete</option>
        <option value="Transport">Transport</option>
        <option value="Underhåll">Underhåll</option>
        <option value="Utbildning">Utbildning</option>
        <option value="Vård och Omsorg">Vård och omsorg</option> 
      </select>
    </div>
  )
}


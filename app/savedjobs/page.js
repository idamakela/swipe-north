"use client";

import styles from "../../styles/save.module.scss";

import { useState } from "react";


export default function Save  ()  {
  const [cards,setcard] = useState ([

    {
      title:'id-1',
      Text:'taxi AB'

    },

    {
      title:'id-2',
      Text:'taxi AB'

    },
    {
      title:'id-3',
      Text:'taxi AB'

    },


  ])

  return (
    <div >
      <section className={styles.section}>
        <div className={styles.containers}>
          <h3>SPARANDE JOB</h3>
          <div className={styles.cards}>
            {
              cards.map((job, i) => (
                <div key={job.id} {...job}>
              <h3>{job.title}</h3>
              <p>{ cards.Text}</p>
            </div> 

              ))
            }
            
          </div>
        </div>
      </section>
    </div>
  );
}





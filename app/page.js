
import { Readex_Pro } from "next/font/google";
import styles from "../styles/page.module.scss";
import { FaAngleUp } from 'react-icons/fa'

  const readex_pro = Readex_Pro({
    weight: '400',
    subsets: ['latin'],
  })


export default function Home() {
    return <main className={`${readex_pro.className} ${styles.main}`}>
             <div className={styles.hero}>
              <h1 className={styles.title} >Swipe north</h1>
              <div className={styles.animationContainer}>
                <div className={styles.angleAnimation}>
                  <p className={styles.small}><FaAngleUp/></p>
                  <p className={styles.medium}><FaAngleUp/></p>
                  <p className={styles.big}><FaAngleUp/></p>
                 </div>
                <h2 className={styles.swipe}>SWIPE</h2>
              </div>
             </div>
        </main>;
}
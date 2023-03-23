
import styles from "../styles/page.module.scss";
import { SlArrowUp } from "react-icons/sl";
import Link from 'next/link';

export default function Home() {
    return <main className={styles.main}>
              <div className={styles.animationContainer}>
                 <Link href="/swiper" >
                  <p className={styles.small}><SlArrowUp/></p>
                  <p className={styles.medium}><SlArrowUp/></p>
                  <p className={styles.big}><SlArrowUp/></p>
                  </Link>
                <Link href="/swiper" ><h2 className={styles.swipe}>SWIPE</h2></Link>
              </div>
        </main>;
}
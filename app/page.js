
import styles from "../styles/page.module.scss";
import { SlArrowUp } from "react-icons/sl";
import Link from 'next/link';
import backgroundImg from '../public/backgroundfront.png'

export default function Home() {
    return <main className={styles.main} style={{ backgroundImage: `url(${backgroundImg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
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
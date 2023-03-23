import { Readex_Pro } from "next/font/google";
import styles from "../styles/page.module.scss";
import { FaAngleUp } from 'react-icons/fa'
import Link from 'next/link';

  const readex_pro = Readex_Pro({
    weight: '400',
    subsets: ['latin'],
  })

export default function Home() {
    return <main className={`${readex_pro.className} ${styles.main}`}>
              <div className={styles.animationContainer}>
                 <Link href="/swiper" >
                  <p className={styles.small}><FaAngleUp/></p>
                  <p className={styles.medium}><FaAngleUp/></p>
                  <p className={styles.big}><FaAngleUp/></p>
                  </Link>
                <Link href="/swiper" ><h2 className={styles.swipe}>SWIPE</h2></Link>
              </div>
        </main>;
}
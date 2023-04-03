import styles from '../styles/page.module.scss';
import { SlArrowUp } from 'react-icons/sl';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div>
          <h1 className={styles.title}>SWIPE NORTH</h1>
          <h2 className={styles.subTitle}>For a new beginning in Skellefteå</h2>
        </div>
        <div className={styles.animationContainer}>
          <Link href="/swiper">
            <h3 className={styles.swipe}>SWIPE UP</h3>
          </Link>
          <Link href="/swiper">
            <p className={styles.small}>
              <SlArrowUp />
            </p>
            <p className={styles.medium}>
              <SlArrowUp />
            </p>
            <p className={styles.big}>
              <SlArrowUp />
            </p>
          </Link>
          <Link href="/swiper">
            <h3 className={styles.swipe}>TO START</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}

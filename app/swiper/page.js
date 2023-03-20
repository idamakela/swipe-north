import { register } from "swiper/element/bundle";
import styles from "../../styles/page.module.scss";

export default function Swiper() {
    register();

    return (
        <>
            <h2 className='swiper-title'>HI. this is the swiper page</h2>
            <div className={styles.cards}>
                <swiper-container
                    className={styles.container}
                    slides-per-view='1'
                    loop='true'
                >
                    <swiper-slide className={styles.card}>Slide 1</swiper-slide>
                    <swiper-slide className={styles.card}>Slide 2</swiper-slide>
                    <swiper-slide className={styles.card}>Slide 3</swiper-slide>
                </swiper-container>
            </div>
        </>
    );
}

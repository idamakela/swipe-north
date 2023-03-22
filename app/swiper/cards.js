import TinderCard from "react-tinder-card";
import { FaHeart } from "react-icons/fa";
import { Close, Revert } from "grommet-icons";
import { RxDoubleArrowUp } from "react-icons/rx";
import styles from "../../styles/swiper.module.scss";

// continue functions from this example: https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js

export default function Cards({
    id,
    img,
    imgAlt,
    title,
    company,
    icon,
    type,
    desc,
}) {

    const onSwipe = (direction) => {
        console.log('you swiped' + ' ' + direction)
    }

    return (
        <TinderCard className={styles.swipe} key={id} preventSwipe={["down"]} onSwipe={onSwipe}>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={img} alt={imgAlt} height='200px' width='200px' />
                </div>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                        <h4 className={styles.company}>{company}</h4>
                        <button className={styles.more}>
                            <RxDoubleArrowUp />
                        </button>
                    </div>
                    {/* this below needs logic to set right icon */}
                    <p className={styles.icons}>{`${icon} ${type}%`}</p>
                    <p>{desc}</p>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.back}>
                        <Revert />
                    </button>
                    <button className={styles.heart}>
                        <FaHeart />
                    </button>
                    <button className={styles.remove}>
                        <Close />
                    </button>
                </div>
            </div>
        </TinderCard>
    );
}

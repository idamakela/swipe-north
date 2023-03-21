import TinderCard from "react-tinder-card";
import { FaUndo, FaAngleDoubleUp, FaHeart } from "react-icons/fa";
import { Close } from "grommet-icons";
import styles from "../../styles/swiper.module.scss";

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
    return (
        <TinderCard className={styles.swipe} key={id} preventSwipe={["down"]}>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={img} alt={imgAlt} height='200px' width='200px' />
                </div>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                        <h4 className={styles.company}>{company}</h4>
                        <button className={styles.more}>
                            <FaAngleDoubleUp />
                        </button>
                    </div>
                    {/* this below needs logic to set right icon */}
                    <p>{`${icon} ${type}%`}</p>
                    <p>{desc}</p>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.back}>
                        <FaUndo />
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

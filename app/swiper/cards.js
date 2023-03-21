import TinderCard from "react-tinder-card";
import styles from "../../styles/swiper.module.scss";

export default function Cards({ id, img, imgAlt, title, company, icon, type, desc }) {
    return (
        <TinderCard
            className={styles.swipe}
            key={id}
            preventSwipe={["down"]}
        >
            <div className={styles.card}>
                <div>
                    <img
                        src={img}
                        alt={imgAlt}
                        height='200px'
                        width='200px'
                    />
                </div>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p>{`${icon} ${type}%`}</p>
                    <p>{desc}</p>
                </div>
                <div className={styles.btnContainer}>
                    <button>back</button>
                    <button>heart</button>
                    <button>remove</button>
                </div>
            </div>
        </TinderCard>
    );
}

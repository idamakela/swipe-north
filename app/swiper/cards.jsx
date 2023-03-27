import { FaHeart } from 'react-icons/fa';
import { Close, Revert } from 'grommet-icons';
import { RxDoubleArrowUp } from 'react-icons/rx';
import styles from '../../styles/swiper.module.scss';

// continue functions from this example: https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js

export default function Cards({
    picture,
    /*imgAlt,*/
    title,
    company,
    iconDescription,
    percentajeJob,
    jobbDescription,
}) {

    //placeholder medans nedan
    const icon = 'icon';

    function iconVar () {
        //iconDescription[i] if true => correct icon
        switch (true) {
            case iconDescription.transport:
                //icon for transport
                break;
            case iconDescription.remote:
                //icon for remote
                break;
            case iconDescription.local:
                //icon for local/office
                break;
            case iconDescription.hybrid:
                //icon for hybrid
                break;
            default:
                //icon for default
        }
    }

    const fullDesc = jobbDescription;
    const words = fullDesc.split(' ');
    const selectedWords = words.slice(0, 15);
    const smallDesc = selectedWords.join(' ');

    return (
        <div className={styles.card}>
            <div className={styles.upperElements}>
                <div className={styles.imgContainer}>
                    <img
                        src={picture}
                        /*alt={imgAlt}*/ height="200px"
                        width="200px"
                    />
                </div>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                        <h4 className={styles.company}>{company}</h4>
                        <button className={styles.more}>
                            <RxDoubleArrowUp />
                        </button>
                    </div>
                    <p
                        className={styles.icons}
                    >{`${icon} ${percentajeJob}%`}</p>
                    <p>{`${smallDesc}...`}</p>
                </div>
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
    );
}

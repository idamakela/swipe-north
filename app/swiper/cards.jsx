import { FaHeart, FaTaxi } from 'react-icons/fa';
import {BsWifi} from 'react-icons/bs';
import {HiHome} from 'react-icons/hi';
import { MdOutlineWork } from "react-icons/md";
import {SiHomeassistant} from 'react-icons/si'
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
    var icon = null;
    console.log(iconDescription.transport)

    function iconVar () {
        //iconDescription[i] if true => correct icon
        switch (true) {
            case iconDescription.transport:
                //icon for transport
                icon = <FaTaxi />
                break;
            case iconDescription.remote:
                //icon for remote
                icon = <BsWifi />
                break;
            case iconDescription.local:
                //icon for local/office
                icon = <HiHome />
                break;
            case iconDescription.hybrid:
                //icon for hybrid
                icon = <SiHomeassistant />
                break;
            default:
                icon = <MdOutlineWork />
                //icon for default
        }
    }
    iconVar()

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

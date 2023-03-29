import React from "react";
import Link from "next/link";
import { VscGlobe, VscHeartFilled } from "react-icons/vsc";
import styles from "styles/header.module.scss";

export default function header(){
    return(
        <>
        <header className={styles['headerStyle']}>
            <div className={styles['logo']}>
                <Link href="./swiper" className={styles['linkstyle']}>
                    <img src="logo.png" alt="Skellefteå logo" style={{width: "115px"}}></img>
                </Link>
            </div>
            <div className={styles['heart']}>
                <Link href="/savedjobs">
                <VscHeartFilled />
                </Link>
                <VscGlobe />
            </div>  
        </header>
        </>
    )
}
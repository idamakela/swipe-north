import React from "react";
import Link from "next/link";
import { FaHeart, FaGlobe } from "react-icons/fa";
import styles from "styles/header.module.scss";



export default function header(){
    return(
        <>
        <header className={styles['headerStyle']}>
            <div className={styles['logo']}>
            <Link href="/">
                <img src="logo.png" alt="Skellefteå logo" style={{width: "150px"}}></img>
            </Link>
            </div>
            <div className={styles['heart']}>
                <Link href="/savedjobs">
                <FaHeart />
                </Link>
                <FaGlobe />
            </div>  
        </header>
        </>
    )
}
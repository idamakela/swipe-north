import React from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import styles from "styles/header.module.scss";



export default function header(){
    return(
        <>
        <header className={styles.headerStyle}>
            <div className={styles.logo}>
            <Link href="/">
                <img src="logo.png" alt="Skellefteå logo" style={{height:"50px"}}></img>
            </Link>
            </div>
            <Link href="/savedjobs">
            <div className={styles.heart}>
                <FaHeart />
            </div>
            </Link>
        </header>
        </>
    )
}
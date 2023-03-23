import React from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import styles from "styles/header.module.scss";



export default function header(){
    return(
        <>
        <header className={styles['headerStyle']}>
            <div className={styles['logo']}>
                <Link href="/" className={styles['linkstyle']}>
                    <img src="logo.png" alt="Skellefteå logo" style={{width: "150px"}}></img>
                </Link>
            </div>
            <div className={styles['heart']}>
                <Link href="/savedjobs">
                <FaHeart />
                </Link>
            </div>
        </header>
        </>
    )
}
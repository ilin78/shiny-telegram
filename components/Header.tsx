import React from "react"
import Link from 'next/link'
import styles from './Header.module.scss'
import Image from "next/image"

import exit from '/public/images/svg/exit.svg'
const Header= () => {
    return (
        <div className={styles.content}>
            <div className={styles.next}><Link href="/">Мероприятия</Link></div>
            <div className={styles.exit}>Выход <Image src={exit} width={25} height={25} alt="exit"/></div>
        </div>
    )
}
export default Header
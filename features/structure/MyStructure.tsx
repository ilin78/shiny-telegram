import React from "react"
import { UserData } from '../../interfaces/struct'
import Image from 'next/image';
import styles from './MyStructure.module.scss'
export type UDateProps = { userData: UserData[] }

const MyStructure: React.FC<UDateProps> = ({ userData }) => {
    return (
        <>
            <div className={styles.head}>Моя структура</div>
            <div className={styles.cards}>
                {
                    userData.map((udata: UserData, i: number) => {
                        return (
                            <div key={i} className={styles.card}>
                                <div className={styles.numbers}>
                                    <div className={styles.block}>{udata[0]}</div>
                                    <div className={styles.block}>{udata[1]}</div>
                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.count}>
                                    <div className={styles.block}>Уровень выплат</div>
                                    <div className={styles.block}>Активных партнеров</div>
                                </div>
                                <div className={styles.box}>
                                    <div className={styles.solo}>{udata[2].map((list: UserData, l: number) => {
                                        return (
                                            <div key={l}>
                                                <div className={styles.item}>
                                                    <Image
                                                        src={`/images/png/${list.image}.png`}
                                                        alt={list.image}
                                                        className={styles.image}
                                                        height={25}
                                                        width={25}
                                                    />
                                                    <div className={styles.account}>{list.account}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    }</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MyStructure
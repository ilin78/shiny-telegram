import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { ArrowUpOutlined } from '@ant-design/icons'
import dashboardImg from '/public/images/svg/home.svg'
import activityImg from '/public/images/svg/active.svg'
import marketdImg from '/public/images/svg/blogers.svg'
import prImg from '/public/images/svg/pr.svg'
import structureImg from '/public/images/svg/struct.svg'
import shopImg from '/public/images/svg/shop.svg'
import marathonImg from '/public/images/svg/maraphon.svg'
import landingImg from '/public/images/svg/lending.svg'

import styles from './SideBar.module.scss'

const SideBar = () => {
    const IsActive = route => {
        if (route === useRouter().pathname) return styles.active || ""
    }
    const [state, setState] = useState({ bottom: false })
    const toggleDrawer = (open: boolean) => () => {
        setState({ ...state, bottom: open })
    }

    // Оптимизировать list позже через map
    const list = (
        <ul className={styles.ullist}>
            <li className={IsActive("/dashboard")}>
                <div className={styles.button}>
                    <Link href="/dashboard" >
                        <div className={styles.container}>
                            <Image
                                src={dashboardImg}
                                alt="dashboard"
                                height={25}
                                width={25}
                            />
                            <div className={styles.next}>Дашборд</div>
                        </div>
                    </Link>
                </div>
            </li>
            <li className={IsActive("/activity")}>
                <div className={styles.button}>
                    <Link href="/activity">
                        <div className={styles.container}>
                            <Image
                                src={activityImg}
                                alt="activity"
                                height={25}
                                width={25}
                            />
                            <div className={styles.next}>Биржа активности</div>
                        </div>
                    </Link>
                </div>
            </li>
            <li className={IsActive("/market")}>
                <div className={styles.button}>
                    <Link href="/market">
                        <div className={styles.container}>
                            <Image
                                src={marketdImg}
                                alt="market"
                                height={25}
                                width={25}
                            />
                            <div className={styles.next}>Биржа блогеров</div>
                        </div>
                    </Link>
                </div>
            </li>
            <li className={IsActive("/pr")}>
                <div className={styles.button}>
                    <Link href="/pr">
                        <div className={styles.container}>
                            <Image
                                src={prImg}
                                alt="pr"
                                height={25}
                                width={25}
                            />
                            <div className={styles.next}>Взаимопиар</div>
                        </div>
                    </Link>
                </div>
            </li>
            <li className={IsActive("/structure")}>
                <div className={styles.button}>
                    <Link href="/structure">
                        <div className={styles.container}>
                            <Image
                                src={structureImg}
                                alt="structure"
                                height={25}
                                width={25}
                            />
                            <div className={styles.next}>Моя структура</div>
                        </div>
                    </Link>
                </div>
            </li>
            <li className={IsActive("/shop")}>
                <div className={styles.button}>
                    <Link href="/shop">
                        <div className={styles.container}>
                            <Image
                                src={shopImg}
                                alt="shop"
                                height={25}
                                width={25} />
                            <div className={styles.next}>Магазин</div>
                        </div>
                    </Link>
                </div>
            </li>
            <li className={IsActive("/marathon")}>
                <div className={styles.button}>
                    <Link href="/marathon">
                        <div className={styles.container}>
                            <Image
                                src={marathonImg}
                                alt="marathon"
                                height={25}
                                width={25}
                            />
                            <div className={styles.next}>Марафон</div>
                        </div>
                    </Link>
                </div>
            </li>
            <li className={IsActive("/landing")}>
                <div className={styles.button}>
                    <Link href="/landing">
                        <div className={styles.container}>
                            <Image
                                src={landingImg}
                                alt="landing"
                                height={25}
                                width={25}
                            />
                            <div className={styles.next}>Лендинги</div>
                        </div>
                    </Link>
                </div>
            </li>
        </ul>
    )

    return (
        <>
            <div className={styles.content}>
                <div className={styles.desc}>{list}</div>

                <div className={styles.mobile} onClick={toggleDrawer(true)}>
                    <div className={styles.upmenu}>
                        <ArrowUpOutlined  style={{ fontSize: '16px', color: '#6b73ff' }} />
                    </div>
                </div>
                <SwipeableDrawer
                    anchor={'bottom'}
                    open={state.bottom}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list}
                </SwipeableDrawer>
            </div>
        </>
    )
}
export default SideBar
import React from "react"
import type { NextPage } from 'next'
import Layout from "../components/Layout"
import styles from './pages.module.scss'

const Marathon: NextPage = () => {
    return (
        <Layout title="Лендинги">
            <div className={styles.head}>
                Лендинги
            </div>
        </Layout>
    )
}

export default Marathon
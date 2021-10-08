import React from "react"
import type { NextPage } from 'next'
import Layout from "../components/Layout"
import styles from './pages.module.scss'

const Marathon: NextPage = () => {
    return (
        <Layout title="Марафон">
            <div className={styles.head}>
            Марафон
            </div>
        </Layout>
    )
}

export default Marathon
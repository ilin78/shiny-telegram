import React from "react"
import Layout from "../components/Layout"
import type { NextPage } from 'next'
import styles from './pages.module.scss'

const Activity: NextPage = () => {
    return (
        <Layout title="Биржа активности">
            <div className={styles.head}>Биржа активности</div>
        </Layout>
    )
}

export default Activity
import React from "react"
import type { NextPage } from 'next'
import Layout from "../components/Layout"
import styles  from './pages.module.scss'
const Dashboard: NextPage = () => {
    return (
        <Layout title="Дашбоард">
            <div className={styles.head}>
            Дашбоард
            </div>
        </Layout>
    )
}

export default Dashboard
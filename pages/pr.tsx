import React from "react"
import type { NextPage } from 'next'
import Layout from "../components/Layout"
import styles from './pages.module.scss'

const MutualPR: NextPage = () => {
    return (
        <Layout title="Взаимопиар">
            <div className={styles.head}>
                Взаимопиар
            </div>
        </Layout>
    )
}

export default MutualPR
import React from "react"
import type { NextPage } from 'next'
import Layout from "../components/Layout"
import styles from './pages.module.scss'

const Market: NextPage = () => {
    return (
        <Layout title="Биржа блогеров">
            <div className={styles.head}>
                Биржа блогеров
            </div>
        </Layout>
    )
}

export default Market
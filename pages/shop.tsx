import React from "react"
import type { NextPage } from 'next'
import Layout from "../components/Layout"
import styles from './pages.module.scss'

const Shop: NextPage = () => {
    return (
        <Layout title="Магазин">
            <div className={styles.head}>
                Магазин
            </div>
        </Layout>
    )
}

export default Shop
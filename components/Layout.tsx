import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import SideBar from './SideBar'
import Header from './Header'
import styles from './Layout.module.scss'

export type PageProps = PropsWithChildren<{
  title: string;
}>;

const Layout = (props: PageProps) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className={styles.head}>
        <header>
          <Header />
        </header>
      </div>
      <div className={styles.flex}>
        <nav className={styles.bar}>
          <SideBar />
        </nav>
        <main className={styles.content}>
          {props.children}
        </main>
      </div>
    </div>
  )
}

export default Layout
import Layout from "../components/Layout"
import styles from './pages.module.scss'

export default function ErrorPage() {
    return (
        <>  
            <Layout title="404">
                <div className={styles.head}>Ваш запрос не найден</div>
            </Layout>
        </>
    )
}
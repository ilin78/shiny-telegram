import Head from 'next/head'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="test app - Oleg Ilin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Мероприятия">
        <div>
          Тестовое задание. Автор проекта Олег Ильин
        </div>
      </Layout>
    </>
  )
}

export default Home

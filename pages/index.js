import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage/LandingPage'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Food</title>
      </Head>

     <LandingPage />

    </div>
  )
}

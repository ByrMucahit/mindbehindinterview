import Head from 'next/head'
import { PageHeader, Col, Row } from 'antd';
import styles from '../styles/Home.module.css'
import SinglePageLayout from "../src/components/layout/page/singlePageLayout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Col><Row><PageHeader title={"mindBehind Interview Task"}/></Row></Col>
          <SinglePageLayout/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
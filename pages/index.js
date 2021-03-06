import Head from 'next/head'
import Link from 'next/link'
import {userRouter} from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>devter 🦅</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">devter!</a>
        </h1>
        <nav>
        <Link href='/timeline'>
            <a>Timeline</a>
        </Link>
        </nav>
      </main>

      <style jsx>{`
      h1 {
        text-align: center;
        font-size:48px;
      }

      nav {
        font-size: 24px;
      }

      a {
        color: #09f;
        text-decoration: none;
      }

      `}</style>
    </div>
  )
}

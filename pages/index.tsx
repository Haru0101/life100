import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1>人生でやりたい100のこと</h1>
      <ol>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ol>
      <form>
        <label>
          やりたいこと：
          <input type="text" />
        </label>
        <button>追加</button>
      </form>
    </div>
  )
}

export default Home

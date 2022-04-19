import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage = () => {
  const items = useState([
    'テスト1',
    'テスト2',
    'テスト3',
  ]);
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

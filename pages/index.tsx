import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage = () => {
  const items = useState([
    'テスト1',
    'テスト2',
    'テスト3',
  ]);
  const listItems = items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div>
      <h1>人生でやりたい100のこと</h1>
      <ol>
        {listItems}
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

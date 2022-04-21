import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const listItems = items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  const [newItem, setNewItem] = useState("");

  const addItems = () => {
    setItems([...items, newItem]);
    setNewItem("");
  }

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>人生でやりたい100のこと</h1>
      <ol>
        {listItems}
      </ol>
      <form onSubmit={submitForm}>
        <label>
          やりたいこと：
          <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem}/>
        </label>
        <button onClick={addItems}>追加</button>
      </form>
    </div>
  )
}

export default Home

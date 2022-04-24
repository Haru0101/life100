import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const listItems = items.map((item, index) => {
    return <li key={index}>{item}<button onClick={() => deleteItem(index)}>削除</button></li>;
  });

  const addItem = () => {
    if (newItem === "") return;
    const newItems = [...items, newItem];
    setItems(newItems);
    setNewItem("")
    updateLocalStorage(newItems);
  }

  const updateLocalStorage = (newItems: string[]) => {
    localStorage.setItem('items', JSON.stringify(newItems))
  }

  const deleteItem = (index: number): void => {
    const newItems = items.filter((_, itemIndex) => {
      return index !== itemIndex;
    })
    setItems(newItems);
    updateLocalStorage(newItems);
  }

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  const listItems = items.map((item, index) => {
    return <li key={index}>{item}<button onClick={() => deleteItem(index)}>削除</button></li>;
  });

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
        <button onClick={addItem}>追加</button>
      </form>
    </div>
  )
}

export default Home

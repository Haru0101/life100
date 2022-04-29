import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const listItems = items?.map((item, index) => {
    return <li key={index}>{item}<button onClick={() => deleteItem(index)}>削除</button></li>;
  });

  const addItem = () => {
    if (newItem === "") return;
    const newItems = items ? [...items, newItem] : [newItem];
    setItems(newItems);
    setNewItem("")
    updateLocalStorage(newItems);
  }

  const resetAllItems = () => {
    setItems([]);
    updateLocalStorage(null);
  }
  const updateLocalStorage = (newItems: string[] | null) => {
    if(newItems) localStorage.clear();
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

  const fetchLocalStorage = () => {
    if (!localStorage.getItem('items')) return;
    setItems(JSON.parse(localStorage.getItem('items') ?? ""));
  }

  useEffect(() => {
    fetchLocalStorage();
  }, [])

  return (
    <div>
      <h1>LIFE 100</h1>
      <ol>
        {listItems}
      </ol>
      <form onSubmit={submitForm}>
        <div>
          <label>
            やりたいこと：
            <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem}/>
          </label><button onClick={addItem}>追加</button>
        </div>
        <div><button onClick={resetAllItems}>リセット</button></div>
      </form>
    </div>
  )
}

export default Home

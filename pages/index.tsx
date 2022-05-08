import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

type Item = {
  content: string;
  isDone: boolean;
}

const Home: NextPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({
    content: '',
    isDone: false
  });

  const listItems = items?.map((item, index) => {
    return <li className='w-1/2 flex items-center' key={index}><input type='checkbox' checked={item.isDone} onChange={e => completeItem(index, e.target.checked)} name='' id='' className='mr-1'/><span className={item.isDone ? 'line-through' : ''}>{item.content}</span><button onClick={() => deleteItem(index)}><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg></button></li>;
  });

  const addItem = () => {
    if (newItem.content === '') return;
    const newItems = items ? [...items, newItem] : [newItem];
    setItems(newItems);
    setNewItem({
      content: '',
      isDone: false
    })
    updateLocalStorage(newItems);
  }

  const resetAllItems = () => {
    setItems([]);
    updateLocalStorage(null);
  }
  const updateLocalStorage = (newItems: Item[] | null) => {
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
    setItems(JSON.parse(localStorage.getItem('items') ?? ''));
  }

  const completeItem = (index: number, isChecked: boolean): void => {
    items[index].isDone = isChecked
    updateLocalStorage(items);
    fetchLocalStorage();
  }

  useEffect(() => {
    fetchLocalStorage();
  }, [])

  return (
    <Layout title="Home">
    <div className='h-screen flex justify-center items-center'>
      <div className='max-w-screen-sm'>
        <h1 className='text-3xl font-bold text-center mb-4'>LIFE 100</h1>
        <ol className='text-left flex flex-wrap mb-4'>
          {listItems}
        </ol>
        <form onSubmit={submitForm}>
          <div className='flex items-center mb-2 '>
              <input type='text' placeholder='やりたいことを入力' className='flex-auto border-solid border-2 mr-1' onChange={e => setNewItem({content: e.target.value, isDone: false})} value={newItem.content}/>
            <button className='text-white bg-blue-700 font-medium text-sm px-2.5 py-1' onClick={addItem}>追加</button>
          </div>
          <div className='text-center'><button className='block w-full border-dashed border-2 text-sm px-2.5 py-1' onClick={resetAllItems}>リセット</button></div>
        </form>
      </div>
      </div>
    </Layout>
  )
}

export default Home

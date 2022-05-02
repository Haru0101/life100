import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>('');
  const isCompleted = useState<boolean>(false);

  const listItems = items?.map((item, index) => {
    return <li className='w-1/2' key={index}><input type='checkbox' onChange={()=>completeItem()} name='' id='' />{item}<button onClick={() => deleteItem(index)}>削除</button></li>;
  });

  const completeItem = () => {
    
  }

  const addItem = () => {
    if (newItem === '') return;
    const newItems = items ? [...items, newItem] : [newItem];
    setItems(newItems);
    setNewItem('')
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
    setItems(JSON.parse(localStorage.getItem('items') ?? ''));
  }

  useEffect(() => {
    fetchLocalStorage();
  }, [])

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='max-w-screen-sm'>
        <h1 className='text-3xl font-bold text-center mb-4'>LIFE 100</h1>
        <ol className='text-left flex flex-wrap mb-4'>
          {listItems}
        </ol>
        <form onSubmit={submitForm}>
          <div className='flex items-center mb-2 '>
              <input type='text' placeholder='やりたいことを入力' className='flex-auto border-solid border-2 mr-1' onChange={e => setNewItem(e.target.value)} value={newItem}/>
            <button className='text-white bg-blue-700 font-medium text-sm px-2.5 py-1' onClick={addItem}>追加</button>
          </div>
          <div className='text-center'><button className='block w-full border-dashed border-2 text-sm px-2.5 py-1' onClick={resetAllItems}>リセット</button></div>
        </form>
      </div>
    </div>
  )
}

export default Home

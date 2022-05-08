import type { NextPage } from 'next'
import Layout from '../components/Layout';

const Sub: NextPage = () => {

  return (
    <Layout title="Sub">
    <div className='h-screen flex justify-center items-center'>
      <div className='max-w-screen-sm'>
          <h1 className='text-3xl font-bold text-center mb-4'>SUB</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Sub
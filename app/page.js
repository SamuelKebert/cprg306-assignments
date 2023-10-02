import Link from 'next/link';
import Studentinfo from './schoolinfo';



export default function Home() {
  return (
    <main>
      <h1 className='text-center text-lg p-10'>CPRG 306: Web Development 2 - Assignments</h1>
      <Studentinfo/>
      <ul className='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        <li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'><Link href="/week2/">Week 2</Link></li>
       <li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'><Link href="/week3">Week 3</Link></li>
        <li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'><Link href="/week4">Week 4</Link></li>
      </ul>
    </main>)
};   
import Link from 'next/link';
import Studentinfo from './schoolinfo';



export default function Home() {
  return (
    <main>
      <h1 className='text-center'>CPRG 306: Web Development 2 - Assignments</h1>
      <Studentinfo/>
      <Link href="/week2/">Week 2</Link>
      <Link href="/week3">Week 3</Link>
    </main>)
};   
import Link from "next/link";
import Studentinfo from "../schoolinfo"; 

export default function Page(){
   return (<main>
    <Link href="/" className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>Home</Link>
     <h1 className="text-center text-lg p-10">My Shopping List</h1>
     <Studentinfo/>
     </main>)
};
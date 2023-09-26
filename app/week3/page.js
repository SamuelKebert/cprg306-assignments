import React from 'react';
import ItemList from './item-list';
import Link from 'next/link';

export default function Page(){
    return (
        <main>      
             <Link href="/" className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>Home</Link>
            <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
                Shopping List</h1>
            <ItemList/> 
           
        </main>
    )
};
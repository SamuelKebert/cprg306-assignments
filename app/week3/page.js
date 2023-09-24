import React from 'react';
import ItemList from './item-list';
import Link from 'next/link';

export default function Page(){
    return (
        <main>      
            <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
                Shopping List</h1>
            <ItemList/> 
            <Link href="/">Home</Link>
        </main>
    )
};
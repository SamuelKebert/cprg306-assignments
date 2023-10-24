"use client";
import React from 'react';
import ItemList from './item-list';
import Link from 'next/link';
import NewItem from './new-item';
import ItemData from './item.json';
import {useState} from "react";
import {useId} from "react";

 


export default function Page(){
   

const [listItem, setListItem] = useState(ItemData);
const newId = useId();


const handleAddItem = (item) => {

    console.log(listItem);
        const newItem = {id: newId,...item};    
        setListItem([...listItem, newItem]);
    }; 
    
const onAddItem = () => {handleAddItem(name, quantity, category)};

    return (
        <main>      
             <Link href="/" className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>Home</Link>
            <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
                Shopping List</h1>
                <NewItem onAddItem={handleAddItem}></NewItem>
                <ItemList item={listItem}/>
        </main>
    )
};
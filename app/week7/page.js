"use client";
import React from 'react';
import ItemList from './item-list';
import Link from 'next/link';
import NewItem from './new-item';
import ItemData from './item.json';
import {useState, useEffect} from "react";
import {useId} from "react";
import MealIdeas from './meals-idea';

 


export default function Page(){
   
const [selectedItemName, setSelectedItemName] = useState(" ");
const [listItem, setListItem] = useState(ItemData);
const newId = useId();

const handleSelectItem = (item) => {
    
    const cleanedItemName = item.name.toString().split(",")[0].trim().replace(/[^a-zA-Z ]/g, "");
    setSelectedItemName(cleanedItemName);

}


const handleAddItem = (item) => {

        const newItem = {id: newId,...item};    
        setListItem([...listItem, newItem]);
    }; 
    

    return (
        <main >
            <div >
                <Link href="/" className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>Home</Link>
                <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
                    Shopping List</h1>
            </div>
                <div>
                    <NewItem onAddItem={handleAddItem}></NewItem>
                    <ItemList item={listItem} onItemSelect={handleSelectItem} selectedItemName={selectedItemName}></ItemList>
                </div>
                <div>
                    <MealIdeas ingredient={selectedItemName}></MealIdeas>
                </div>
        </main>
    )
};
"use client";
import React from 'react';
import ItemList from '../week8/shoppinglist/item-list';
import Link from 'next/link';
import NewItem from './new-item';
import {useState, useEffect} from "react";
import {useId} from "react";
import MealIdeas from './meals-idea';
import { useUserAuth } from "./_utils/auth-context";;
import { Navigate } from 'react-router-dom';
import { getItems, addItem } from "./_services/shopping-list-service";
 


export default function Page(){
   
const [selectedItemName, setSelectedItemName] = useState(" ");
const [listItem, setListItem] = useState([]);
const newId = useId();

const { user } = useUserAuth();

if (!user) {
 return <Navigate to="cprg306-assigments/app/week8/page.js" />;
}

const handleSelectItem = (item) => {
    
    const cleanedItemName = item.name.toString().split(",")[0].trim().replace(/[^a-zA-Z ]/g, "");
    setSelectedItemName(cleanedItemName);

}
useEffect(() => {
    const loadItems = async () => {
     const items = await getItems(user.uid);
     setListItem(items);
    };
    loadItems();
   }, []);
   


const handleAddItem = async (item) => {
      const id = await addItem(user.uid, item);

        const newItem = {id: newId,...item};    
        setListItem(...listItem, { ...item, id });
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
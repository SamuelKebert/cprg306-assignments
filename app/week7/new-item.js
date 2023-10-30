"use client";

import { useState } from "react";
import { onAddItem } from "./page";



export default function NewItem( {onAddItem}) {
    const [name, setName] = useState("");  
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [itemCreated, setItemCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        onAddItem({name, quantity, category});

        console.log( {name, quantity, category}, "Item Created");
        setItemCreated(true);
        setName("");    
        setQuantity("");
        setCategory("");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };   
    
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }; 

    return (
        <main className='flex justify-center'>
            <div  className='w-1/2 max-w-md mx-auto'>
                {itemCreated && ( 
                    <div  className='text-center'> Item Created </div> 
                )}
                <div>
                    <h1  className='text-center'> Create New Item </h1>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <label className='flex flex-col'>
                           <span>Name:</span> 
                            <input type="text" value={name} onChange={handleNameChange} />
                        </label>

                        <label className='flex flex-col'>
                            <span>Quantity:</span>
                            <input type="text" value={quantity} onChange={handleQuantityChange} />
                        </label>

                        <label className='flex flex-col'>
                            <span>Category:</span>
                            <input type="text" value={category} onChange={handleCategoryChange} />
                        </label>

                        <button type= "submit"> Add Item</button>
                    </form>  
                </div>
            </div>
        </main>     
    )}; 

"use client";

import { useState } from "react";


export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [itemCreated, setItemCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);
        setItemCreated(true);

        setName("");    
        setQuantity("");
        setCategory("");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }   
    
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <main>
            <div>
                {itemCreated && ( 
                    <div> Item Created </div> 
                )}
                <div>
                    <h1> Create New Item </h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                           <span>Name:</span> 
                            <input type="text" value={name} onChange={handleNameChange} />
                        </label>

                        <label>
                            <span>Quantity:</span>
                            <input type="text" value={quantity} onChange={handleQuantityChange} />
                        </label>

                        <label>
                            <span>Category:</span>
                            <input type="text" value={category} onChange={handleCategoryChange} />
                        </label>

                        <button type="submit">Create Item</button>
                    </form>  
                </div>

            </div>
        </main>     



)}
import item from "./item";
import itemdata from "./item.json";  
import {useState} from "react";


export default function ItemList() {

    const [listItem, setlistItem] = useState("name");

    const sortItems = {
        name: (a, b) => a.name.localeCompare(b.name),
        quantity: (a, b) => a.quantity - b.quantity,
        catergory : (a, b) => a.category.localeCompare(b.category),
    };
    
   
    const handleSortChange = (sortkey) => {
        setlistItem(sortkey)};

    const sortedItems = [...itemdata].sort(sortItems[listItem]);


    return (
        <>
            <div>
                <div>
                    <label>
                        <span>Sort By:</span>
                        <button 
                        onClick={() => handleSortChange('quantity')}>Quantity</button>
                        <button onClick={() => handleSortChange('name')}>Name</button>
                        <button onClick={() => handleSortChange('category')}>Category</button>
                    </label>
                </div>
                
                <div>
                    <ul>
                        {sortedItems.map((item) => (
                        <il 
                        key= {item.id}>
                            <div>{item.name} </div>
                            <div> {item.quantity}</div>
                            <div> {item.category}</div>
                        </il>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </>
        


    
    
    
)}
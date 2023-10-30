import item from "./item"; 
import {useState} from "react";




export default function ItemList({item, onItemSelect, selectedItemName}) {
    console.log(item);
    const [listItem, setlistItem] = useState(item);

    const sortItems = {
        name: (a, b) => a.name.localeCompare(b.name),
        quantity: (a, b) => a.quantity - b.quantity,
        category: (a, b) => a.category.localeCompare(b.category),
    };
    

    const handleSortChange = (sortKey) => {
        setlistItem(sortKey)};

    const sortedItems = [...item].sort(sortItems[listItem]);


    console.log(selectedItemName);

    return (
        <>
            <div>
                <div  className='flex justify-center'>
                    <label className='w-1/2 max-w-md mx-auto'>
                        <span>Sort By:</span>
                        <button onClick={() => handleSortChange('quantity')} className='m-2 border border-white-200'> Quantity</button>
                        <button onClick={() => handleSortChange('name')} className='m-2 border border-white-200'> Name</button>
                        <button onClick={() => handleSortChange('category')} className='m-2 border border-white-200'> Category</button>
                    </label>
                </div>
                
                <div className='max-w-md mx-auto'>
                    <ul>
                        {sortedItems.map((item) => (
                        <li
                        key={item.id}
                        className={item.name.toString().split(",")[0].trim().replace(/[^a-zA-Z ]/g, "") === selectedItemName ? 'bg-blue-200' : ''}
                        onClick={() => onItemSelect(item)}>
                            <div className='border border-gray-200 rounded m-2 p-2'>
                            <div>{item.name} </div>
                            <div> {item.quantity}</div>
                            <div> {item.category}</div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    
                </div>
            </div>
        </>
)}

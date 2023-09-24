

export default function Item({name, quantity, category}){
    return(
        <div>
            <ul>
                <li>
                    <h3>Name {name}</h3>
                    <p>Quantity{quantity}</p>
                    <p>Category {category}</p>
                </li>    
            </ul>    
        </div>
    )
}
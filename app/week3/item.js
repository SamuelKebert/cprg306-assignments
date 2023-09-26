

export default function Item({name, quantity, category}){
    return(
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 shadow border-solid border-black border-2" >
                    <h3 className="text-lg font-bold text-black">Name {name}</h3>
                    <p className="text-base text-black">Quantity {quantity}</p>
                    <p className="text-sm text-black ">Category {category}</p>
                </div>    
            </div>    
        </div>
    )
}
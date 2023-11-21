"use client";
import { useState, useEffect } from "react";

export default function MealIdeas ({ingredient}) {

    const [meals, setMeals] = useState([]);


   
    useEffect(() => {
        async function fetchMealIdeas() {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            console.log(data);
            setMeals(data.meals);}
        fetchMealIdeas();
    }, [ingredient]);

    console.log(ingredient, "is the ingredient")
    
    return (
        <div  className='absolute top-10 right-0  w-1/4 ml-auto'>
        <h2>Meal Ideas:</h2>
        {meals && meals.length > 0 ? (
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <a href={meal.strMealThumb}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            {meal.strMeal}
                        </a>
                    </li>
                ))}
            </ul>
        ) : (
            <p>Nothing</p>
        )}
    </div>
    );
}
     





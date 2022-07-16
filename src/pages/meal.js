import { useEffect, useMemo, useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { MealCard } from "../Card/MealCard"
import { getMealById } from "../http/mealsService"
import styles from '../styles/meal.module.css'

export const Meal = () => {

    const location = useLocation();
    const [mealData, setMealData] = useState('');
    
    console.log(mealData)
    useEffect(() => {
        const fetch = async() => {
            const response = await getMealById(location.state.mealId);
            setMealData(response.meals[0])
            document.title = response.meals[0].strMeal;
        }
        fetch()      
    }, [])

    return(
        <div className={styles.meal}>
            <MealCard 
            title={mealData.strMeal}
            area={mealData.strArea}
            category={mealData.strCategory}
            instructions={mealData.strInstructions}
            src={mealData.strMealThumb}
            tags={mealData.strTags}
            />
        </div>
    )
}
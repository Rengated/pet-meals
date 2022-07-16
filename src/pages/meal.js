import { useEffect,  useState } from "react"
import { useLocation,  } from "react-router-dom"
import { MealCard } from "../components/Card/MealCard"
import { getMealById } from "../http/mealsService"
import styles from '../styles/meal.module.css'

export const Meal = () => {

    const location = useLocation();
    const [mealData, setMealData] = useState('');
    
  
    useEffect(() => {
        const fetch = async() => {
            const response = await getMealById(location.state.mealId);
            setMealData(response.meals[0])
            document.title = response.meals[0].strMeal;
        }
        fetch()      
    }, )

    return(
        <div className={styles.meal}>
            <MealCard 
            id={location.state.mealId}
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
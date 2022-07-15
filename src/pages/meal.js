import { useEffect, useMemo, useState } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { getMealById } from "../http/mealsService"

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
    }, [])

    return(
        <>
            '123'
        </>
    )
}
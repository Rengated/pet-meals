import { useEffect, useState} from "react"
import { Card } from "../Card/Card"
import { getRandomMeal } from "../http/mealsService"

export const Menu = () => {
    const [meals, setMeals] = useState('')
    console.log(meals)
    useEffect(() => {
        const fetch = async() => {
            const meal = await getRandomMeal()
            setMeals(prev => [...prev, meal])
        }
        for (let i = 0; i < 10; i ++){
            fetch()
        }

    }, [])
    return(
        <>
            <div>
                {
                    meals? meals.map(meal => <Card 
                                                key={meal.meals[0].idMeal}
                                                src={meal.meals[0].strMealThumb}
                                                area={meal.meals[0].strArea}
                                                title={meal.meals[0].strMeal}
                                            />
                                    ) 
                    : ''
                }
            </div>
        </>
    )
}
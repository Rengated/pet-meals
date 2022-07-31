import { useEffect, useState} from "react"
import { Card } from "../components/Card/Card"
import { MenuNav } from "../components/MenuNav"
import { getRandomMeal } from "../http/mealsService"
import styles from '../styles/menu.module.css'

export const Menu = () => {
    const [meals, setMeals] = useState('')
 
    useEffect(() => {
        const fetch = async() => {
            const meal = await getRandomMeal()
            setMeals(prev => [...prev, meal])
        }
        for (let i = 0; i < 12; i ++){
            fetch()
        }

    }, [])

    const showMore = () => {
        const fetch = async() => {
            const meal = await getRandomMeal()
            setMeals(prev => [...prev, meal])
        }
        for (let i = 0; i < 12; i ++){
            fetch()
        }
    }



    return(
        <div className={styles.wrapper}>
            <MenuNav/>
                <div className={`${styles.meals} container`}>
                    {
                        meals? meals.map(meal => <Card
                                                    isInCart={false}
                                                    id={meal.meals[0].idMeal}
                                                    key={meal.meals[0].idMeal}
                                                    src={meal.meals[0].strMealThumb}
                                                    area={meal.meals[0].strArea}
                                                    title={meal.meals[0].strMeal}
                                                />
                                    ) 
                        : ''
                    }
                </div>
                <button onClick={showMore} className={styles.button}>Show more</button>
        </div>
    )
}
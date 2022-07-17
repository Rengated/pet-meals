import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getMealById } from "../http/mealsService"
import { Card } from "../components/Card/Card"
import styles from '../styles/cart.module.css'

export const Cart = () => {
    const [meals, setMeals] = useState([])
    const ids = Object.keys(localStorage)
    
    const refreshPage = () => {
        setMeals([])
        const fetch = async(id) => {
            const response = await getMealById(id)
            
            setMeals(prev => [...prev, response.meals[0]])
        }
        const ids = Object.keys(localStorage)
        ids?.forEach(id => fetch(id)) 


    }

    useEffect(() => {
        const fetch = async(id) => {
            const response = await getMealById(id)
            
            setMeals(prev => [...prev, response.meals[0]])
        }

        ids?.forEach(id => fetch(id)) 
        
        
    }, [])



   

    return(
        <div className={`${styles.cart} container`}>
            <h3>Cart</h3>
            {meals?.map((meal, index) => 
                                <div className={styles.card_wrapper}>
                                    <p className={styles.index}>{index + 1}</p>
                                    <Card
                                    refreshCart={() => refreshPage()}
                                    isInCart={true}
                                    id={meal.idMeal}
                                    key={meal.idMeal}
                                    src={meal.strMealThumb}
                                    area={meal.strArea}
                                    title={meal.strMeal}
                                    />
                                </div>
                       )
            }
        </div>
    )
}
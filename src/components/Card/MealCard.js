import styles from '../../styles/mealCard.module.css'
import { useDispatch } from 'react-redux'

export const MealCard = ({title, area, category, instructions, src, tags, id}) => {
    const dispatch = useDispatch();

    const hadnleAddMeal = () => {
        if(!Object.keys(localStorage).includes(id)){
            dispatch({type: 'ADD_TO_CART', payload: id});
            localStorage.setItem(id, 'MealId')
        }
    }

    return(
        <div className={styles.mealCard}>
            <img className={styles.img} alt='meal' src={src}/>
            <div className={styles.information}>
                <p className={styles.title}>
                    <span>{title}</span>
                    <i onClick={hadnleAddMeal} className="mealCart fa-solid fa-cart-shopping"></i>
                </p>
                <div className={styles.tags}>
                    {tags?.split(',')?.map(tag => <p className={styles.tag}>{tag}</p>)}
                </div>
                <p className={styles.instructions}>{instructions}</p>
            </div>
        </div>
    )
}
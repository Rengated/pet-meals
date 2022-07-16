import styles from '../../styles/mealCard.module.css'
import { useDispatch } from 'react-redux'

export const MealCard = ({title, area, category, instructions, src, tags, id}) => {
    const dispatch = useDispatch();

    return(
        <div className={styles.mealCard}>
            <img className={styles.img} alt='meal' src={src}/>
            <div className={styles.information}>
                <p className={styles.title}>
                    {title}
                    <i onClick={() => {localStorage.setItem(id, 'mealId'); dispatch({type:'ADD_TO_CART'})}}className="cart fa-solid fa-cart-shopping"></i>
                </p>
                <div className={styles.tags}>
                    {tags?.split(',')?.map(tag => <p className={styles.tag}>{tag}</p>)}
                </div>
                <p className={styles.instructions}>{instructions}</p>
            </div>
        </div>
    )
}
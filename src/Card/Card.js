import { useNavigate } from 'react-router-dom'
import styles from '../styles/card.module.css'


export const Card = (props) => {
    const navigate = useNavigate();
    const handleImgCLick = () => {
        navigate('/meal', {state : {mealId: props.id}})

    }

    const hadnleAddMeal = () => {
        localStorage.setItem(props.id, 'MealId')
    }
    return(
        <div className={styles.card}>
            <img className={styles.img} onClick={handleImgCLick} src={props.src} alt='meal'></img>
            <div className={styles.information}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.area}>{props.area}</p>
                <button onClick={hadnleAddMeal} className={styles.button}>
                    <i className="cart fa-solid fa-cart-shopping"></i>
                    <span>Add meal</span>
                </button>
            </div>
        </div>
    )
}
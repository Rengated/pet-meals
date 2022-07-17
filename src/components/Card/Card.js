import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import styles from '../../styles/card.module.css'


export const Card = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleImgCLick = () => {
        navigate('/meal', {state : {mealId: props.id}});

    }

    const hadnleAddMeal = () => {
        if(!Object.keys(localStorage).includes(props.id)){
            dispatch({type: 'ADD_TO_CART', payload: props.id});
            localStorage.setItem(props.id, 'MealId')
        }
    }

    const handleDeleteMeal = () => {
        dispatch({type: 'DELETE_FROM_CART', payload: props.id})
        localStorage.removeItem(props.id)
        props.refreshCart()

    }
    return(
        <div className={styles.card}>
            <img className={styles.img} onClick={handleImgCLick} src={props.src} alt='meal'></img>
            <div className={styles.information}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.area}>{props.area}</p>
                <button onClick={!props.isInCart? hadnleAddMeal: handleDeleteMeal} className={styles.button}>
                    <i className="cart fa-solid fa-cart-shopping"></i>
                    <span>{!props.isInCart? 'Add meal' : 'Delete meal'}</span>
                </button>
            </div>
        </div>
    )
}
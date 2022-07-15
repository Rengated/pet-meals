import styles from '../styles/card.module.css'


export const Card = (props) => {
    return(
        <div className={styles.card}>
            <img className={styles.img} src={props.src} alt='meal'></img>
            <div className={styles.information}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.area}>{props.area}</p>
                <button className={styles.button}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Add meal</span>
                </button>
            </div>
        </div>
    )
}
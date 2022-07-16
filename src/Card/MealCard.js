import styles from '../styles/mealCard.module.css'

export const MealCard = ({title, area, category, instructions, src, tags}) => {
    
    return(
        <div className={styles.mealCard}>
           <img className={styles.img} src={src}></img>
           <div className={styles.information}>
                <p className={styles.title}>{title}</p>
                <div className={styles.tags}>
                    {tags?.split(',')?.map(tag => <p className={styles.tag}>{tag}</p>)}
                </div>
                <p className={styles.instructions}>{instructions}</p>

           </div>
        </div>
    )

}
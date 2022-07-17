import styles from '../styles/menuNav.module.css'

export const MenuNav = () => {
    return(
        <ul className={`${styles.navbar}`}>
            <div className={`container ${styles.navbarItems}`}>
                <li className={styles.navItem} >12 Random</li>
                <li className={styles.navItem} >Search by country</li>
                <li className={styles.navItem} >Search</li>
            </div>
        </ul>
    )

}
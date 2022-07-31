import { useState } from 'react'
import styles from '../styles/menuNav.module.css'
import { DropDown } from './UI/DropDown'


export const MenuNav = () => {
    const [current, setCurrnet] = useState('Random')


    return(
        <ul className={`${styles.navbar}`}>
            <div className={`container ${styles.navbarItems}`}>
                
                <li  className={`${styles.navItem} ${current=='Random'? styles.active: ''}`} >Random</li>
                <DropDown placeHolder={'Find by Area'}/>
                <DropDown placeHolder={'Find by Category'}/>
            </div>
        </ul>
    )

}
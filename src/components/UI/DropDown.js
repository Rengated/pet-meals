import styles from '../../styles/dropDown.module.css'
 
import { useState } from 'react';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

export const DropDown = ({placeHolder}) => {
   
    
    return(
        <div className={styles.dropDown}>
            <div className={styles.placeHolder}>
                <p className={styles.title}>{placeHolder}</p>
                <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>
    )
}
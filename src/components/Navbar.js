import { useEffect, useState } from 'react';
 
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {routes} from '../helpers/routes'
import styles from '../styles/navbar.module.css'



export const Navbar = () => {
    const location = useLocation();
    


    const isActiveLink = (path) => {
        if (path === location.pathname){
            return true
        }
        return false

    }
    const renderRoutes = () => {
        return routes.map(route => <Link 
                                    className={`${styles.link} ${isActiveLink(route.path)? styles.active : ''}`}
                                    key={route.name} 
                                    to={route.path}
                                    >
                                        {route.name}
                                    </Link>)
        };
   

    return(
        <header>
            <nav className={styles.navbar}>
                {renderRoutes()}
            </nav>
            <i className="cart fa-solid fa-cart-shopping">({localStorage.length})</i>
        </header>
    )
}
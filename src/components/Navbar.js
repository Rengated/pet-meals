import { Link } from 'react-router-dom';
import {routes} from '../helpers/routes'


const renderRoutes = () => {
    return routes.map(route => <Link key={route.name} to={route.path}>{route.name}</Link>)
    };


export const Navbar = () => {
    return(
        <nav>
            {renderRoutes()}
        </nav>
    )
}
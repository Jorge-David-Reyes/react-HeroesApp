import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';

export const PrivateRoute = ({children}) => {
    const { logged } = useContext(AuthContext);

    //Dedemos tener cuidado con el uso de useLocation, 
    // para recordar la ruta anterior accedia al hacer Login, 
    // por que es posible ue se reenderizen algunos componentes, 
    // como en el caso de la busqueda de algun superheroe

    const {pathname, search } = useLocation();

    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath);

    return (logged)
        ? children
        : <Navigate to="/login" />
}

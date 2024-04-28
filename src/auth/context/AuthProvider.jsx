import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types';

// Esto es el estado inicial de la aplicación
// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user, // '!!' convierte un valor a booleano, si user es null, logged será false, si user no es null, logged será true
    user: user,
  }
}

// Esta función es un componente que envuelve a todos los componentes que estén dentro de él
export const AuthProvider = ({ children }) => {

  // useReducer es un hook que permite manejar el estado de la aplicación
  const [authState, dispatch] = useReducer(authReducer, {}, init); // authState es el estado de la aplicación y dispatch es una función que permite enviar acciones al reducer

  const login = ( name = '' ) => {

    const user = { id: 'ABC', name }
    const action = { type: types.login, payload: user }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login
    }}>
        {children} {/*Esto es para que todos los componentes que estén dentro de AuthProvider se rendericen */}
    </AuthContext.Provider>
  )
}

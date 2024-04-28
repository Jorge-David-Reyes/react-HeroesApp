import { types } from "../types/types";

// El estado inicial de la aplicación
const initialState = {
    logged: false,
}

// El reducer es una función pura que recibe el estado y una acción, y devuelve un nuevo estado.
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return { // Si la acción es login, se retorna un nuevo estado con logged en true y el nombre del usuario
                ...state,
                logged: true,
                user: action.payload // El nombre del usuario se obtiene del payload de la acción
            }
        case types.logout:
            return { // Si la acción es logout, se retorna un nuevo estado con logged en false
                logged: false
            }
        default:
            return state;
    }
}
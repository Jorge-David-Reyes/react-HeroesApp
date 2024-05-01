import { act } from "react";
import { authReducer, types } from "../../../src/auth";

describe('Pruebas en authReducer', () => { 
    const user = { id: 'ABC', name: 'Jorge' }

    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = { type: types.login, payload: user }
        const newState = authReducer({ logged: false }, action)
        expect(newState).toEqual({ logged: true, user: action.payload });
    });

    test('debe de hacer logout borrar el name del usuario y logged en false', () => {     
        const state = {
            logged: true,
            user: user
        }
        
        const action = { type: types.logout }
        const newState = authReducer(state, action)
        expect(newState).toEqual({ logged: false});
    });
});
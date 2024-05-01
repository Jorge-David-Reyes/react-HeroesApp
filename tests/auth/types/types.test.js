import {types} from "../../../src/auth/types/types"

describe('Pruebas en "Types"', () => {
    test('debe de regresar estos tyoes', () =>{
        expect(types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout'
        });
    });
});
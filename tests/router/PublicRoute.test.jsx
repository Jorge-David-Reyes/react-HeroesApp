import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Pruebas en <PublicRoute />>', () => {
    test('debe de mostrar el children si no esta autenticado', () => {
        const contextValue = {
            logged: false,
        };
    
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
    
        expect(screen.getByText('Ruta Publica')).toBeTruthy();
    });

    test('debe de navegar si esta autenticado', () => {
        
    });
});
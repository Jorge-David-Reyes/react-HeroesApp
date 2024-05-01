import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

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
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        };
    
        render(
            // MemoryRouter es un componente que nos permite simular el comportamiento de un Router
            // sin necesidad de tener un navegador

            // initialEntries es una propiedad que nos permite definir la ruta inicial
            // que se va a renderizar

            // Routes es un componente que nos permite definir las rutas de nuestra aplicación
            // Route es un componente que nos permite definir una ruta en específico
            // path es una propiedad que nos permite definir la ruta que se va a renderizar

            // element es una propiedad que nos permite definir el componente que se va a renderizar
            // en la ruta definida

            // PublicRoute es un componente que nos permite definir una ruta pública
            // si el usuario no está autenticado

            // PrivateRoute es un componente que nos permite definir una ruta privada
            // si el usuario está autenticado
                <AuthContext.Provider value={ contextValue }>
                    <MemoryRouter initialEntries={['/login']}>

                        <Routes>
                            <Route path='login' element={
                                <PublicRoute>
                                    <h1>Ruta pública</h1>
                                </PublicRoute>
                            } />
                            <Route path='marvel' element={ <h1>Página Marvel</h1> } />
                        </Routes>

                        
                    </MemoryRouter>
                </AuthContext.Provider>
            );

            expect( screen.getByText('Página Marvel') ).toBeTruthy();
    });
});
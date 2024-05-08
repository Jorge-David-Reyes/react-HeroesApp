import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';
// import { AppRouter } from '../../src/router/AppRouter';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebass en el componente del <NavBar/>', () => {
    const contextValue = {
        logged: true,
        user: {
            id: 'abc',
            name: 'Juan Carlos'
        },
        logout: jest.fn(),
    }

    test('debe de mostrar el nombre del usuario', () =>{

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();

        // expect( screen.getByText(contextValue.user.name) ).toBeTruthy();
        expect( screen.getByText('Juan Carlos') ).toBeTruthy();
    });

    test('debe de llamar el logout y navogate cuando se hace click en el boton de logout', () =>{
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', { replace: true });
    });
})
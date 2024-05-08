import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

describe('Pruebas en <SearchPage />', () => { 
    test('debe de mostrarse correctamente con valores por defecto', () => {

        //tomar una instantanea de la pagina
        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();

        // screen.debug();
    });
 })
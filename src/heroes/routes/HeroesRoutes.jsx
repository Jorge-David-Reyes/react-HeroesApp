import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} /> 

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} /> {/* Esto sirve para que el componente HeroPage reciba el id del heroe que se quiere ver */}

                <Route path="/" element={<Navigate to="/marvel"/>} />   
            </Routes> 
        </div>
    </>
  )
}



import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/home';
import { Proyectos } from './Components/ProyectosDetalles/proyecto';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="home" />
                <Route element={<Proyectos />} path="proyect/:id" />

                <Route path="" element={<Navigate to="/home" />}></Route>{/* por defecto me lleva al home */}
                <Route path="*" element={<Navigate to="/home" />}></Route>{/* por defecto me lleva al home */}
            </Routes>
        </BrowserRouter>
    );
}
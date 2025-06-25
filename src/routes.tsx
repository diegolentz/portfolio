

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/home';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="home"></Route>
                {/* <Route element={<Proyect/>} path="proyect"></Route> */}

                <Route path="" element={<Navigate to="/home" />}></Route>{/* por defecto me lleva al home */}
                <Route path="*" element={<Navigate to="/home" />}></Route>{/* por defecto me lleva al home */}
            </Routes>
        </BrowserRouter>
    );
}
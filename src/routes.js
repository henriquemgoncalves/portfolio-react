import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './Pages/PaginaInicial';
import Projetos from './Pages/Projetos';
import Sobre from './Pages/SobreMim';

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaInicial/>}></Route>
            <Route path='/projetos' element={<Projetos/>}></Route>
            <Route path='/sobremim' element={<Sobre/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
import { Router,Routes,Route, BrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio.jsx";
import InicioSesion from "../pages/InicioSesion/InicioSesion.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Registro from "../pages/Registro/Registro.jsx";
import Publicaciones from "../pages/Publicaciones/Publicaciones.jsx";
import MisPublic from '../pages/MisPublic/mispublic.jsx';
import MisComunidades from "../pages/MisComunidades/MisComunidades.jsx";
import Perfil from "../pages/Perfil/Perfil.jsx";


function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/inicioSesion" element={<InicioSesion />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/publicaciones" element={<Publicaciones />} />
                <Route path="/Perfil" element={<Perfil />} />
                <Route path="/mispublic" element={<MisPublic />} />
                <Route path="/MisComunidades" element={<MisComunidades />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter;
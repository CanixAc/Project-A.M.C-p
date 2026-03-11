import { Router,Routes,Route, BrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio.jsx";
import InicioSesion from "../pages/InicioSesion/InicioSesion.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Registro from "../pages/Registro/Registro.jsx";
import Publicaciones from "../pages/Publicaciones/Publicaciones.jsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/inicioSesion" element={<InicioSesion />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/publicaciones" element={<Publicaciones />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter;
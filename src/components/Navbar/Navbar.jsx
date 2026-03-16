import "./Navbar.css"
import Logo from "../../assets/img/logo1.jpg"
import { useEffect } from "react";

const Navbar = () => {
  const sesionActiva = localStorage.getItem('isLoggedIn') === 'true';
    
  return (
    
    <header>
      <img src={Logo} alt="Logo de Project A.M.C" className="logo" />

      <nav>
        <ul>
          {!sesionActiva && (
            <>
              <li><a href="/">Inicio</a></li>
              <li><a href="/inicioSesion">Iniciar Sesión</a></li>
              <li><a href="/registro">Registrarse</a></li>
              <li><a href="/publicaciones">Ver las publicaciones de la comunidad</a></li>
            </>
          )}
          {sesionActiva && (
            <>
                <li><a href="/perfil">Perfil</a></li>
                <li><a href="/publicaciones">Ver las publicaciones de la comunidad</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
  
};

export default Navbar;
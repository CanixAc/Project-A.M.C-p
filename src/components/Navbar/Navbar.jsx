import "./Navbar.css"
import Logo from "../../assets/img/logo1.jpg"

const Navbar = () => {
  const sesionActiva = localStorage.getItem('isLoggedIn') === 'true';

 if (!sesionActiva) {
    return (
     <div>
            <header>
               <img src={Logo} alt="Logo de Project A.M.C" className="logo" />
                <nav>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/inicioSesion">Iniciar Sesión</a></li>
                        <li><a href="/registro">Registrarse</a></li>
                        <li><a href="/publicaciones">Ver las publicaciones de la comunidad</a></li>
                    </ul>
                </nav>
            </header>  
        </div>
    );
  }

  return (
  <div>
            <header>
               <img src={Logo} alt="Logo de Project A.M.C" className="logo" />
                <nav>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/publicaciones">Ver las publicaciones de la comunidad</a></li>
                    </ul>
                </nav>
            </header>  
        </div>
  );
};

export default Navbar
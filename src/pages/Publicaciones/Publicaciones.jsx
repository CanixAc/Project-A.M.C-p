import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Publicaciones.css';

const Publicaciones = () => {
  const navigate = useNavigate();
  const sesionActiva = localStorage.getItem('isLoggedIn') === 'true';

  const cerrarSesion = () => {
  localStorage.removeItem('isLoggedIn');

  // 👇 actualizar navbar
  window.dispatchEvent(new Event('storage'));

  alert("¡Has cerrado sesión!");
  navigate('/');
};

  if (!sesionActiva) {
    return (
      <div className="acceso-denegado">
        <h2>🔐 Acceso Denegado</h2>
        <p>Inicia sesión o regístrate para ver las publicaciones de la comunidad.</p>
        <div className="links-acceso">
          <Link to="/inicioSesion" className="link-auth">Inicia Sesión</Link>
          <Link to="/registro" className="link-auth">Regístrate</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="publicaciones-container">
      <button onClick={cerrarSesion} className="btn-cerrar">
        Cerrar Sesión
      </button>
      
      <h1>Publicaciones</h1>
      
      <div className="post-card">
        <h3>Post de la comunidad</h3>
        <p>Contenido visible solo para usuarios logueados.</p>
      </div>
    </div>
  );
};

export default Publicaciones;
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MisComunidades.css';

const MisComunidades = () => {
  const navigate = useNavigate();
  const sesionActiva = localStorage.getItem('isLoggedIn') === 'true';

  // 👇 actualizar navbar
  window.dispatchEvent(new Event('storage'));


  return (
    <div className="MisComunidades-container">
      
      <h1>Mis comunidades</h1>
      
      <div className="post-card">
        <h3>Comunidades a las que pertenezco</h3>
        <p>Contenido visible solo para usuarios logueados.</p>
      </div>
    </div>
  );
};

export default MisComunidades;
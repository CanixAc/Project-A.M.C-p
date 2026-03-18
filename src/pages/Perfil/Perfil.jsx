import React from 'react';
import './Perfil.css';
import perfilImg from '../../assets/img/Perfil.png'; // Asegúrate de que la ruta sea correcta

const HomePage = () => {

  const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

  return (
    <div>
      <section className="perfil-section">
        <img src={perfilImg} alt="Icono de usuario" />
           <div className="perfil-info">
          <h2>
            Bienvenido, {usuarioGuardado ? usuarioGuardado.nombre : "Usuario"}!
          </h2>
     
          <button className="editar-perfil-button">Editar perfil</button>  
        
          
        </div>
      </section>
          <div className="perfil-container">
          <Link to="/mis-publicaciones" className="ver-publicaciones-link">
        <button className="ver-publicaciones">Ver tus publicaciones</button>
    </Link>
            <button className="ver-publicaciones">Ver tus publicaciones</button>

            <button className="ver-comunidades">Ver tus comunidades</button>
          </div>
    </div>
  );
};

export default HomePage;
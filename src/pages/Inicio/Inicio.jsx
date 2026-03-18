import React from 'react';
import './Inicio.css';

const HomePage = () => {

  const sesionActiva = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div>
      {!sesionActiva ? (
        <>
          <br />
          <h1>Bienvenido a Project A.M.C!!!</h1>
          <p>
            En este sitio web podrás interactuar con las publicaciones de otros usuarios,
            hacer tus propias publicaciones y más!!
          </p>

          <section id="cards-section" className="cards-section">
            <h2>Nuestros Servicios</h2>

            <div className="cards-container">

              <div className="card">
                <div className="card-icon">👜</div>
                <h3>Regístrate</h3>
                <p>Crea una cuenta para empezar a compartir tus ideas y proyectos.</p>
                <a href="/registro" className="card-btn">Regístrate</a>
              </div>

              <div className="card">
                <div className="card-icon">🚀</div>
                <h3>Inicia Sesión</h3>
                <p>Accede a tu cuenta para gestionar tus publicaciones.</p>
                <a href="/inicioSesion" className="card-btn">Inicia Sesión</a>
              </div>

              <div className="card">
                <div className="card-icon">🔐</div>
                <h3>Explora la Comunidad</h3>
                <p>Descubre publicaciones de otros usuarios.</p>
                <a href="#" className="card-btn">Ver Publicaciones</a>
              </div>

            </div>
          </section>
        </>
      ) : (
        <>
          <br />
          <h1>Bienvenido a Project A.M.C!!!</h1>

          <p>
            En este sitio web podrás interactuar con publicaciones de otros usuarios.
          </p>

          <section id="cards-section" className="cards-section">
            <h2>Nuestros Servicios</h2>

            <div className="cards-container">

              <div className="card">
                <div className="card-icon">🔐</div>
                <h3>Explora la Comunidad</h3>
                <p>Descubre publicaciones de otros usuarios.</p>
                <a href="#" className="card-btn">Ver Publicaciones</a>
              </div>

            </div>
          </section>
        </>
      )}
    </div>
  );
}
export default HomePage;
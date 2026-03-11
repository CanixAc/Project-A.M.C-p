import React from 'react';
import './Inicio.css';
const HomePage = () => {
  return (
    // React necesita un elemento padre o un Fragmento (<> ... </>)
    <div>
      
      <br />
      <h1> Bienvenido a Project A.M.C!!!</h1>
      <p>
        En este sitio web podrás interactuar con las publicaciones de otros usuarios, hacer tus propias publicaciones
        y más!!
      </p>

      <section id="cards-section" className="cards-section">
        <h2> Nuestros Servicios </h2>
        <div className="cards-container">
          {/* Tarjeta 1 */}
          <div className="card">
            <div className="card-icon">👜</div>
            <h3>Regístrate</h3>
            <p>Crea una cuenta para empezar a compartir tus ideas y proyectos con la comunidad.</p>
            <a href="/registro" className="card-btn">Regístrate</a>
          </div>

          {/* Tarjeta 2 */}
          <div className="card">
            <div className="card-icon">🚀</div>
            <h3>Inicia Sesión</h3>
            <p>Accede a tu cuenta para gestionar tus publicaciones y conectar con otros usuarios.</p>
            <a href="/inicioSesion" className="card-btn">Inicia Sesión</a>
          </div>

          {/* Tarjeta 3 */}
          <div className="card">
            <div className="card-icon">🔐</div>
            <h3>Explora la Comunidad</h3>
            <p>Descubre las publicaciones de otros usuarios y encuentra inspiración para tus propios proyectos.</p>
            <a href="#" className="card-btn">Ver Publicaciones</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
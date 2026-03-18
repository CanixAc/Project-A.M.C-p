import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InicioSesion.css';

const LoginPage = () => {
  const [identificador, setIdentificador] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

  if (usuarioGuardado && 
     (identificador === usuarioGuardado.usuario || identificador === usuarioGuardado.correo) && 
     contrasena === usuarioGuardado.contrasena) {
    
    localStorage.setItem('isLoggedIn', 'true');

    // 👇 FORZAR ACTUALIZACIÓN DE NAVBAR
    window.dispatchEvent(new Event('storage'));

    alert("¡Iniciaste sesión con éxito!");
    navigate('/');
  } else {
    alert("Datos incorrectos");
  }
};
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>Inicia Sesión:</h1>
      <div className="inicioSesion">
        <form onSubmit={handleSubmit}>
          <label>Usuario o Correo:</label>
          <br />
          <input 
            type="text" 
            value={identificador}
            onChange={(e) => setIdentificador(e.target.value)}
            required 
            style={{ width: '160px' }} 
          />
          <br />
          <label>Contraseña:</label>
          <br />
          <input 
            type="password" 
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required 
            style={{ width: '160px' }}
          />
          <br />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
import React, { useState } from 'react'; // Importamos useState para los campos
import { useNavigate } from 'react-router-dom'; // Para redirigir al Login
import './Registro.css';

const RegistroPage = () => {
  // 1. Creamos los "estados" para capturar lo que escribes
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  
  const navigate = useNavigate();

  // 2. Función que se ejecuta al darle clic al botón
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Creamos el objeto con los datos
    const datosUsuario = {
      nombre,
      usuario,
      correo,
      contrasena
    };

    // 3. Guardamos en LocalStorage (convertido a texto con JSON.stringify)
    localStorage.setItem('usuarioRegistrado', JSON.stringify(datosUsuario));

    alert('¡Registro exitoso! Ya estás en el LocalStorage.');
    
    // Redirigimos al inicio de sesión
    navigate('/inicioSesion');
  };

  return (
    <div>
      

      <h1 className="registroTitulo">Regístrate!!</h1>
      <p> Para poder crear, leer, actualizar y borrar tus propias publicaciones.</p> <br />
      
      <div className="registro">
        {/* Cambiamos el 'action' por nuestro 'onSubmit' */}
        <form onSubmit={manejarEnvio}>
          
          <label htmlFor="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
          <br />
          
          <label htmlFor="usuario">Usuario:</label>
          <input 
            type="text" 
            id="usuario" 
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)} 
            required 
          />
          <br />
          
          <label htmlFor="correo">Correo electrónico:</label>
          <input 
            type="text" 
            id="correo" 
            value={correo}
            onChange={(e) => setCorreo(e.target.value)} 
            required 
          />
          <br />
          
          <label htmlFor="contrasena">Contraseña:</label>
          <input 
            type="password" 
            id="contrasena" 
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)} 
            required 
          />
          <br /> <br />
          
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default RegistroPage;
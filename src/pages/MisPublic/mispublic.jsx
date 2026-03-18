import React, { useState, useEffect } from 'react';
import './mispublic.css';

const MisPublic = () => {
  const [posts, setPosts] = useState([]);
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevoContenido, setNuevoContenido] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  // Cargar publicaciones al iniciar
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('mis_publicaciones')) || [];
    setPosts(guardados);
  }, []);

  // Guardar en localStorage cada vez que cambien los posts
  useEffect(() => {
    localStorage.setItem('mis_publicaciones', JSON.stringify(posts));
  }, [posts]);

  const manejarPublicar = (e) => {
    e.preventDefault();
    if (!nuevoTitulo.trim() || !nuevoContenido.trim()) return;

    if (editandoId !== null) {
      // Editar post existente
      setPosts(posts.map(p => p.id === editandoId 
        ? { ...p, titulo: nuevoTitulo, contenido: nuevoContenido } 
        : p));
      setEditandoId(null);
    } else {
      // Crear nuevo post
      const nuevoPost = {
        id: Date.now(),
        titulo: nuevoTitulo,
        contenido: nuevoContenido,
        fecha: new Date().toLocaleDateString()
      };
      setPosts([nuevoPost, ...posts]);
    }

    setNuevoTitulo('');
    setNuevoContenido('');
  };

  const eliminarPost = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta publicación?")) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const prepararEdicion = (post) => {
    setEditandoId(post.id);
    setNuevoTitulo(post.titulo);
    setNuevoContenido(post.contenido);
    window.scrollTo(0, 0);
  };

  return (
    <div className="publicaciones-container">
      <h1>Tus Publicaciones</h1>

      {/* Formulario para Añadir/Editar */}
      <form onSubmit={manejarPublicar} className="form-publicar">
        <h3>{editandoId ? 'Editar Publicación' : 'Crear Nueva Publicación'}</h3>
        <input 
          type="text" 
          placeholder="Título..." 
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
        <textarea 
          placeholder="¿Qué estás pensando?" 
          value={nuevoContenido}
          onChange={(e) => setNuevoContenido(e.target.value)}
        />
        <button type="submit" className="btn-publicar">
          {editandoId ? 'Guardar Cambios' : 'Publicar Ahora'}
        </button>
        {editandoId && (
          <button onClick={() => {setEditandoId(null); setNuevoTitulo(''); setNuevoContenido('');}} className="btn-cancelar">
            Cancelar
          </button>
        )}
      </form>

      <hr />

      {/* Lista de Publicaciones */}
      <div className="lista-posts">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <h3>{post.titulo}</h3>
                <div className="post-acciones">
                  <button onClick={() => prepararEdicion(post)} className="btn-edit">✏️</button>
                  <button onClick={() => eliminarPost(post.id)} className="btn-delete">🗑️</button>
                </div>
              </div>
              <p>{post.contenido}</p>
              <small className="post-fecha">Publicado el: {post.fecha}</small>
            </div>
          ))
        ) : (
          <div className="sin-publicaciones">
            <p>No tienes publicaciones todavía. ¡Escribe la primera arriba!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MisPublic;
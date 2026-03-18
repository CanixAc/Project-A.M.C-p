import Swal from "sweetalert2";
import "./Inicio_Sesion.css";
// Solo exportamos las funciones que disparan la alerta
export const Alerta_Bien = async () => {
  return await Swal.fire({
    title: '¡Bienvenido!',
    text: 'Sesión iniciada correctamente',
    icon: 'success',
    confirmButtonText: 'Continuar'
  });
};

export const Alerta_Mal = () => {
  Swal.fire({
    title: 'Error',
    text: 'Usuario o contraseña incorrectos',
    icon: 'error',
    confirmButtonText: 'Reintentar'
  });
};

export default { Alerta_Bien, Alerta_Mal }; // Exportamos una función por defecto para mantener compatibilidad con imports anteriores
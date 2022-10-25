import React from 'react'
import { Link } from "react-router-dom";
import Regi from '../imagenes/DM&.png';

const Registro = () => {
  return (
    <div className="contenedor-registro" >
      <form class="registro-from">
        <img src={Regi} alt="User-login" />
        <p class="text"> Inscribirse</p>
        <input type="text" placeholder="Nombre"></input>
        <input type="text" placeholder="Apellidos"></input>
        <input type="Email" placeholder="Correo Electronico"></input>
        <input type="password" placeholder="Contraseña"></input>
        <button>INSCRIBIRSE</button>
        <p>Al registrarte, aceptas nuestras
          Condiciones de uso y politicas de privacidad
        </p>
        <p>¿Ya tienes una cuenta? <Link to="/"> Iniciar Sesión </Link></p>
      </form>
    </div>
  )
}

export default Registro
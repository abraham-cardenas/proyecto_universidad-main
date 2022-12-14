import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import {
  NavbarBrand
} from 'reactstrap';
import Regi from '../imagenes/DM&.png';

const Sidebar = () => {
  return (

    <div className="sidebar bg-blue shadow-sm p-0 mb-6 rounded">
      <div className=" shadow-sm p-1 mb-1 rounded">
        <NavbarBrand href="/"> <img src={Regi} alt="User-login" className='img-responsive' /></NavbarBrand>
      </div>
      <ul>
        <li>
          <NavLink to="/" exact className="text-dark  rounded py-2 w-100  d-inline-block px-3"
            activeclassname="active"><FaIcons.FaHome className="me-2" /> Principal </NavLink>
        </li>
        <p > <strong>Creacion Usuarios</strong></p>
        <li>
          <NavLink to="Usuarios" exact className="text-dark rounded py-2 w-100  d-inline-block px-3"
            activeclassname="active"><FaIcons.FaUserPlus className="me-2" /> Usuarios</NavLink>
        </li>
        <li>
          <NavLink to="vehiculos" exact className="text-dark rounded py-2 w-100  d-inline-block px-3"
            activeclassname="active"><FaIcons.FaUserPlus className="me-2" />Vehiculos</NavLink>
        </li>
        <li>
          <NavLink to="empresas" exact className="text-dark rounded py-2 w-100  d-inline-block px-3"
            activeclassname="active"><FaIcons.FaUserPlus className="me-2" />Empresas</NavLink>
        </li>
        <p > <strong>Consulta de Vehiculos</strong></p>
        <li>
          <NavLink to="CreacionEmpresa" exact className="text-dark rounded py-2 w-100 d-inline-block  px-3"
            activeclassname="active"><FaIcons.FaCarAlt className="me-2" />Creacion Empresa</NavLink>
        </li>
        <li>
          <NavLink to="CreacionVehiculos" exact className="text-dark rounded py-2 w-100 d-inline-block  px-3"
            activeclassname="active"><FaIcons.FaCarAlt className="me-2" />Creacion de Vehiculos</NavLink>
        </li>
        <li>
          <NavLink to="Mapa" exact className="text-dark rounded py-2 w-100  d-inline-block px-3"
            activeclassname="active"> <FaIcons.FaMapMarkedAlt className="me-2" />Mapa</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
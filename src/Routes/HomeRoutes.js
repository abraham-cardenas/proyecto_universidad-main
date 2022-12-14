import { Navigate, Route, Routes } from 'react-router-dom';
import NavbarNav from '../components/NavbarNav';
import Sidebar from '../components/Sidebar';
import { Home } from '../pages/Home';
import { Usuarios } from '../pages/Usuarios';
import { CreacionVehiculos } from '../pages/Creacionvehiculos'
import {CreacionEmpresa} from '../pages/CreacionEmpresa'
import Registro from '../components/Registro.js'
import {Conductores } from '../pages/Vehiculos';
import { Empresas } from '../pages/Empresas';
import { Mapa } from '../pages/Mapa';


export const HomeRoutes = () => {
  return (
    <div className='app'>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <NavbarNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Registros' element={<Registro />} />
            <Route path='Usuarios' element={<Usuarios />} />
            <Route path='Vehiculos' element={<Conductores />} />
            <Route path='empresas' element={<Empresas />} />
            <Route path='CreacionEmpresa' element={<CreacionEmpresa />} />
            <Route path='CreacionVehiculos' element={<CreacionVehiculos />} />
            <Route path='Mapa' element={<Mapa/>} />
            <Route path='/*' element={<Navigate to='/' />} />

          </Routes>
        </div>
      </div>
    </div>

  )
}

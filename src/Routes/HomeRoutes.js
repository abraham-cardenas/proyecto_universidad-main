import { Navigate, Route, Routes } from 'react-router-dom';
import NavbarNav from '../components/NavbarNav';
import Sidebar from '../components/Sidebar';
import { Home } from '../pages/Home';
import { Usuarios } from '../pages/Usuarios';
import { CreacionVehiculos } from '../pages/Creacionvehiculos'
import ReportesRutas from '../pages/ReportesRutas'
import Informes from '../pages/Informes'
import Registro from '../components/Registro.js'
import { Vehiculos } from '../pages/Vehiculos';
import { Empresas } from '../pages/Empresas';


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
            <Route path='Vehiculos' element={<Vehiculos />} />
            <Route path='empresas' element={<Empresas />} />
            <Route path='CreacionVehiculos' element={<CreacionVehiculos />} />
            <Route path='ReportesRutas' element={<ReportesRutas />} />
            <Route path='Informes' element={<Informes />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </div>
    </div>

  )
}

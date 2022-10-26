import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useVehiclesStore } from '../hooks/useVehiclesStore'


export const Usuarios= () => {

  const { startLoadingVehicles, vehiculos } = useVehiclesStore();


  useEffect(() => {
    startLoadingVehicles();


  }, [])

  return (
    <div className='Container w-100 p-3'>
      <Table>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Clave</th>
            <th>IdTipoUsuario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              vehiculos.map(vehiculo => (
                <>
                  <th scope="row">{vehiculo.Id}</th>
                  <td>{vehiculo.Nombres}</td>
                  <td>{vehiculo.Apellidos}</td>
                  <td>{vehiculo.clave}</td>
                  <td>{vehiculo.IdtipoUsuario}</td>
                </>

              ))
            }


          </tr>

        </tbody>
      </Table>
    </div>
  );
}
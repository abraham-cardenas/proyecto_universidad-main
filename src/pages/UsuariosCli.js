import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useVehiclesStore } from '../hooks/useVehiclesStore'

export const UsuariosCli = () => {

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
            <th>Razón Social</th>
            <th>Nit</th>
            <th>Municipio</th>
            <th>Zona</th>
            <th>Dirección</th>
            <th>Barrio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              vehiculos.map(vehiculo => (
                <>
                  <th scope="row">{vehiculo.Id}</th>
                  <td>{vehiculo.RazónSocial}</td>
                  <td>{vehiculo.Nit}</td>
                  <td>{vehiculo.Municipio}</td>
                  <td>{vehiculo.Zona}</td>
                  <td>{vehiculo.Direccion}</td>
                  <td>{vehiculo.Barrio}</td>
                </>

              ))
            }


          </tr>

        </tbody>
      </Table>
    </div>
  );

}
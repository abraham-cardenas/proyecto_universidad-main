import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useVehiclesStore } from '../hooks/useVehiclesStore'

export const Vehiculos = () => {

  const { startLoadingVehicles, vehiculos } = useVehiclesStore();


  useEffect(() => {
    startLoadingVehicles();


  }, [])


  return (
    <div className='Container w-100 p-3'>
      <Table>
        <thead>
          <tr>
            <th>#Marca</th>
            <th>nombre</th>
            <th>apellidos</th>
            <th>Disponibilidad</th>
            <th>Total de los pedidos</th>
            <th>Costo por desplazamiento</th>
            <th>Estado</th>

          </tr>
        </thead>
        <tbody>
          {
            vehiculos.map(vehiculo => (
              <tr>
                <>
                  <th scope="row">{vehiculo.marca}</th>
                  <td>{vehiculo.nombre}</td>
                  <td>{vehiculo.apellidos}</td>
                  <td>{vehiculo.promediopedido}</td>
                  <td>{vehiculo.costodiario}</td>
                  <td>{vehiculo.disponibilidad}</td>
                  <td>{vehiculo.estado}</td>
                </>



              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  );

}
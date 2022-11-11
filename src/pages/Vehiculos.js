import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useConductorStore } from '../hooks/useConductorStore'

export const Conductores = () => {

  const { startLoadingConductores
    , conductores } =  useConductorStore();


  useEffect(() => {
    startLoadingConductores();


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
            conductores.map(conductores => (
              <tr>
                <>
                  <th scope="row">{conductores.marca}</th>
                  <td>{conductores.nombre}</td>
                  <td>{conductores.apellidos}</td>
                  <td>{conductores.promedio}</td>
                  <td>{conductores.costo}</td>
                  <td>{conductores.disponibilidad}</td>
                  <td>{conductores.estado}</td>
                </>



              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  );

}
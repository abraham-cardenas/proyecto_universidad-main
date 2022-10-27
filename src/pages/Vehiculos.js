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
                        <th>Modelo</th>
                        <th>Inventario</th>
                        <th>Estado</th>

                    </tr>
                </thead>
                <tbody>
                        {
                            vehiculos.map(vehiculo => (
                    <tr>
                                <>
                                    <th scope="row">{vehiculo.marca}</th>
                                    <td>{vehiculo.modelo}</td>
                                    <td>{vehiculo.inventario}</td>
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
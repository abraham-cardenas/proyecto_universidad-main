import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { useEmpresaStore } from '../hooks/useEmpresaStore';

export const Empresas = () => {

    const { startLoadingEmpresas, empresas } = useEmpresaStore();


    useEffect(() => {
        startLoadingEmpresas();


    }, [])


    return (
        <div className='Container w-100 p-3'>
            <Table>
                <thead>
                    <tr>
                        <th>#nombre</th>
                        <th>Nit</th>
                        <th>Municipio</th>
                        <th>Zona</th>
                        <th>Direccion</th>
                        <th>Barrio</th>

                    </tr>
                </thead>
                <tbody>
                        {
                            empresas.map(empresa => (
                    <tr>
                                <>
                                    <th scope="row">{empresa.nombre}</th>
                                    <td>{empresa.nit}</td>
                                    <td>{empresa.municipio}</td>
                                    <td>{empresa.zona}</td>
                                    <td>{empresa.direccion}</td>
                                    <td>{empresa.barrio}</td>
                                </>



                    </tr>
                            ))
                        }
                   
                </tbody>
            </Table>
        </div>
    );

}
import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { EmpresaModal } from '../components/EmpresaModal';
import { useEmpresaStore } from '../hooks/useEmpresaStore';
import { useUiStore } from '../hooks/useUiStore';

export const Empresas = () => {

  const {
    startLoadingEmpresas,
    empresas,
    startDeletingEmpresa,
    setActiveEmpresa } = useEmpresaStore();


  useEffect(() => {
    startLoadingEmpresas();

  }, [])

  const { openDateModal } = useUiStore();


  const onSelect = (empresa) => {
    setActiveEmpresa(empresa);
    openDateModal();


  };

  const onSelectDelete = async (empresa) => {
    setActiveEmpresa(empresa);
    await startDeletingEmpresa(empresa)
  }





  return (
    <div id='root' className='Container w-100 p-3'>
      <EmpresaModal />
      <Table>
        <thead>
          <tr>
            <th>#Nombre</th>
            <th>Nit</th>
            <th>Municipio</th>
            <th>Zona</th>
            <th>Direccion</th>
            <th>Barrio</th>
            <th>TotalPedido</th>

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
                  <td>{empresa.totalpedido}</td>
                </>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-primary me-md-1" type="button" onClick={() => onSelectDelete(empresa)} > Deshabilitar </button>
                  <button class="btn btn-primary" type="button"  onClick={() => onSelect(empresa)}>Editar</button>
                </div>


              </tr>
            ))
          }

        </tbody>
      </Table>
    </div>
  );

}
import { Table } from 'reactstrap';



export const Usuarios= () => {



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
        </tbody>
      </Table>
    </div>
  );
}
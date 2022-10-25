import React from 'react';
import { Table } from 'reactstrap';

export default class Usuarios extends React.Component {
  render() {
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
            <th scope="row">0</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>@mdo</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}
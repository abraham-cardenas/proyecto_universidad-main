import React from 'react';
import { Input } from 'reactstrap';

export const Home = () => {
  return (
    <div className='container p-3 bg-blue'>
      <form class="row g-3" name='rest'>
        <h3 className='p-1 m-1'>
          FUNCION OBJETIVO...........
        </h3> 
        <div class="row form-group g-3">
          <div class="col-md-1 form-group">
          <p className='m-1 p-1'> F(x,y)=</p>
            <Input type='text' name='fx' size={3} placeholder="x"></Input>
            +
            <Input type='text' name='fy' size={3} placeholder="y"></Input>
          </div>
        </div>
        <p1>RESTRICCIONES</p1>
        <div class="row g-3">
          <div class="col-md-2 m-1">
          <p class="m-0 p-0 text-center">Van N300</p>
          <p class="m-0 p-0 text-center">X1</p>
          <div class="form-group">
          X1...<Input type='text' placeholder="0" size={3}>x</Input>
          <Input  type='text' placeholder="0" size={3}>y</Input>
          </div>
          </div>
          <div class="col-md-2 m-1">
          <select type='text' name='r1'>
            <option selected>....</option>
            <option> Mayor igual</option>
            <option>Menor igual</option>
            <option>Menor</option>
            <option>Mayor</option>
          </select>
          </div>
          <div class="col-md-2 m-1 ">
          <Input type='text' placeholder="0" size={3}></Input>        
          </div>
        </div>
      </form>
    </div>
  );
}

import React from 'react';
import { Input } from 'reactstrap';

export const Home = () => {
  return (
    <div className='container p-3 bg-blue'>
      <form class="row g-3" name='rest'>
        <h3 className='p-1 m-1'>
          FUNCION OBJETIVO...........
        </h3>
        <p className='m-1 p-1'> F(x,y)</p>
        <div class="col-md-1 p-1 m-1">
          <p class="m-1">x</p>
          <Input type='text' name='fx' size={3}></Input>
        </div>
        <div class="col-md-1 p-1 m-1">
          <p class="m-1">y</p>
          <Input type='text' name='fx' size={3}>y</Input>
        </div>
        <p1>RESTRICCIONES</p1>
        <div class="col-md-1 p-1 m-1">
         <Input type='text' value={0} size={3}>x+</Input>
        </div>
        <div class="col-md-1 p-1 m-1">
          <Input type='text' value={0} size={3}>x+</Input>
        </div>
        <div class="col-md-1 p-1 m-1">
          <Input type='text' value={0} size={3}>x+</Input>
        </div>
        <div class="col-md-1 p-1 m-1">
          <Input type='text' value={0} size={3}>x+</Input>
        </div>
        <div class="col-md-1 p-1 m-1">
          <Input type='text' value={0} size={3}>x+</Input>
        </div>
      </form>
    </div>
  );
}

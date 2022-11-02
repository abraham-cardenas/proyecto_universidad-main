import React, { useState } from 'react';
import { Button, Label, Input } from 'reactstrap';
import { useEmpresaStore } from '../hooks/useEmpresaStore';
import { useForm } from '../hooks/useForm';

const EmpresaFormFields = {
    nombre: "",
    nit: "",
    municipio: "",
    zona: "",
    direccion: "",
    barrio: "",
    totalpedido:""
};

export const CreacionVehiculos = () => {

  const{StartSavingEmpresa}=useEmpresaStore();
  const{  nombre, nit, municipio, zona, direccion, barrio,totalpedido, onInputChange, formState}=useForm(EmpresaFormFields);
  

  const Createvehicle=async(event)=>{
    event.preventDefault();
    
    await StartSavingEmpresa(formState);
    

  }


  return (
    <div className='Container w-100 p-3 bg-blue'>
      <form class="row g-3" onSubmit={Createvehicle}>
        <h1 color=''> Consulta de Vehiculos </h1>
        <h3 > Datos de la Empresa</h3>
        <div class="col-md-5">
          <Label htmlFor="inputNombreEm" class="form-label">Nombre de la Empresa</Label>
          <Input 
            type="text" 
            aria-label="Zona" 
            class="form-control"
            name='nombre'
            value={nombre}
            onChange={onInputChange}
          ></Input>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputNit" class="form-label">Nit</Label>
          <Input 
            name='nit' 
            value={nit} 
            onChange={onInputChange}
            type="text" 
            aria-label="Nit" 
            class="form-control"></Input>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputMuni" class="form-label">Municipio</Label>
          <select
              id="inpuMunicipio" 
              name='municipio' 
              value={municipio}
              onChange={onInputChange}
              class="form-select"
              >
            <option selected>Selecciona el Municipio...</option>
            <option>Grirardot</option>
            <option>Mariquita</option>
            <option>Flandes</option>
          </select>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputzona" class="form-label">Zona</Label>
          <Input 
            type="text" 
            aria-label="Zona" 
            name='zona'
            value={zona}
            onChange={onInputChange}
            class="form-control"></Input>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputDireccion" class="form-label">Dirección</Label>
          <Input 
              name='direccion'
              value={direccion}
              onChange={onInputChange}
              type="text" 
              aria-label="Direccion" 
              class="form-control"></Input>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputBarri" class="form-label">Barrio</Label>
          <Input 
              name='barrio'
              value={barrio}
              onChange={onInputChange}
              type="text" 
              aria-label="Barrio" 
              class="form-control"></Input>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputPedido" class="form-label">Total Pedido</Label>
          <div class="input-group mb-6">
            <span class="input-group-text">$</span>
            <Input name='totalpedido'
              value={totalpedido}
              onChange={onInputChange}
              type="text" 
              aria-label="Total pedido" 
              class="form-control"></Input>
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <h3 > Datos del Conductor</h3>
        <div class="col-md-4">
          <Label htmlFor="inputVehiculo" class="form-label">Vehiculos</Label>
          <Input type="select" name="modelo" id="modelo" class='w-50'>
            <option>Seleccione un Vehiculo...</option>
            <option>Van N300</option>
            <option>Changan</option>
            <option>Chevrolet Luv</option>
            <option>NHR</option>
            <option>NKR</option>
          </Input>
        </div>
        <div class="col-md-4">
          <Label htmlFor="inputBarri" class="form-label">Nombre</Label>
          <Input type="text" aria-label="Nombre" class="form-control"></Input>
        </div>
        <div class="col-md-4">
          <Label htmlFor="inputBarri" class="form-label">Apellidos</Label>
          <Input type="text" aria-label="Apellidos" class="form-control"></Input>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputPedido" class="form-label">Promedio Pedido</Label>
          <div class="input-group mb-6">
            <span class="input-group-text">$</span>
            <Input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" ></Input>
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputPersona" class="form-label">Costo Diario de Movilizacion</Label>
          <div class="input-group mb-6">
            <span class="input-group-text">$</span>
            <Input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" ></Input>
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <div class="col-md-3">
          <Label htmlFor="inputState" class="form-label">Disponibilidad</Label>
          <select id="inputState" class="form-select">
            <option selected>...</option>
            <option>Si</option>
            <option>No</option>

          </select>
        </div>
        <div class="col-md-5">
          <label htmlFor="inputZip" class="form-label">Estado</label>
          <select id="inputState" class="form-select">
            <option selected>...</option>
            <option>Activo</option>
            <option>No se encuentra disponible</option>
            <option>Mantenimineto</option>
          </select>
        </div>
        <div class="col-12">
          <div class="form-check">
            <Input class="form-check-input" type="checkbox" id="gridCheck"></Input>
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <Button type="submit" class="btn btn-primary">Guardar</Button>
        </div>
      </form>
    </div>
  );
}


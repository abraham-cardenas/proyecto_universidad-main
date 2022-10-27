import React from 'react';
import { Button, Label, Input } from 'reactstrap';

export const CreacionVehiculos = () =>{
    return (
      <div className='Container w-100 p-3 bg-blue'>
        <form class="row g-3">
          <h1 color=''> Consulta de Vehiculos </h1>
          <h3 > Datos de la Empresa</h3>
          <div class="col-md-5">
            <Label htmlFor="inputNombreEm" class="form-label">Nombre de la Empresa</Label>
            <Input type="text" aria-label="Zona" class="form-control"></Input>
          </div>
          <div class="col-md-5">
            <Label htmlFor="inputNit" class="form-label">Nit</Label>
            <Input type="text" aria-label="Nit" class="form-control"></Input>
          </div>
          <div class="col-md-5">
            <Label htmlFor="inputMuni" class="form-label">Municipio</Label>
            <select id="inpuMunicipio" class="form-select">
              <option selected>Selecciona el Municipio...</option>
              <option>Grirardot</option>
              <option>Mariquita</option>
              <option>Flandes</option>
            </select>
          </div>
          <div class="col-md-5">
            <Label htmlFor="inputzona" class="form-label">Zona</Label>
            <Input type="text" aria-label="Zona" class="form-control"></Input>
          </div>
          <div class="col-md-5">
            <Label htmlFor="inputDireccion" class="form-label">Dirección</Label>
            <Input type="text" aria-label="Direccion" class="form-control"></Input>
          </div>
          <div class="col-md-5">
            <Label htmlFor="inputBarri" class="form-label">Barrio</Label>
            <Input type="text" aria-label="Barrio" class="form-control"></Input>
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


import { Button, Label, Input } from 'reactstrap';
import { useVehiclesStore } from '../hooks/useVehiclesStore';
import { useForm } from '../hooks/useForm';

const VehiculosFormFields = {
  marca: "",
  nombre: "",
  apellidos: "",
  promediopedido: "",
  costodiario: "",
  disponibilidad: "",
  estado: ""
};

export const CreacionVehiculos = () => {

  const { StartSavingVehicles } = useVehiclesStore();
  const { marca, nombre, apellidos, promediopedido, costodiario, disponibilidad, estado, onInputChange, formState } = useForm(VehiculosFormFields);

  const Createvehicle = async (event) => {
    event.preventDefault();

    await StartSavingVehicles(formState);


  }


  return (
    <div className='Container w-100 p-3 bg-blue'>
      <form class="row g-3" onSubmit={Createvehicle}>
        <h3 > Datos del Conductor</h3>
        <div class="col-md-4">
          <Label htmlFor="inputVehiculo" class="form-label">Vehiculos</Label>
          <select
            id="inpuMarca"
            name='marca'
            value={marca}
            onChange={onInputChange}
            class="form-select">
            <option>Seleccione un Vehiculo...</option>
            <option>Van N300</option>
            <option>Changan</option>
            <option>Chevrolet Luv</option>
            <option>NHR</option>
            <option>NKR</option>
          </select>
        </div>
        <div class="col-md-4">
          <Label htmlFor="inputBarri" class="form-label">Nombre</Label>
          <Input
            name='nombre'
            value={nombre}
            onChange={onInputChange}
            class="form-select"></Input>
        </div>
        <div class="col-md-4">
          <Label htmlFor="inputBarri" class="form-label">Apellidos</Label>
          <Input
            name='apellidos'
            value={apellidos}
            onChange={onInputChange}
            class="form-select"></Input>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputPedido" class="form-label">Promedio Pedido</Label>
          <div class="input-group mb-6">
            <span class="input-group-text">$</span>
            <Input
              name='promediopedido'
              value={promediopedido}
              onChange={onInputChange}
              class="form-select"></Input>
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <div class="col-md-5">
          <Label htmlFor="inputPersona" class="form-label">Costo Diario de Movilizacion</Label>
          <div class="input-group mb-6">
            <span class="input-group-text">$</span>
            <Input
              name='costodiario'
              value={costodiario}
              onChange={onInputChange}
              class="form-select" ></Input>
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <div class="col-md-3">
          <Label htmlFor="inputState" class="form-label">Disponibilidad</Label>
          <select
            name='disponibilidad'
            value={disponibilidad}
            onChange={onInputChange}
            class="form-select">
            <option selected>...</option>
            <option>Si</option>
            <option>No</option>

          </select>
        </div>
        <div class="col-md-5">
          <label htmlFor="inputZip" class="form-label">Estado</label>
          <select
            name='estado'
            value={estado}
            onChange={onInputChange}
            class="form-select">
            <option selected>...</option>
            <option>Activo</option>
            <option>No se encuentra disponible</option>
            <option>Mantenimineto</option>
          </select>
        </div>
        <div class="col-12">
          <Button type="submit" class="btn btn-primary">Guardar</Button>
        </div>
      </form>
    </div>
  );
}


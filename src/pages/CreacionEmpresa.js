import { useEmpresaStore } from '../hooks/useEmpresaStore';
import { useForm } from '../hooks/useForm';

const EmpresaFormFields = {
    nombre: "",
    nit: "",
    municipio: "",
    zona: "",
    direccion: "",
    barrio: "",
    totalpedido: ""
  };

  export const CreacionEmpresa = () => {

    const { StartSavingEmpresa } = useEmpresaStore();
    const { nombre, nit, municipio, zona, direccion, barrio, totalpedido, onInputChange, formState } = useForm(EmpresaFormFields);
  
    const CreateEmpresa = async (event) => {
      event.preventDefault();
  
      await StartSavingEmpresa(formState);
  
    }  
  
    return (
      <div className='Container w-100 p-3 bg-blue'>
        <form class="row g-3" onSubmit={CreateEmpresa}>
          <h3 > Datos de la Empresa</h3>
          <div class="col-md-5">
            <label htmlFor="inputNombreEm" class="form-label">Nombre de la Empresa</label>
            <input
              type="text"
              aria-label="Zona"
              class="form-control"
              name='nombre'
              value={nombre}
              onChange={onInputChange}
            ></input>
          </div>
          <div class="col-md-5">
            <label htmlFor="inputNit" class="form-label">Nit</label>
            <input
              name='nit'
              value={nit}
              onChange={onInputChange}
              type="text"
              aria-label="Nit"
              class="form-control"></input>
          </div>
          <div class="col-md-5">
            <label htmlFor="inputMuni" class="form-label">Municipio</label>
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
            <label htmlFor="inputzona" class="form-label">Zona</label>
            <input
              type="text"
              aria-label="Zona"
              name='zona'
              value={zona}
              onChange={onInputChange}
              class="form-control"></input>
          </div>
          <div class="col-md-5">
            <label htmlFor="inputDireccion" class="form-label">Dirección</label>
            <input
              name='direccion'
              value={direccion}
              onChange={onInputChange}
              type="text"
              aria-label="Direccion"
              class="form-control"></input>
          </div>
          <div class="col-md-5">
            <label htmlFor="inputBarri" class="form-label">Barrio</label>
            <input
              name='barrio'
              value={barrio}
              onChange={onInputChange}
              type="text"
              aria-label="Barrio"
              class="form-control"></input>
          </div>
          <div class="col-md-5">
            <label htmlFor="inputPedido" class="form-label">Total Pedido</label>
            <div class="input-group mb-6">
              <span class="input-group-text">$</span>
              <input name='totalpedido'
                value={totalpedido}
                onChange={onInputChange}
                type="text"
                aria-label="Total pedido"
                class="form-control"></input>
              <span class="input-group-text">.00</span>
            </div>
          </div>
          <div class="col-12">
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
          </form>
      </div>
    );
  }
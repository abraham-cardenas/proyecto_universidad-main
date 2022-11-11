import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useEmpresaStore } from '../hooks/useEmpresaStore';
import { useUiStore } from '../hooks/useUiStore';


const customStyles = {

    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

export const EmpresaModal = () => {

    const [formValues, setformValues] = useState({
        nombre: '',
        nit: '',
        municipio: '',
        zona: '',
        direccion: '',
        barrio: ''

    });
    const{isDateModalOpen, closeDateModal} =useUiStore();

    const { activeEmpresa, StartSavingEmpresa, startUpdateEmpresa } = useEmpresaStore();

    useEffect(() => {
        if (activeEmpresa !== null) {
            setformValues({ ...activeEmpresa });
        }

    }, [activeEmpresa])

    const onCloseModal = () => {
        closeDateModal();
       
      };

    
    const onInputChanged = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }
   

    const onSubmit = async (event) => {
        event.preventDefault();
        //Falta por implementar
        console.log({activo: formValues})
        await startUpdateEmpresa(formValues);
        closeDateModal();


    }

    return (
        <div>
            
            <Modal
                isOpen={isDateModalOpen}
                onRequestClose={onCloseModal}
                style={customStyles}
                className="modal"
                overlayClassName="modal-fondo"
                closeTimeoutMS={200}
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form onSubmit={onSubmit} className="container">

                    <div className="form-group mb-2">
                        <label>Empresa</label>
                        <input
                            type="text"
                            className={`form-control`}
                            placeholder=""
                            name="nombre"
                            autoComplete="off"
                            value={formValues.nombre}
                            onChange={onInputChanged}
                            
                        />
                       
                    </div>
                    <div className="form-group mb-2">
                        <label>Nit</label>
                        <input
                            type="text"
                            className={`form-control`}
                            placeholder=""
                            name="nit"
                            autoComplete="off"
                            value={formValues.nit}
                            onChange={onInputChanged}
                            
                        />
                       
                    </div>
                    <div className="form-group mb-2">
                        <label>Municipio</label>
                        <input
                            type="text"
                            className={`form-control`}
                            placeholder=""
                            name="municipio"
                            autoComplete="off"
                            value={formValues.municipio}
                            onChange={onInputChanged}
                        /> 
                    </div>
                    <div className="form-group mb-2">
                        <label>Zona</label>
                        <input
                            type="text"
                            className={`form-control`}
                            placeholder=""
                            name="zona"
                            autoComplete="off"
                            value={formValues.zona}
                            onChange={onInputChanged}
                        /> 
                    </div>
                    <div className="form-group mb-2">
                        <label>Direccion</label>
                        <input
                            type="text"
                            className={`form-control`}
                            placeholder=""
                            name="direccion"
                            autoComplete="off"
                            value={formValues.direccion}
                            onChange={onInputChanged}
                        /> 
                    </div>
                    <div className="form-group mb-2">
                        <label>Barrio</label>
                        <input
                            type="text"
                            className={`form-control`}
                            placeholder=""
                            name="barrio"
                            autoComplete="off"
                            value={formValues.barrio}
                            onChange={onInputChanged}
                        /> 
                    </div>

                   

                    <button type="submit" className="btn btn-outline-primary btn-block">
                      
                        <span> Guardar</span>
                    </button>





                </form>



            </Modal>
        </div>
    );
}

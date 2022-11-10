import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const EmpresaModal = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formValues, setformValues] = useState({
        nombre: '',
        nit: '',
        municipio:'',
        zona:'',
        direccion:'',
        barrio:''

    });
    const onInputChanged = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    const onCloseModal = () => {

        //falta implementar
       
    };

    const onSubmit=async (event)=>{
        event.preventDefault();
        //Falta por implementar
    
  
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={onSubmit} className="container">

                    <div className="form-group mb-2">
                        <label>Empresa</label>
                        <input
                            type="text"
                            className={`form-control`}
                            placeholder=""
                            name="title"
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
                            name="title"
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
                            name="title"
                            autoComplete="off"
                            value={formValues.municipio}
                            onChange={onInputChanged}
                        />
                     
                    </div>
                    <div className="form-group mb-2">
                        <label>zona</label>
                        <input
                            type="text"
                            className={`form-control`}
                            placeholder=""
                            name="title"
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
                            name="title"
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
                            name="title"
                            autoComplete="off"
                            value={formValues.barrio}
                            onChange={onInputChanged}
                        />
                     
                    </div>

                    
                    <button type="submit" className="btn btn-outline-primary btn-block">
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>
                </form>
            </Modal>
        </div>
    );
}

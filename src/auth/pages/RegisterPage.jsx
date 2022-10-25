import { useEffect } from "react";
import Swal from "sweetalert2";
import { useForm, useAuthStore } from "../../hooks";
import "./LoginPage.css";
import { Link } from 'react-router-dom';
import Regi from '../../imagenes/DM&.png';
import {
  NavbarBrand
} from 'reactstrap';
import {
  CButton,
} from '@coreui/react'

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};

export const RegisterPage = () => {
  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  const {startRegister, errorMessage } = useAuthStore();

  const registerSubmit = (event) => {
    event.preventDefault();
    if (registerPassword !== registerPassword2) {
      Swal.fire("Error en registro", "Contraseñas no son iguales", "error");
      return;
    }
    startRegister({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="container login-container">
      <div className="m-2 row justify-content-center w-100">
        <div className="col-md-10 login-form-2">
        <div className=" shadow-sm p-1 mb-1 rounded">
            <h3>REGISTRO</h3>
            <NavbarBrand href="/"> <img src={Regi} alt="User-login" className='img-responsive ' /></NavbarBrand>
          </div>
          <form onSubmit={registerSubmit}>
            <h5>Complete los campos</h5>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                value={registerName}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={registerPassword}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerPassword2}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
            <div className="m-0 p-1">
              <p className="m-0 p-1">
                Ya Estoy registrado
              </p>
              <Link to="/login">
                <CButton color="primary" className="mt-3" active tabIndex={-1}>
                  INGRESAR!
                </CButton>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

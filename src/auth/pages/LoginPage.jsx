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

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

export const LoginPage = () => {
  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const { startLogin, errorMessage } = useAuthStore();

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log(loginEmail, loginPassword);
    startLogin({ email: loginEmail, password: loginPassword });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="container login-container">
      <div className=" m-2 row justify-content-center w-100">
        <div className="col-md-8  login-form-1">
          <div className=" shadow-sm p-1 mb-1 rounded">
            <h3>INGRESO</h3>
            <NavbarBrand href="/"> <img src={Regi} alt="User-login" className='img-responsive' /></NavbarBrand>
          </div>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <p className="m-0">
                Ingrese su Correo
              </p>
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <p className="m-0">
                Ingrese su Password
              </p>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <div className="m-0 p-1">
              <p className="m-0 p-1">
                ¿No tienes Cuenta?
              </p>
              <Link to="/register">
                <CButton color="primary" className="mt-3" active tabIndex={-1}>
                  Register Now!
                </CButton>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

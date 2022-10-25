import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import './style/registro.css'
import './App.scss';
import { useAuthStore } from "./hooks";
import { LoginPage } from "./auth";
import { HomeRoutes } from './Routes/HomeRoutes';
import { RegisterPage } from './auth/pages/RegisterPage';




function App() {

  const { status, checkAuthToken } = useAuthStore();
  
  useEffect(() => {
    checkAuthToken();
  }, []);
  
  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }
  

  return (

 
          <Routes>

            {status === "not-authenticated" ? (
              <>
                <Route path="/auth/*" element={<LoginPage/>} />
                <Route path="/*" element={<Navigate to="/auth/login" />} />
                <Route path="/register" element={<RegisterPage/>} />
              </>
            ) : (
              <>
                <Route path='/*' element={<HomeRoutes/>} />

              </>


            )}



          </Routes>
       

  );
}
export default App;


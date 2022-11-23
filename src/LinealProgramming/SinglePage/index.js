import React, { useState } from "react";
import { Container, Col, Row, Jumbotron } from "reactstrap";
/* import ModalModels from "../../Models" */
import Configuration from "../Configuration";
import Processing from "../Processing";
import Presentation from "../Presentation";
import { useConductorStore } from '../../hooks/useConductorStore';
import { useEmpresaStore } from '../../hooks/useEmpresaStore';


export const SinglePage = () => {
  const {conductores}=useConductorStore();
  const {empresas}=useEmpresaStore();
  
  const [state, setState] = useState({
    model: {
      variables: [
        { xi: 0, descripcion: "Cantidad x1", coeficiente: "50000" },
        { xi: 1, descripcion: "Cantidad x2", coeficiente: "70000" },
        { xi: 2, descripcion: "Cantidad x3", coeficiente: "90000" },
        { xi: 3, descripcion: "Cantidad x4", coeficiente: "100000" },
        { xi: 4, descripcion: "Cantidad x5", coeficiente: "150000" },
      
      ],
      restricciones: [
        { ri: 0, descripcion: "Van N300", coeficientes: [1, 0, 0, 0, 0], eq: "<=", derecha: "5" },
        { ri: 1, descripcion: "Changan", coeficientes: [0, 1, 0, 0, 0], eq: "<=", derecha: "5" },
        { ri: 2, descripcion: "Chevrolet luv", coeficientes: [0, 0, 1, 0, 0], eq: "<=", derecha: "3" },
        { ri: 3, descripcion: "NHR", coeficientes: [0, 0, 0, 1, 0], eq: "<=", derecha: "3" },
        { ri: 4, descripcion: "NKR", coeficientes: [0, 0, 0, 0, 1], eq: "<=", derecha: "2" },
        { ri: 5, descripcion: "Promedio", coeficientes: [2000000, 5000000, 8000000, 15000000, 20000000], eq: "=", derecha: "50000000" },
      ],
      method: "simplex",
      objective: "max",
      integer: false
    },
    result: true,
    modelsOpen: false
  })






  //Esta función maneja el cambio en las restricciones
  const handleRestricciones = restricciones => {
    let { model } = state;
    model.restricciones = restricciones;
    setState({ model, changes: true });
  };
  //Esta función maneja el cambio en las variables
  const handleVariables = variables => {
    let { model } = state;
    model.variables = variables;
    setState({ model, changes: true });
  };
  //Esta función maneja el cambio del metodo
  const handleMethod = method => {
    let { model } = state;
    model.method = method;
    setState({ model, changes: true });
  };
  //Esta función maneja el cambio del objetivo de optimización
  const handleObjective = objective => {
    let { model } = state;
    model.objective = objective;
    setState({ model, changes: true });
  };
  const toggleInteger = () => {
    let { model } = state;
    model.integer = !model.integer;
    setState({ model, changes: true });

  }
  //Esta función guarda el resultado (inutilizada por el momento)
  const handleResult = result => setState({ result });
  //Esta función habilita el cálculo en el último paso
  const lastStep = step => console.log('Changes')

  const finishButtonClick = result => console.log("En algún momento va a imprimir resultados");

  const showModels = () => setState({ modelsOpen: !state.modelsOpen });

  const setModel = model => setState({ model, changes: true });


  let { modelsOpen, model, result } = state



  return (
    <Container fluid className="App">

      <Row>
        <Col xs={12} md={6} className="my-4 w-100">
          <Row>
            <Jumbotron className='w-100'>
              <Configuration status={model}
                handleMethod={handleMethod}
                handleVariables={handleVariables}
                handleRestricciones={handleRestricciones}
                lastStep={lastStep}
                toggleInteger={toggleInteger}
                handleObjective={handleObjective}
                showModels={showModels} />
            </Jumbotron>
          </Row>

          <Row>
            <Jumbotron className='w-100'>
              <Processing status={model} handleVariables={handleVariables}
                handleRestricciones={handleRestricciones} lastStep={lastStep} />
            </Jumbotron>

          </Row>

          <Row>
            <Jumbotron className='w-100'>
              <Presentation status={model} handleResult={handleResult} lastStep={lastStep} />
            </Jumbotron>
          </Row>

        </Col>
      </Row>
      {/* <Row><ModalModels open={modelsOpen} model={model} setModel={this.setModel} handleClose={this.showModels}/></Row> */}
    </Container>
  );
}


export default SinglePage;

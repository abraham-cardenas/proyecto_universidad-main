import React from "react";
import { Container, Col, Row, Jumbotron} from "reactstrap";
/* import ModalModels from "../../Models" */
import Configuration from "../Configuration";
import Processing from "../Processing";
import Presentation from "../Presentation";


class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model:{
        variables: [
            { xi: 0, descripcion: "Cantidad x1", coeficiente: "2000000" }, 
            { xi: 1, descripcion: "Cantidad x2", coeficiente: "5000000" },
            { xi: 2, descripcion: "Cantidad x3", coeficiente: "8000000" },
            { xi: 3, descripcion: "Cantidad x4", coeficiente: "15000000" },
            { xi: 4, descripcion: "Cantidad x5", coeficiente: "20000000" }
        ],
        restricciones: [
          { ri: 0, descripcion: "Van N300", coeficientes: [1,0,0,0,0], eq: "<=", derecha: "5" },
          { ri: 1, descripcion: "Changan", coeficientes: [0,1,0,0,0], eq: "<=", derecha: "5" },
          { ri: 2, descripcion: "Chevrolet luv", coeficientes: [0,0,1,0,0], eq: "<=", derecha: "3" },
          { ri: 3, descripcion: "NHR", coeficientes: [0,0,0,1,0], eq: "<=", derecha: "3" },
          { ri: 4, descripcion: "NKR", coeficientes: [0,0,0,0,1], eq: "<=", derecha: "2" },
        ],
        method: "simplex",
        objective: "max",
        integer: false
      },
      result: true,
      modelsOpen:false
    };
  }

  //Esta función maneja el cambio en las restricciones
  handleRestricciones = restricciones => {
    let { model } = this.state;
    model.restricciones = restricciones;
    this.setState({ model, changes: true });
  };
  //Esta función maneja el cambio en las variables
  handleVariables = variables => {
    let { model } = this.state;
    model.variables = variables;
    this.setState({ model, changes: true });
  };
  //Esta función maneja el cambio del metodo
  handleMethod = method => {
    let { model } = this.state;
    model.method = method;
    this.setState({ model, changes: true });
  };
  //Esta función maneja el cambio del objetivo de optimización
  handleObjective = objective => {
    let { model } = this.state;
    model.objective = objective;
    this.setState({ model, changes: true });
  };
  toggleInteger = () => {
    let { model } = this.state;
    model.integer = !model.integer;
    this.setState({ model, changes: true });

  }
  //Esta función guarda el resultado (inutilizada por el momento)
  handleResult = result => this.setState({ result });
  //Esta función habilita el cálculo en el último paso
  lastStep = step => console.log('Changes')
  
  finishButtonClick = result => console.log("En algún momento va a imprimir resultados");

  showModels = () => this.setState({modelsOpen:!this.state.modelsOpen});

  setModel = model => this.setState({ model, changes:true });

  render() {
    let { modelsOpen, model, result } = this.state
   
    
    return (
      <Container fluid className="App">
     
        <Row>
          <Col xs={12} md={6} className="my-4 w-100">
            <Row>
                <Jumbotron className='w-100'>
                    <Configuration   status={model}
                    handleMethod={this.handleMethod}
                    handleVariables={this.handleVariables}
                    handleRestricciones={this.handleRestricciones}
                    lastStep={this.lastStep}
                    toggleInteger={this.toggleInteger}
                    handleObjective={this.handleObjective}
                    showModels={this.showModels}/>
                </Jumbotron>  
            </Row>

            <Row>
                <Jumbotron className='w-100'>
                    <Processing status={model} handleVariables={this.handleVariables}
                    handleRestricciones={this.handleRestricciones} lastStep={this.lastStep}/>
                </Jumbotron>
                
            </Row>

            <Row>
                <Jumbotron className='w-100'>
                    <Presentation status={model} handleResult={this.handleResult} lastStep={this.lastStep}/>
                </Jumbotron>
            </Row>
          
          </Col>
        </Row>
        {/* <Row><ModalModels open={modelsOpen} model={model} setModel={this.setModel} handleClose={this.showModels}/></Row> */}
      </Container>
    );
  }
}

export default SinglePage;

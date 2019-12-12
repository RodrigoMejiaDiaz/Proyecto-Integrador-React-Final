import React from 'react';

class Robot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      recuperado: false,
    };
  }
  
  componentDidMount(){
    fetch("http://carlosqq.pythonanywhere.com/robot/sensor/?format=json")
    .then(res => res.json())
    .then(data =>
      this.setState({
        datos: data,
        recuperado: true,
      }));
  }
  
  mostrarDatos() {
    return(
      <div>
        <h1>Datos recibidos por robot</h1>
        <div className="row">
      {this.state.datos.map(dato => {
        return(
      <div>
          <p>Temperatura: {dato.temperatura} </p>
          <p>Humedad: {dato.humedad}</p>
      </div>

        );
      })}
        </div>
      </div>
    );
  }

render() {
  if(this.state.recuperado)
    return this.mostrarDatos()
  else
    return (<div>
            <p>recuperando datos...</p></div>)
            }}

export default Robot;

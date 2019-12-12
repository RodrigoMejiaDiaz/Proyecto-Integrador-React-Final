import React from 'react';

class Robot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      recuperado: false,
    };
  }
  
  componentWillMount(){
    fetch("http://carlosqq.pythonanywhere.com/robot/sensor/?format=json",
    {
    method: 'GET',
    })
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
          <p>Temperatura: {dato.temperatura} </p>
          <p>Humedad: {dato.humedad}</p>
        );
      })}
        </div>
      </div>
    );
  }

render() {
  if(this.state.recuperado)
    return this.mostrarCategorias()
  else
    return (<div>recuperando datos...</div>
  }
}
export default Robot;

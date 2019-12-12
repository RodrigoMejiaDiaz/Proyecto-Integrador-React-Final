import React from 'react',

class Robot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      recuperado: false,
    };
  }
  
  componentWillMount(){
    fetch("",
    {
    method: 'GET',
    headers: {
        'Authorization': 'Token '
      }
    })
    .then(res => res.json())
    .then(data =>
      this.setState({
        datos: data,
        recuperado: true,
      }));
  }
}


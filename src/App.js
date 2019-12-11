import React, { Fragment } from 'react';

import {Container} from 'react-bootstrap';

import Categorias from './componentes/Categorias_App';
import Carrousel from './componentes/Carousel';

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <Carrousel/>
        <Container>
          <Categorias/>
        </Container>
      </Fragment>
    );
  }
}

export default App;

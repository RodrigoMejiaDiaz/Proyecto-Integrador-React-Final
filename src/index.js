import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navegacion from './componentes/Navbar';
import Productos from './componentes/Productos_Pagina';
import App from './App';

const routing = (
  <BrowserRouter>
    <body>
      <Navegacion/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/productos" component={Productos} />
      </Switch>
    </body>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();

import React from "react";
import {Link} from 'react-router-dom'

const Carta = () => (
    <div className="card my-4 mr-5" style={{width: "13rem;"}}>
        <div className="card-body">
            <h5 className="card-title">Precio</h5>
            <Link to={`#`} className="card-link">Menos de S/.20</Link>< br/>
            <Link to={`#`} className="card-link">Entre S/.20 y S/.40</Link>< br/>
        </div>
    </div>
);

export default Carta;
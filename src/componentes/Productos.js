import React, {Component, Fragment} from 'react';
import util from '../util';

export default class Productos extends Component {
    render() {
        const productItems = this.props.productos.map(producto => (
            <div className="col col-4" key={producto.cod_prod}>
                <div className="card border-0 d-none d-lg-block d-xl-block">
                    <img src={`/productos_images/${producto.image}`} className="card-img-top" 
                    alt={`${producto.producto}`}/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-normal">{producto.producto}</h5>
                        <p className="card-text"><strong>{util.formatCurrency(producto.precio)}</strong></p>
                        <a href={`#${producto.cod_prod}`} onClick={(e)=>this.props.handleAddToCart(e, producto)} className="btn btn-success stretched-link">Detalles</a>
                    </div>
                </div>
            </div>
        )
        )
        return (
            <Fragment>
                {productItems}
            </Fragment>
        )
    }
}
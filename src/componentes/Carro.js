import React, { Component } from 'react';

import util from '../util';

export default class Carro extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length===0? " El carro está vacío": <div> Tienes {cartItems.length} productos en el carro.</div>}
                {cartItems.length > 0 &&
                <div>
                    <ul>
                        {cartItems.map(item =>
                            <li>
                                <b>{item.producto}</b>
                                X {item.count} = {item.precio * item.count}
                                <button className="btn btn-danger"
                                onClick={(e) =>this.props.handleRemoveFromCart(e, item)}>X</button>
                            </li>)}
                    </ul>
                    Total: {util.formatCurrency(cartItems.reduce((a, c) => a + c.precio*c.count, 0 ))}
                </div>
                }
                <button className="btn btn-primary" onClick={()=>alert("Falta implementarse un checkout...")}>
                    Checkout
                </button>
            </div>
        )
    }
}

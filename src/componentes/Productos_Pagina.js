import React from 'react';

import Carta1 from "./CartaLateral1";
import Carta2 from "./CartaLateral2";
import Productos from "./Productos";
import Filter from './Filter';
import Carro from './Carro';

class Productos_Pagina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            recuperado: false,
            filteredProducts: [],
            cartItems: [],
        };
        this.handleChangeSort = this.handleChangeSort.bind(this);
        this.handleChangeCat = this.handleChangeCat.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }

    componentWillMount(){
        fetch("http://192.168.244.129:8000/api/productos/")
            .then(res => res.json())
            .then(data => 
                this.setState({
                    productos: data,
                    recuperado: true,
                    filteredProducts: data
            }));
            if(localStorage.getItem('cartItems')){
                this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
            }
    }
    handleChangeSort(e){
        this.setState({sort: e.target.value});
        this.listProducts();
    }
    handleChangeCat(e){
        this.setState({cat: e.target.value});
        this.listProducts();
    }
    listProducts(){
        this.setState(state => {
            if(state.sort !== ''){
                state.productos.sort((a,b)=>(state.sort==='menor')? 
                (a.precio > b.precio?1:-1)
                : (a.precio < b.precio?1:-1) )
            } else{
                state.productos.sort((a,b)=> (a.cod_prod< b.cod_prod?1:-1));
            }
            /*if(state.cat!==''){
                return { filteredProducts: state.productos.filter(a=>
                    a.availableCats.indexOf(state.cat.toString)>=0)}
            }*/
            return {filteredProducts: state.productos};
        })
    }
    handleAddToCart(e, producto){
        this.setState(state=>{
            const cartItems = state.cartItems;
            let productAlreadyInCart = false;
            cartItems.forEach(item => {
                if(item.cod_prod === producto.cod_prod){
                    productAlreadyInCart = true;
                    item.count++;
                }
            });
            if(!productAlreadyInCart){
                cartItems.push({...producto, count:1});
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return cartItems;
        })
    }
    handleRemoveFromCart(e, item){
        this.setState(state=>{
            const cartItems = state.cartItems.filter(elm => elm.cod_prod !== item.cod_prod)
            localStorage.setItem('cartItems', cartItems);
            return {cartItems};
        });
    }

    mostrarProductos() {
        return(
            <div className="container">
                <div className="col col-12 d-none d-lg-block d-xl-block">
                    <div className="row">
                        <div className="col col-3 d-none d-lg-block d-xl-block">
                            <Carta1/>
                            <Carta2/>
                            <Carro cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
                        </div>
                        <div className="col col-9">
                            <div className="row">
                                <Filter size={this.state.size} sort={this.state.sort} handleChangeCat={this.handleChangeCat}
                                    handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length}/>
                                <hr/>
                            </div>
                                <div className="card-deck my-4">
                                    <Productos productos={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4 d-lg-none d-xl-none">
                    <div class="col">
                        <Filter size={this.state.size} sort={this.state.sort} handleChangeCat={this.handleChangeCat}
                                    handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.length}/>
                                <hr/>
                    </div>
                </div>
                <div className="card-deck my-4 d-block d-lg-none d-xl-none">
                    {this.state.productos.map(producto => {
                        return (
                            <div className="card mb-3" style={{maxWidth: "540px;"}}>
                                <div className="row no-gutters">
                                    <div className="col">
                                        <img src={`/productos_images/${producto.image}`} className="card-img" alt={`${producto.producto}`} />
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <h5 className="card-title">{producto.producto}</h5>
                                            <p className="card-text">{producto.descripcion}</p>
                                            <p className="card-text"><strong>S/.{producto.precio}</strong></p>
                                            <a href={`#${producto.cod_prod}`} className="btn btn-success stretched-link">Detalles</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>                               
        );
    }

    render() {
        if (this.state.recuperado)
            return this.mostrarProductos()
        else
            return (<div>recuperando datos...</div>)
    }
}

export default Productos_Pagina;
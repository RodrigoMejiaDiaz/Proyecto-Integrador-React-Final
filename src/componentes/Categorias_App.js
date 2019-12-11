import React from 'react';

class Categorias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
            recuperado: false,
        };
    }

    mostrarCategorias() {
        return (
            <div>
                <div className="my-4 d-none d-md-block d-lg-block d-xl-block">
                <h1>Categorías</h1>
                <div class="row row-cols-1 row-cols-md-3">
                {this.state.categorias.map(categoria => {
                                return (
                                    <div className="col mb-4">
                                        <a className="text-decoration-none" href={`#${categoria.cod_cat}`}>
                                        <div className="card h-100">
                                            <img src={`/categorias_images/${categoria.image}`} className="card-img-top" style={{height: "400px;"}} alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">{categoria.categoria}</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                );
                })}
                </div>
            </div>
            <div className="my-4  d-block d-md-none d-lg-none d-xl-none">
                <div className="card-deck my-4">
                        {this.state.categorias.map(categoria => {
                            return (
                                <div className="card mb-3" style={{maxWidth: "540px;"}}>
                                    <div className="row no-gutters">
                                        <div className="col">
                                            <img src={`/categorias_images/${categoria.image}`} className="card-img" alt={`${categoria.categoria}`} />
                                        </div>
                                        <div className="col">
                                            <div className="card-body">
                                                <h5 className="card-title">{categoria.categoria}</h5>
                                                <p className="card-text">{categoria.descripcion}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
            </div>
            </div>
            
        );
    }

    componentDidMount() {
        fetch('http://192.168.244.129:8000/api/categorias/')
            .then((response) => {
                return response.json()
            })
            .then((cat) => {
                this.setState({
                    categorias: cat,
                    recuperado: true,
                })
            })
    }

    render() {
        if (this.state.recuperado)
            return this.mostrarCategorias()
        else
            return (<div>recuperado datos...</div>)
    }
}

export default Categorias;
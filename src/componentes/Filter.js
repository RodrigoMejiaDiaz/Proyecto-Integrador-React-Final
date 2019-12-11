import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-auto">
                    {this.props.count} productos encontrados.
                </div>
                <div className="col-auto">
                    <label>
                        Ordenar por
                        <select className="form-control" value={this.props.sort}
                        onChange={this.props.handleChangeSort}>
                            <option value="">Seleccionar</option>
                            <option value="menor">Precio: Menor a Mayor</option>
                            <option value="mayor">Precio: Mayor a Menor</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label>
                        Filtrar categoría
                        <select className="form-control" value={this.props.cat}
                        onChange={this.props.handleChangeCat}>
                            <option value="">Seleccionar</option>
                            <option value="1">Quirúrjico</option>
                            <option value="2">Insumo Odontológico</option>
                            <option value="3">Equipo Médico</option>
                            <option value="4">Ayuda Funcional</option>
                            <option value="5">Material de Curación</option>
                            <option value="6">Agente de Diagnóstico</option>

                        </select>
                    </label> 
                </div>
            </div>
        )
    }
}

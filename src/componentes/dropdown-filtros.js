import React from "react";
import { Dropdown } from 'react-bootstrap';


const DropdownF = () => (
    <Dropdown>
        <Dropdown.Toggle>
            Filtrar Por:
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href={`#`}>Nombre: A-Z</Dropdown.Item>
            <Dropdown.Item href={`#`}>Nombre: Z-A</Dropdown.Item>
            <Dropdown.Item href={`#`}>Precio: Mayor a Menor</Dropdown.Item>
            <Dropdown.Item href={`#`}>Precio: Menor a Mayor</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export default DropdownF;
import React from 'react';
import Form from './Form';
import Dropdown from './Dropdown';
import Secciones from './Secciones';
import CartIcon from './Cart-Icon';

const Navbar = () => {
  const ListDropdown = ["ESPECIAL DIA DE LA MADRE", "JOYAS", "REGIONALES","OUTLET JOYAS ","RELOJES", "CADENA HOMBRE PLATA 925"] 
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light carrito">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <Secciones/>
        <Dropdown Lista = {ListDropdown}/>
      </ul>
      <CartIcon/>
      <Form busqueda= "Buscar productos..."/>
    </div>
  </div>
</nav>
</>

  );
}

export default Navbar;

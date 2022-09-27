import React from 'react';

const Secciones = () => {
  return (
    <>
    <li className="nav-item">
          <a className="nav-link active" href="#">INICIO
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">COMO COMPRAR</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">QUIENES SOMOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACTO</a>
    </li>
    </>
  );
}

export default Secciones;

import React from 'react';

const Dropdown = ({Lista}) => {
  return (
   <>
   <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">PRODUCTOS</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">{Lista[0]}</a>
            <a className="dropdown-item" href="#">{Lista[1]}</a>
            <a className="dropdown-item" href="#">{Lista[2]}</a>
            <a className="dropdown-item" href="#">{Lista[3]}</a>
            <a className="dropdown-item" href="#">{Lista[4]}</a>
            <a className="dropdown-item" href="#">{Lista[5]}</a>
          </div>
        </li>
        </>   
  );
}

export default Dropdown;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../assets/css/nav.css'
import complogo from '../assets/img/complogo.png'

// window.addEventListener('scroll',(event) => {
//     document.getElementById('headerNav').classList.add('fixed-top');
// });

const Topnav = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="headerNav">
        <div className="container-fluid">
          <a className="navbar-brand d-block d-lg-none" href="#">
            <img src={complogo} height="80" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Products</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link mx-2" href="#">
                  <img src={complogo} height="80" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                  <li><a className="dropdown-item" href="#">Contact us</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Topnav
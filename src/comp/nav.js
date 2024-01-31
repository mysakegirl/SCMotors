import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../scmo/public/assets/css/nav.css';
import '../assets/css/nav.css'
import complogo from '../assets/img/complogo.png'
    
const Topnav = () =>{
    const [isActive, setIsActive] = useState(false);
    const handleNavClick = () => {
        setIsActive(!isActive);
        const mainListDiv = document.getElementById('mainListDiv');
        if (mainListDiv) {
          mainListDiv.classNameList.toggle('show_list');
          mainListDiv.style.display = mainListDiv.style.display === 'none' ? 'block' : 'none';
        }
    };

    return(
    //     <nav classNameName="nav">
    //     <div classNameName="container">
    //         <div classNameName="logo">
    //             <a href="#"><img src={complogo} alt='Company Logo' /></a>
    //         </div>
    //         <div id="mainListDiv" classNameName="main_list">
    //             <ul classNameName="navlinks">
    //                 <li><a href="#">About</a></li>
    //                 <li><a href="#">Portfolio</a></li>
    //                 <li><a href="#">Services</a></li>
    //                 <li><a href="#">Contact</a></li>
    //             </ul>
    //         </div>
    //         <span classNameName={`navTrigger ${isActive ? 'active' : ''}`} onClick={handleNavClick}>
    //             <i></i>
    //             <i></i>
    //             <i></i>
    //         </span>
    //     </div>
    // </nav>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Hidden brand</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    )
}

export default Topnav
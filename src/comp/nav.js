import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../scmo/public/assets/css/nav.css';
import '../assets/css/nav.css'
    
const Topnav = () =>{
    const [isActive, setIsActive] = useState(false);
    const handleNavClick = () => {
        setIsActive(!isActive);
        const mainListDiv = document.getElementById('mainListDiv');
        if (mainListDiv) {
          mainListDiv.classList.toggle('show_list');
          mainListDiv.style.display = mainListDiv.style.display === 'none' ? 'block' : 'none';
        }
    };

    return(
        <nav className="nav">
        <div className="container">
            <div className="logo">
                <a href="#"><img src='./assets/img/logo.png' alt='Company Logo' /></a>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <span className={`navTrigger ${isActive ? 'active' : ''}`} onClick={handleNavClick}>
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    )
}

export default Topnav
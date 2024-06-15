import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/figura-geometrica-quadrado.png';


function Header() {


  return (
    <header>
        <nav>
            <div className="wrapper">
              <div className="logo"><a href="/"><img src={logo} width="100px" height="70px"/></a></div>
              <input type="radio" name="slider" id="menu-btn"/>
              <input type="radio" name="slider" id="close-btn"/>
              <ul className="nav-links">
                <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                <li><a href="/">cursos</a></li>               
                <li><a href="/sobre">sobre</a></li>
              </ul>
              <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
              
            </div>
        
          </nav>        
    </header>
  );
}

export default Header;
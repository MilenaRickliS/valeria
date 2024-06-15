import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/figura-geometrica-quadrado.png';


function Header() {


  return (
    <header>
        <nav>
            <div class="wrapper">
              <div class="logo"><a href="/"><img src={logo} width="100px" height="70px"/></a></div>
              <input type="radio" name="slider" id="menu-btn"/>
              <input type="radio" name="slider" id="close-btn"/>
              <ul class="nav-links">
                <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                <li><a href="/">cursos</a></li>               
                <li><a href="/sobre">sobre</a></li>
              </ul>
              <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
              
            </div>
        
          </nav>        
    </header>
  );
}

export default Header;
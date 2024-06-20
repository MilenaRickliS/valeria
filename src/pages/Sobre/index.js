import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import valeriaPng from '../../assets/FB_IMG_1718062058497-removebg-preview.png';
import valeria from '../../assets/FB_IMG_1718049833611.jpg';

function Sobre() {
   return (
    
      <div>
        <div><Header/></div>
        <br/>
        <br/>
        <br/>
        
        <div>
          <h1>Sobre mim</h1>
        <img src={valeria} />
        <div>
          <h3>Sobre o meu trabalho</h3>
          <p>nesses cursos você encontrará:</p>
          <div>
            <i class="bi bi-check-circle-fill"></i>
            <p>um ponto positivo</p>
          </div>
          
        </div>
        </div>
        
        <div>
          <h3>Interessado? Verifique meus cursos</h3>
          <div className="meuscursos">
            <p>Meus Cursos</p>
            <a href="/"><i className="bi bi-arrow-right"></i></a>
          </div>
          <br/>
          <br/>
        </div>
      <Footer/>
      </div>

  );
}

export default Sobre;
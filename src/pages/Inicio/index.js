import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import foto1 from '../../assets/foto1.png';
import foto2 from '../../assets/foto2.png';
import foto3 from '../../assets/foto3.png';
import valeria from '../../assets/FB_IMG_1718049833611.jpg';

function Inicio() {
   return (
    
      <div>
        <div><Header/></div>
        <br/>
        <br/>
        <br/>
        <div className="container-sm"> 
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
          
          <div className="carousel-inner">
            <div className="item active">
              <img src={foto1} alt="foto1" />
            </div>
      
            <div className="item">
              <img src={foto2} alt="foto2" />
            </div>
          
            <div className="item">
              <img src={foto3} alt="foto3" />
            </div>
          </div>
      
          
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      

      <div className="produtos">
        <input type="radio" name="position" checked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <section id="carousel-2">
          <div className="item-2"></div>
          <div className="item-2"></div>
          <div className="item-2"></div>
          <div className="item-2"></div>
          <div className="item-2"></div>
          </section>
      </div>

      <div className="sobre-trabalho">
        <div>
          <img src={valeria} width="100%" maxwidth="600px" height="100%"/>
        </div>
        <div className="sobre-text">
          <h3>Sobre o meu trabalho</h3>
          
          <p>nesses cursos você encontrará:</p>
          
          <div className="sobre-list">
            <i class="bi bi-check-circle"></i>
            <p>um ponto positivo</p>
          </div>
          
          <div className="sobre-list">
            <i class="bi bi-check-circle"></i>
            <p>um ponto positivo</p>
          </div>
          
          <div className="sobre-list">
            <i class="bi bi-check-circle"></i>
            <p>um ponto positivo</p>
          </div>
         
          <div className="sobre-list">
            <i class="bi bi-check-circle"></i>
            <p>um ponto positivo</p>
          </div>
          
          <br/>
          <a href="/sobre" className="link-sobre">Saiba mais!</a>
        </div>
      </div>
      <div className="avaliacao">
        <h1>Avaliações</h1>
        <div className="container-avaliacao">
          <strong >nome  pessoa</strong>
          <p className="data">12/06/2004</p>
          <p className="comentario">As frases para vender produtos podem oferecer vantagens incríveis para sua equipe de vendas. Além de facilitar o trabalho, elas também podem ajudar no aumento do desempenho das estratégias que você já aplica. </p>
          <p className="flecha"><i className="bi bi-arrow-right"></i></p>
        </div>
      </div>
      <Footer/>
      </div>

  );
}

export default Inicio;
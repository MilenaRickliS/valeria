import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import foto1 from '../../assets/foto1.png';
import foto2 from '../../assets/foto2.png';
import foto3 from '../../assets/foto3.png';

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

      </div>
      <div className="avaliacao">

      </div>
      <Footer/>
      </div>

  );
}

export default Inicio;
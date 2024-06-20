import React, { useEffect, useState } from "react";
import { db } from '../../Firebase/firebaseConnection';
import {
  collection,
  onSnapshot
} from 'firebase/firestore';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import foto1 from '../../assets/foto1.png';
import foto2 from '../../assets/foto2.png';
import foto3 from '../../assets/foto3.png';
import valeria from '../../assets/FB_IMG_1718049833611.jpg';


function Inicio() {
  
  const [produtos, setProdutos] = useState([]);
  // Efeito que carrega os posts do Firestore sempre que o componente é montado.
  useEffect(() => {
    async function loadPosts(){
    const unsub = onSnapshot(collection(db, "produtos"), (snapshot) => {
    let listaPost = [];
    snapshot.forEach((doc) => {
      listaPost.push({
        id: doc.id,
        name: doc.data().name,
        price: doc.data().price,
        descr: doc.data().descr,
        image: doc.data().image
    })
    })
    setProdutos(listaPost);
    })
    }
    loadPosts();
  }, [])
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
      
     
      <div>
      <h1>Produtos</h1>
      <ul className="prod">
        {produtos.map( (post) => {
          return(
          <li key={post.id} className="produtos">
            <img src={post.image}/>
            <div className="titulo">
              <strong>{post.name}</strong> 
              <strong>R${post.price},00 </strong> 
            </div>            
            <p className="descricao">{post.descr}</p> <br/>
            <Link className="link-produtos" to={`/produto/${post.id}`}>Saiba Mais!</Link>
          </li>

          )
        })}
      </ul>
     </div>
      

      <div className="sobre-trabalho">
        <img src={valeria} />
        <div>
          <h2>Sobre o meu trabalho</h2>
          <p>nesses cursos você encontrará:</p>
          <div className="list">
            <i className="bi bi-check-circle-fill"></i>
            <p>um ponto positivo</p>
          </div><br/>
          <a href="/sobre" className="saiba-mais">Saiba mais!</a>

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
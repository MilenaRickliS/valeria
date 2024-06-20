import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/firebaseConnection';
import {
    collection,
    onSnapshot
  } from 'firebase/firestore';

function Produto() {
  const { id } = useParams();
  //context para armazenar produtos
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = React.useState(null);

  // Efeito que carrega os produtos do Firestore sempre que o componente é montado.
  useEffect(() => {
    async function loadProdutos(){
    const unsub = onSnapshot(collection(db, "produtos"), (snapshot) => {
    let lista = [];
    snapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        name: doc.data().name,
        price: doc.data().price,
        descr: doc.data().descr,
        image: doc.data().image,
        descrMaior: doc.data().descrMaior,
        ponto1: doc.data().ponto1   
    })
    })
    setProdutos(lista);
    setProduto(lista.find(produto => produto.id === id));
    })
    }
    loadProdutos();
  }, [id])

  if (!produto) {
    return <div>Carregando...</div>;
  }

   return (
    
      <div>
        <div><Header/></div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="pag-produto">
        <img className="img-produto" src={produto.image}/>
            <div className="titulo-produto">
              <strong>{produto.name}</strong> 
              <strong>R${produto.price},00 </strong> 
            </div>            
            <p className="descricao-produto">{produto.descr}</p> <br/>
            <Link className="botao-comprar" to={''}>Comprar</Link> <br/> <br/> <br/>
        </div>
      <div className="descrMaior">
        <h1>Descrição</h1>
        <p>{produto.descrMaior}</p><br/>
      </div>
      <div className="sobre-curso">
        <strong>Este curso inclui:</strong>
        <p>nesses cursos você encontrará:</p>
        <div className="list-curso">
            <i className="bi bi-check-circle-fill"></i>
            <p>{produto.ponto1}</p>
          </div>
      </div>
      <hr></hr>

        <div className="avaliacao">
        <h1>Avaliações</h1>
        <div className="container-avaliacao">
          <strong >nome  pessoa</strong>
          <p className="data">12/06/2004</p>
          <p className="comentario">As frases para vender produtos podem oferecer vantagens incríveis para sua equipe de vendas. Além de facilitar o trabalho, elas também podem ajudar no aumento do desempenho das estratégias que você já aplica. </p>
          <p className="flecha"><i className="bi bi-arrow-right"></i></p>
        </div>
        <div className="avaliacao-link">
          <Link className="link" to=''>Escreva uma avaliação</Link>
          <Link className="link" to=''><i className="bi bi-arrow-right"></i></Link>
        </div>
      </div>
      <Footer/>
      </div>

  );
}

export default Produto;
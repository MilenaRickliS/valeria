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

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Produto() {
  const { id } = useParams();
  //context para armazenar produtos
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = React.useState(null);

  const [avaliacao1, setAvaliacao1] = useState([]);
  const [avaliacao2, setAvaliacao2] = useState([]);
  const [avaliacao3, setAvaliacao3] = useState([]);

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

  useEffect(() => {
    async function loadAvaliacao1(){
    const unsub = onSnapshot(collection(db, "avaliacaoProduto1"), (snapshot) => {
    let lista = [];
    snapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        name: doc.data().name,
        data: doc.data().data,
        comentario: doc.data().comentario  
    })
    })
    setAvaliacao1(lista);
    
    })
    }
    loadAvaliacao1();
  }, [])

  useEffect(() => {
    async function loadAvaliacao2(){
    const unsub = onSnapshot(collection(db, "avaliacaoProduto2"), (snapshot) => {
    let lista = [];
    snapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        name: doc.data().name,
        data: doc.data().data,
        comentario: doc.data().comentario  
    })
    })
    setAvaliacao2(lista);
    
    })
    }
    loadAvaliacao2();
  }, [])

  useEffect(() => {
    async function loadAvaliacao3(){
    const unsub = onSnapshot(collection(db, "avaliacaoProduto3"), (snapshot) => {
    let lista = [];
    snapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        name: doc.data().name,
        data: doc.data().data,
        comentario: doc.data().comentario  
    })
    })
    setAvaliacao3(lista);
    
    })
    }
    loadAvaliacao3();
  }, [])

  if (!produto) {
    return <div>Carregando...</div>;
  }

  let avaliacoes;
  if (produto.id === 'produtos') {
    avaliacoes = avaliacao1;
  } else if (produto.id === 'produtos1') {
    avaliacoes = avaliacao2;
  } else if (produto.id === 'produtos2') {
    avaliacoes = avaliacao3;
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
        <img className="img-produto" src={produto.image} alt="imagem produto"/>
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
        <Carousel infiniteLoop={true} showStatus={false} showIndicators={false} emulateTouch={true} showArrows={false} interval={3000} swipeable={true} className="container-avaliacao">        
          {avaliacoes.map((post) => (
            <div key={post.id} className="div-avaliacao">
              <strong className="nome-pessoa">{post.name}</strong>
              <p className="data">{post.data}</p>
              <p className="comentario">{post.comentario}</p>
              <p className="flecha"><i className="bi bi-arrow-right"></i></p>
            </div>
          ))}
        </Carousel>
        <div className="avaliacao-link">
          <Link className="link" to={`/avaliacaoProdutos/${produto.id}`}>Escreva uma avaliação</Link>
          <Link className="link" to={`/avaliacaoProdutos/${produto.id}`}><i className="bi bi-arrow-right"></i></Link>
        </div>
      </div>
      <Footer/>
      </div>

  );
}

export default Produto;
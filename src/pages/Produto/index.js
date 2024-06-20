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
        image: doc.data().image   
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
            <p className="descricao">{produto.descr}</p> <br/>
            <Link to={''}>Comprar</Link>
        </div>
      <Footer/>
      </div>

  );
}

export default Produto;
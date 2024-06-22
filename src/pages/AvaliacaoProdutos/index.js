import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../Firebase/firebaseConnection';
import {
  collection,
  addDoc,
  onSnapshot
} from 'firebase/firestore';

function AvaliacaoProdutos() {
    const { id } = useParams();
    const data1 = new Date();
    const dia = String(data1.getDate()).padStart(2,'0')
    const mes = String(data1.getMonth() + 1).padStart(2,'0')
    const ano = data1.getFullYear()
    const dataAtual = `${dia}/${mes}/${ano}`

    
    const [name, setName] = useState('');
    const [data, setData] = useState(dataAtual);
    const [comentario, setComentario] = useState('');

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

if(produto){

   if(produto.id === 'produtos'){
    
    
      // Função para adicionar uma nova avaliacao ao Firestore.
      async function handleAdd(){
        await addDoc(collection(db, "avaliacaoProduto1"), {
          name: name,
          data: data,
          comentario: comentario
        })
        .then(() => {
          console.log("CADASTRADO COM SUCESSO")
          setName('');
          setData('');
          setComentario('');
          
        })
        .catch((error) => {
          console.log("ERRO " + error);
        })
      }  
      return (
    
        <div>
          <div><Header/></div>
          <br/>
          <br/>
          <br/>
          
          <div>
            <h1>Avaliação</h1>
            <div className="formulario"> 
              
              <input className="data-formulario" disabled
              placeholder={data}
              value={data}
              onChange={ (e) => setData(e.target.value) }
              /> <br/>
              <label>Qual o seu nome?</label>
              <input className="input-formulario"
              placeholder='Digite o nome completo'
              value={name}
              onChange={ (e) => setName(e.target.value) }
              /> <br/>
              <label>Escreva um comentário:</label>
              <textarea className="input-formulario"
              placeholder='Digite seu comentário'
              value={comentario}
              onChange={ (e) => setComentario(e.target.value) }
              /> <br/>
              <div>
              <button className="button-formulario" onClick={handleAdd}>Adicionar</button> 
              </div>
  
            </div> <br/><br/> <br/>    
      </div>
      <Footer/>
      </div>
      );
   }
   else if(produto.id === 'produtos1'){
    
    
    // Função para adicionar uma nova avaliacao ao Firestore.
    async function handleAdd(){
      await addDoc(collection(db, "avaliacaoProduto2"), {
        name: name,
        data: data,
        comentario: comentario
      })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO")
        setName('');
        setData('');
        setComentario('');
        
      })
      .catch((error) => {
        console.log("ERRO " + error);
      })
    }  
    return (
  
      <div>
        <div><Header/></div>
        <br/>
        <br/>
        <br/>
        
        <div>
          <h1>Avaliação</h1>
          <div className="formulario"> 
            
            <input className="data-formulario" disabled
            placeholder={data}
            value={data}
            onChange={ (e) => setData(e.target.value) }
            /> <br/>
            <label>Qual o seu nome?</label>
            <input className="input-formulario"
            placeholder='Digite o nome completo'
            value={name}
            onChange={ (e) => setName(e.target.value) }
            /> <br/>
            <label>Escreva um comentário:</label>
            <textarea className="input-formulario"
            placeholder='Digite seu comentário'
            value={comentario}
            onChange={ (e) => setComentario(e.target.value) }
            /> <br/>
            <div>
            <button className="button-formulario" onClick={handleAdd}>Adicionar</button> 
            </div>

          </div> <br/><br/> <br/>    
    </div>
    <Footer/>
    </div>
    );
 }

 else if(produto.id === 'produtos2'){
    
    
    // Função para adicionar uma nova avaliacao ao Firestore.
    async function handleAdd(){
      await addDoc(collection(db, "avaliacaoProduto3"), {
        name: name,
        data: data,
        comentario: comentario
      })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO")
        setName('');
        setData('');
        setComentario('');
        
      })
      .catch((error) => {
        console.log("ERRO " + error);
      })
    }  
    return (
  
      <div>
        <div><Header/></div>
        <br/>
        <br/>
        <br/>
        
        <div>
          <h1>Avaliação</h1>
          <div className="formulario"> 
            
            <input className="data-formulario" disabled
            placeholder={data}
            value={data}
            onChange={ (e) => setData(e.target.value) }
            /> <br/>
            <label>Qual o seu nome?</label>
            <input className="input-formulario"
            placeholder='Digite o nome completo'
            value={name}
            onChange={ (e) => setName(e.target.value) }
            /> <br/>
            <label>Escreva um comentário:</label>
            <textarea className="input-formulario"
            placeholder='Digite seu comentário'
            value={comentario}
            onChange={ (e) => setComentario(e.target.value) }
            /> <br/>
            <div>
            <button className="button-formulario" onClick={handleAdd}>Adicionar</button> 
            </div>

          </div> <br/><br/> <br/>    
    </div>
    <Footer/>
    </div>
    );
 }
} else{
    return <div>Loading...</div>;
}


  


        
}

export default AvaliacaoProdutos;
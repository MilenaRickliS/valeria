import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useState, useEffect } from 'react';
import { db } from '../../Firebase/firebaseConnection';
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';

import { Carousel } from "react-responsive-carousel";

function Avaliacao() {
    const data1 = new Date();
    const dia = String(data1.getDate()).padStart(2,'0')
    const mes = String(data1.getMonth() + 1).padStart(2,'0')
    const ano = data1.getFullYear()
    const dataAtual = `${dia}/${mes}/${ano}`

    const [avaliacao, setAvaliacao] = useState([]);
    const [name, setName] = useState('');
    const [data, setData] = useState(dataAtual);
    const [comentario, setComentario] = useState('');




  useEffect(() => {
    async function loadAvaliacao(){
    const unsub = onSnapshot(collection(db, "avaliacoesGerais"), (snapshot) => {
    let lista = [];
    snapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        name: doc.data().name,
        data: doc.data().data,
        comentario: doc.data().comentario  
    })
    })
    setAvaliacao(lista);
    
    })
    }
    loadAvaliacao();
  }, [])

  // Função para adicionar uma nova avaliacao ao Firestore.
  async function handleAdd(){
    await addDoc(collection(db, "avaliacoesGerais"), {
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
          <div> 
            <label>Data</label>
            <input disabled
            placeholder={data}
            value={data}
            onChange={ (e) => setData(e.target.value) }
            /> <br/>
            <label>Qual o seu nome?</label>
            <input 
            placeholder='Digite o nome completo'
            value={name}
            onChange={ (e) => setName(e.target.value) }
            /> <br/>
            <label>Escreva um comentário:</label>
            <textarea 
            placeholder='Digite seu comentário'
            value={comentario}
            onChange={ (e) => setComentario(e.target.value) }
            /> <br/>
            <div>
            <button className="button-cadastro" onClick={handleAdd}>Adicionar</button> 
            </div>

          </div>

        {/* <ul className="prod">
            {avaliacao.map( (post) => {
            return(
            <li key={post.id} className="produtos">                
                <strong>{post.name}</strong> 
                <strong>{post.data}</strong> 
                <p>{post.comentario}</p>                         
                
            </li>

            )
            })}
        </ul> */}
        
        </div>
        
        <Carousel>
       
            {avaliacao.map( (post) => {
            return(
            <li key={post.id} className="produtos">                
                <strong>{post.name}</strong> 
                <strong>{post.data}</strong> 
                <p>{post.comentario}</p>                         
                
            </li>

            )
            })}
         
        </Carousel>
        
      <Footer/>
      </div>

  );
}

export default Avaliacao;
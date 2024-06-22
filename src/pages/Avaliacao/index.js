import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import { db } from '../../Firebase/firebaseConnection';
import {
  collection,
  addDoc,
  onSnapshot
} from 'firebase/firestore';

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
        </ul>  */}

        
    
       

      </div>
    {/* <div className="avaliacao">
      <Carousel infiniteLoop={true} showStatus={false} showIndicators={false} emulateTouch={true} showArrows={false} interval={3000} swipeable={true} className="container-avaliacao">
          {avaliacao.map((post) => (
            <div key={post.id} className="div-avaliacao">
              <strong className="nome-pessoa">{post.name}</strong>
              <p className="data">{post.data}</p>
              <p className="comentario">{post.comentario}</p>
              <p className="flecha"><i className="bi bi-arrow-right"></i></p>
            </div>
          ))}
        </Carousel>
        </div>     */}
      <Footer/>
      </div>

  );
}

export default Avaliacao;
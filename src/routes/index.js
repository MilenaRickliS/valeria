import { Routes, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio';
import Sobre from '../pages/Sobre';
import Produto from '../pages/Produto';
import Avaliacao from '../pages/Avaliacao';
import AvaliacaoProdutos from '../pages/AvaliacaoProdutos';


function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      <Route path="/sobre" element={ <Sobre/> } />

      <Route path="/produto/:id" element={ <Produto/> } />

      <Route path="/avaliacao" element={ <Avaliacao/> } />

      <Route path="/avaliacaoProdutos/:id" element={ <AvaliacaoProdutos/> } />
    
    </Routes>
  )
}

export default RoutesApp;
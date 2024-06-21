import { Routes, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio';
import Sobre from '../pages/Sobre';
import Produto from '../pages/Produto';
import Avaliacao from '../pages/Avaliacao';


function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      <Route path="/sobre" element={ <Sobre/> } />

      <Route path="/produto/:id" element={ <Produto/> } />

      <Route path="/avaliacao" element={ <Avaliacao/> } />
    
    </Routes>
  )
}

export default RoutesApp;
import { Link } from 'react-router-dom';
import './style.css';


function Footer(){
    return(
        <footer>
            <h1>Contato</h1>
            <div className='contato'>
                <p>valeria@gmail.com</p>
                <button className='button-contato'>Diga, olá!</button>
            </div>
            <ul className='menu-contato'>
                <li><a href="/">cursos</a></li>               
                <li><a href="/sobre">sobre</a></li>
            </ul>

                
        </footer>     
    );
}

export default Footer;
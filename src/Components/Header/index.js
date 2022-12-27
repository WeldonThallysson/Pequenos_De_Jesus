import React from 'react';
import { Link } from 'react-router-dom'
import './estilos.css'

export default function Header() {


 return (
   <div className='Conteiner__Principal'>
     
     <div>
    
      <nav className='Conteiner__Menu'>

       <div className='Conteiner__Logo'>
        <Link className="Animacao__Logo" to={'/'}>
            <img src={require('../../Assets/Desenho-de-uma-abelhinha-fofa-1024x886.png')}className="logo__abelhinha"/>
            <h2 className='Titulo__Principal'>Pequenos de Jesus</h2>
         </Link>
        </div>
            <ul className='Lista'>
       
            <li className='Itens__Lista'><Link className="botao" to={'/'}>Home</Link></li>
            <li className='Itens__Lista'><Link className="botao" to={'/Atividades'}> Atividades</Link></li>          
            <li className='Itens__Lista'><Link className="botao" to={'/Aulinhas'}>Aulinhas</Link></li>
            <li className='Itens__Lista'><Link className="botao" to={'/Contato'}> Contato</Link></li>
       
        </ul>
      </nav>
     </div>
   </div>
  );
}
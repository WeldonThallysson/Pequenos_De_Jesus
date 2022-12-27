import React from "react";
import './estilos.css'
import { Link } from 'react-router-dom';

export default function Section(){
    return(
        <div>
            <section className='Conteiner__Cards'>

<ul className='Lista'>
  <li className='Itens__List'>
    <h3 className='Titulo__Card'>Explore as Atividades</h3>
    <img src={require('../../Assets/explorando.png')} className="img__card"/>                                
    <div className='Conteiner__Descard'>
      <p className='Descricao_Card'>Explore as melhores atividades acompanhando toda a história da biblia e se divertindo com jesus e seus discipulos !</p>
    </div>
    
    <div className='Conteiner__Botao'>
      <Link className="Botao__Card" to={'Atividades'}>Explorar</Link> 
    </div>
  </li>

  <li className='Itens__List'>
    <h3 className='Titulo__Card'>Aulinhas em PDF</h3>
    <img src={require('../../Assets/atividades.png')} className="img__card"/>  
     
    <div className='Conteiner__Descard'>
      <p className='Descricao_Card'>Aulinhas em PDF para as os nossos pequeninos, aprenderem mais Curiosidades sobre Deus e Jesus cristo  ! </p>
    </div> 
   
    <div className='Conteiner__Botao' >
      <Link  className="Botao__Card" to={'/Atividades'}> Estudar</Link> 
    </div>
  </li>

  <li className='Itens__List'>
    <h3 className='Titulo__Card'>Conteúdo Vídeo Aulas</h3>
    <img src={require('../../Assets/videoaulas.png')} className="img__card"/> 
   
    <div className='Conteiner__Descard'>
      <p className='Descricao_Card'>Temos vídeo aulas, iniciando nossos pequeninos em diversas áreas musicais e ministeriais, leitura biblica, canto, violão,guitarra, contra baixo e bateria!</p>
    </div>
    
   <div className='Conteiner__Botao'>
     <Link className="Botao__Card" to={'Aulinhas'}>Assistir</Link> 
   </div>

  </li>
</ul>  
</section>

<section className="Conteiner__Sobre">
      
      <h3 className="Titulo__Sobre">Nossa Intensão</h3>  
      <div className="Conteiner__geral"> 
       
       <span className="Desc__Sobre">Nosso objetivo é que todos os nossos pequeninos aprendam com facilidade sobre a palavra de <strong>Deus</strong> e sobre <strong>Jesus Senhor e Salvador</strong> e se divirtam com diversas atividades envolvendo a criatividade e imaginação,fique avontade para explorar o site sem precisar pagar nada por isso, se sentir no coração de ajudar o app a crescer, faça sua doação !</span>
       <img className="Img__Sobre" src={require('../../Assets/cardpix.png')}/> 
      </div>
      
      
        
     
      
    
   
         

</section>



        </div>

    )

}
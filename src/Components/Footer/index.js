import React from 'react';
import './estilos.css'

export default function Footer() {
 return (
   
     <footer className='Conteiner__Rodape'>
          <h3 className='Titulo__Rodape'>Siga nas Redes Sociais</h3>
             
             <div className='Botao'>     
                    
                
                <img  className='Logo__Rodape'  src={require('../../Assets/instagram.png')}/>
                
              
                    
                    
                <img className='Logo__Rodape'src={require('../../Assets/facebook.png')}/>
                  
                 
            
             </div>
         


     </footer>
   
  );
}
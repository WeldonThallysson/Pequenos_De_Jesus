import React from 'react';

import './estilos.css'
import Section from '../../Components/Section';
import Footer from '../../Components/Footer';
export default function Home() {
 return (
   <div className='Conteiner_Principal'>
      
      <section className='Conteiner_Principal'>
        <img src={require('../../Assets/abelinha.png')} className="Poster__Abelhinha"/>
      </section>

      <Section/>  
      <Footer/>
      
     
   </div>
  );
}
import React from 'react';
import '../projects/projects.css'
import Btn1 from '../projects/Btn1';
import webTributo from  '../../assets/img/webTributo.png';
import calculadora from '../../assets/img/Calculadora1.png';
import wheelOf from '../../assets/img/wheelOf.jpg';


function proyectos() {

  return (
    <div className='divProyectos'>
      <h1>
        MIS PROYECTOS
      </h1>
      <div className='divImgProyectos'>
        <img src={webTributo} alt="webTributo" />
        <img src={calculadora} alt="Calculadora" />
        <img src={wheelOf} alt="Whel of Dom" />
      </div>
      <Btn1/>
    </div>
  )
}

export default proyectos
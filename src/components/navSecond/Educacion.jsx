import React from 'react'
import LogoP from '../../assets/img/logoP.png'
import LogoU from '../../assets/img/logoU.png'

function Educacion() {
  return (
    <div className='divEducation'>
      <div>
        <h2>Ingeniera Industrial.</h2>
        <h4>Escuela Colombiana de Ingeniería <br />Julio Garavito.</h4>
        <h6>Bogotá, D.C.</h6>
        <img src={LogoU} alt="" />
      </div>
      <div>
        <h2>Desarrolladora web full stack.</h2>
        <h4>Prográmate Academy <br />Educamas</h4>
        <h6>Bogotá, D.C.</h6>
        <img src={LogoP} alt="" />
      </div>

    </div>
  )
}

export default Educacion
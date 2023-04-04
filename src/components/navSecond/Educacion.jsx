import React from 'react'
import LogoP from '../../assets/img/logoP.png'
import LogoU from '../../assets/img/logoU.png'

function Educacion() {
  return (
    <div className='divEducation'>
      <div>
        <h1>Ingeniera Industrial.</h1>
        <h3>Escuela Colombiana de Ingeniería <br />Julio Garavito.</h3>
        <h5>Bogotá, D.C.</h5>
        <img src={LogoU} alt="" />
      </div>
      <div>
        <h1>Desarrolladora web full stack.</h1>
        <h3>Prográmate Academy <br />Educamas</h3>
        <h5>Bogotá, D.C.</h5>
        <img src={LogoP} alt="" />
      </div>

    </div>
  )
}

export default Educacion
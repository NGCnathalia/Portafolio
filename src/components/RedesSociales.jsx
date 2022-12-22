import React from 'react'
import linkedIn from  '../assets/img/Linkedin.png'
import gitHub from '../assets/img/gitHub.png'

function RedesSociales() {
  return (
    <div>RedesSociales
      <img src={linkedIn} alt="" />
      <a href="https://www.linkedin.com/in/nathalia-garc%C3%ADa-cruz-524b42205/">Ver perfil de LinkedIn</a>
      <img src={gitHub} alt="" />
      <a href="https://github.com/NGCnathalia?tab=repositories">Ir a gitHub</a>
    </div>
  )
}

export default RedesSociales
import React from 'react'
import linkedIn from  '../../assets/img/Linkedin.png'
import gitHub from '../../assets/img/gitHub.png'

function RedesSociales() {
  return (
    <div className='divRedesSociales'>
      
      <a href="https://www.linkedin.com/in/nathalia-garc%C3%ADa-cruz-524b42205/" target="_blank" rel="noopener noreferrer"><img src={linkedIn}  alt="" /></a>
      
      <a href="https://github.com/NGCnathalia?tab=repositories" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="" /></a>
      
    </div>
  )
  }

export default RedesSociales
import React from 'react'
import htmlImg from '../assets/img/htmlImg.png'
import cssImg from '../assets/img/cssImg.png'
import jsImg from '../assets/img/javaScriptImg.png'
import bootstrapImg from '../assets/img/bootstrapImg.png'
import reactImg from '../assets/img/reactImg.png'
function Tecnologias() {
  return (
    <div>
      <div className='divTecnologias'>
        <div>
          <img src={htmlImg} alt="HTML" />
          <h6>Html</h6>
        </div>
        <div>
          <img src={cssImg} alt="CSS" />
          <h6>Css</h6>
        </div>
        <div>
          <img src={jsImg} alt="javaScript" />
          <h6>JavaScript</h6>
        </div>
        <div>
          <img src={bootstrapImg} alt="BOOTSTRAP" />
          <h6>Bootstrap</h6>
        </div>
        <div>
          <img src={reactImg} alt="REACT" />
          <h6>React</h6>
        </div>
      </div>

    </div>
  )
}

export default Tecnologias
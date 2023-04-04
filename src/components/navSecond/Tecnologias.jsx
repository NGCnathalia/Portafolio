import React from 'react'
import htmlImg from '../../assets/img/htmlImg.png'
import cssImg from '../../assets/img/cssImg.png'
import jsImg from '../../assets/img/javaScriptImg.png'
import bootstrapImg from '../../assets/img/bootstrapImg.png'
import reactImg from '../../assets/img/reactImg.png'
import mongoDB from '../../assets/img/mongoDB.png'
import nodeJs from '../../assets/img/nodeJs.png'
import mySQL from '../../assets/img/mySQL.svg'

function Tecnologias() {
  return (
    <div>
      <div className='divTecnologias'>
        <h4>Tecnologías Frontend</h4>
        <div className='divFront'>
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

        <h4>Tecnologías Backend</h4>
        <div className='divBack'>
          <div>
            <img src={nodeJs} alt="nodeJs" />
            <h6>nodeJs</h6>
          </div>
          <div>
            <img src={mySQL} alt="mySQL" />
            <h6>mySQL</h6>
          </div>
          <div>
            <img src={mongoDB} alt="mongoDB" />
            <h6>mongoDB</h6>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Tecnologias
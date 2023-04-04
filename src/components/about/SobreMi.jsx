import React from 'react'
import '../about/about.css'
import foto from '../../assets/img/foto.jpg'
import NavSecond from '../navSecond/NavSecond'

function SobreMi() {
  return (
    <div className='divSobreMi'>
        <div className='seccion'>
            <img className='foto' src={foto} alt="foto Nathalia" />
            <div className='contenidoSeccion'>
                <h1>
                    SOBRE MI
                </h1>
                <p>
                   Ingeniera industrial con conocimientos en desarrollo web full stack, metodologías agiles (Scrum), JavaScript, React, Node Js, HTML, CSS, Bootstrap y Figma. Mujer caracterizada por su autogestión, capacidad de análisis, trabajo en equipo, adaptación al cambio, comunicación efectiva y solución de problemas.

                </p>
            </div>

        </div>
        <div className='seccionNav'>
            <NavSecond/>
        </div>
    </div>
  )
}

export default SobreMi
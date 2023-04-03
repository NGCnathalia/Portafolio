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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ad. Aspernatur, velit tempore quidem quae incidunt culpa. Aperiam impedit voluptatum deserunt quos fugiat dicta sunt, dolor maiores optio fugit. Iure?elit. Iusto, ad. Aspernatur, velit tempore quidem quae incidunt culpa. Aperiam impedit
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
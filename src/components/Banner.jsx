import React from 'react'
import logo1 from '../assets/img/logo.png'
import linkedin from '../assets/img/Linkedin.png'
import gitHub from '../assets/img/gitHub.png'

function Banner() {
    return (
        <div className='banner'>
            <div className='inf'>
                <h1>
                Soy Nathalia Garcia
                </h1>
                <h2>
                Desarrolladora Web Full Stack
                </h2>
                <div className='divRedes'>
                    <button className='btnRedes'><img src={linkedin} alt="linkeind" /></button>
                    <button className='btnRedes'><img src={gitHub} alt="gitHub" /></button>
                    
                </div>
            </div>
            <img className='fotoPerfil' src={logo1} alt="mi carita" />
        </div>
    )
}

export default Banner
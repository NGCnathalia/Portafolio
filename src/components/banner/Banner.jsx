import React from 'react'
import '../banner/banner.css'
import logo1 from '../../assets/img/logo.png'
import linkedIn from '../../assets/img/Linkedin.png'
import gitHub from '../../assets/img/gitHub.png'

function Banner() {
    return (
        <div className='banner'>
            <div className='inf'>
                <h1>
                Soy Nathalia Garcia Cruz
                </h1>
                <h2>
                Desarrolladora Web Full Stack
                </h2>
                <div className='divRedes'>
                <a href="https://www.linkedin.com/in/nathalia-garc%C3%ADa-cruz-524b42205/" target="_blank" rel="noopener noreferrer"><img src={linkedIn}  alt="" /></a>
                <a href="https://github.com/NGCnathalia?tab=repositories" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="" /></a>
                    
                </div>
            </div>
            <img className='fotoPerfil' src={logo1} alt="mi carita" />
        </div>
    )
}

export default Banner
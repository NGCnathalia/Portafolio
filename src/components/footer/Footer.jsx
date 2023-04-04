import React from 'react'
import '../footer/footer.css'
import logo1 from '../../assets/img/logo.png'
import linkedIn from '../../assets/img/Linkedin.png'
import gitHub from '../../assets/img/gitHub.png'

function Footer() {
    return (
        <footer>
            <div className='divLogo1'>
                <img src={logo1} alt="logo" />
                <h6>
                    Portafolio
                </h6>
            </div>
            <div className='divRedesF'>
                <a href="https://www.linkedin.com/in/nathalia-garc%C3%ADa-cruz-524b42205/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="" /></a>

                <a href="https://github.com/NGCnathalia?tab=repositories" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="" /></a>
            </div>
            <div>
                <h6>@create by Nathalia</h6>
            </div>
        </footer>

    )
}

export default Footer
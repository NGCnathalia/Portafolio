import React from 'react'
import '../footer/footer.css'
import logo1 from '../../assets/img/logo.png'
import linkedin from '../../assets/img/Linkedin.png'
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
                    <button className='btnRedes'><img src={linkedin} alt="linkeind" /></button>
                    <button className='btnRedes'><img src={gitHub} alt="gitHub" /></button>
                </div>
            <div>
                <h6>@create by Nathalia</h6>
            </div>
        </footer>

    )
}

export default Footer
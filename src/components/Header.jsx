import React from 'react';
import logo1 from '../assets/img/logo.png'
import Nav from './nav';
import Btn from './Btn';
function Header() {
    return (
        <header>
            <div className='divLogo'>
                <img src={logo1} alt="logo" />
                <h1>
                    Portafolio
                </h1>
            </div>
            <Nav />
            <Btn/>
        </header>

    )

}

export default Header

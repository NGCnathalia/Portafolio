import React, { useState } from 'react'
import '../header/header.css'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className='divNav'>
      <div className='menu-btn' onClick={handleMenuClick}>
        <div className='menu-btn__burger'></div>
      </div>
      <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
        <li><a href="#Inicio" onClick={handleMenuClick}>Inicio</a></li>
        <li><a href="#SobreMi" onClick={handleMenuClick}>Sobre mi</a></li>
        <li><a href="#Proyectos" onClick={handleMenuClick}>Proyectos</a></li>
        <li><a href="#Contact" onClick={handleMenuClick}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Nav

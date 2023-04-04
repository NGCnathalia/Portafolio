import React from 'react'
import '../contact/contact.css'
import ubication from '../../assets/img/Ubicacion.png'
import { FormContact } from '../formulario/FormContact'
function Contact() {
    return (
        <div className='divContact'>
            <div>
                <h1>
                    INFORMACIÓN DE CONTACTO
                </h1>
            </div>
            <div className='divContactContent'>
                <div className='divContactText'>
                    <h2>TRABAJEMOS JUNTOS</h2>
                    <p>Si tiene un proyecto en mente, me encantaría hacer parte de su equipo de desarrollo, no dude en ponerse en contacto conmigo a través del formulario independientemente del tema.</p>
                    <div className='divUbication'>
                        <img src={ubication} alt="ubicacion" />
                        <h6> Bogotá, Colombia.</h6>
                    </div>
                </div>
                <div className='divForm'>
                    <FormContact />
                </div>
            </div>

        </div>
    )
}

export default Contact
import React from 'react'
import ubication from '../assets/img/Ubicacion.png'
import { FormContact } from './formulario/FormContact'
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
                    <h2>Titulo</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum natus consequuntur fugit similique dicta et blanditiis rerum voluptates, delectus magnam. Inventore quod nulla rem voluptatem, dolorum id sapiente quas nihil.</p>
                    <div className='divUbication'>
                        <img src={ubication} alt="ubicacion" />
                        <h6> Bogotá, Colombia.</h6>
                    </div>
                </div>
                <div>
                    <h5>Formulario</h5>
                    <FormContact />
                </div>
            </div>

        </div>
    )
}

export default Contact
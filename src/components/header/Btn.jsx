import React from 'react'
import '../header/header.css'

function Btn() {
    
    const mensaje = "Buen día, me encuentro interesad@ en trabajar con usted"
    const url = `https://api.whatsapp.com/send?phone=573195113013&text=${encodeURIComponent(mensaje)}`
   
    return (
        <div>
            <button className='divBtn'>
                <a href={url} target="_blank">Hablemos</a>
            </button>
        </div>
    )
}

export default Btn
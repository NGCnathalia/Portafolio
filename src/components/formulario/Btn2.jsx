import React from 'react'
import '../formulario/formContact.css'
import Swal from 'sweetalert2'

function Btn2() {

    const handleClick = () => {
        Swal.fire('Mensaje enviado', '', 'success');        
    }

    return (
        <div className='divBtn2'>
            <button type="submit" className='divBtn' onClick={handleClick}>
                Enviar Mensaje
            </button>
            
        </div>
    )
}

export default Btn2

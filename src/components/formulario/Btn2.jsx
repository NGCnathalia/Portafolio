import React from 'react'
import '../formulario/formContact.css'
import Swal from 'sweetalert2'

function Btn2({ formikIsValid, handleClick }) {

    const handleButtonClick = () => {
        if (!formikIsValid) {
            Swal.fire('Error', 'Por favor, llene todos los campos.', 'error');
        } else {
            handleClick();
        }      
    }

    return (
        <div className='divBtn2'>
            <button type="submit" className='divBtn' onClick={handleButtonClick}>
                Enviar Mensaje
            </button>
        </div>
    )
}

export default Btn2

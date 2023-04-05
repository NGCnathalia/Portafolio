import React, { useRef } from 'react'
import '../formulario/formContact.css'
import { Form, Formik } from 'formik'
import { InputsField } from './InputsField'
import Btn2 from './Btn2'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

export const FormContact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();
    const formValues = Object.fromEntries(new FormData(e.target).entries());
    if (!Object.values(formValues).every(Boolean)) {
      Swal.fire('Por favor complete todos los campos', '', 'warning');
      return;
    }
  
    emailjs.sendForm('service_i0itial', 'template_xivgi9f', form.current, 'pC6960epC_S05YpDK')
    .then((result) => {
      if (result.text === 'OK') {
        Swal.fire('Mensaje enviado', '', 'success');
        e.target.reset();
      } else {
        Swal.fire('Ha ocurrido un error. Por favor intente nuevamente', '', 'error');
      }
    }, (error) => {
        Swal.fire('Ha ocurrido un error. Por favor intente nuevamente', '', 'error');
    });
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          Asunto: '',
          Mensaje: '',
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          resetForm()
        }}
      >
        {formik => (
          <Form ref={form} onSubmit={sendEmail}>
            <InputsField label="Nombre" name="name" type="text" placeholder="Ingrese su nombre completo." required />
            <InputsField label="Correo electrónico" name="email" type="email" placeholder="Ingrese su correo electrónico." required/>
            <InputsField label="Asunto" name="Asunto" type="text" placeholder="Ingrese el asunto." required />
            <InputsField label="Mensaje" name="Mensaje" type="text" placeholder="Ingrese su mensaje." required />
            <Btn2 formikIsValid={formik.isValid} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

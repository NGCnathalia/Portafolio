import React from 'react'
import '../formulario/formContact.css'
import { Form, Formik } from 'formik'
import { InputsField } from './InputsField'
import Btn2 from './Btn2'
export const FormContact = () => {
    return (
        <div>
            <Formik initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                }}  onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    resetForm()}} >
                {formik => (
                    <Form>
                        <InputsField label="Nombre" name="name" type="text" placeholder="Ingrese su nombre completo." />
                        <InputsField label="Correo electrónico" name="email" type="email" placeholder="Ingrese su correo electrónico." />
                        <InputsField label="Asunto" name="Asunto" type="text" placeholder="Ingrese el asunto." />
                        <InputsField label="Mensaje" name="Mensaje" type="text" placeholder="Ingrese su mensaje." />
                        <Btn2/>
                    </Form>
                )}
            </Formik>
        </div>

    )
}
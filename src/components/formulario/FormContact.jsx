import React from 'react'
import { Form, Formik } from 'formik'
import { InputsField } from './InputsField'
import Btn2 from '../Btn2'
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
                        <InputsField label="Nombre" name="name" type="text" placeholder="Add name" />
                        <InputsField label="Correo electrónico" name="email" type="email" placeholder="Please add a email" />
                        <InputsField label="Asunto" name="Asunto" type="text" placeholder="Subject" />
                        <InputsField label="Mensaje" name="Mensaje" type="text" placeholder="Message           " />
                        <Btn2/>
                    </Form>
                )}
            </Formik>
        </div>

    )
}
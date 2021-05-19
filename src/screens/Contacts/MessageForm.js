import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
    formContainer: {
        width: '80%',
        margin: 'auto',
        marginBottom: '1rem'
    },
    submitButton: {
        width: '20%',
        marginLeft: '40%'
    }
})
const formValues = {
    name: '',
    email: '',
    message: '',
}

const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email('Please, enter valid email'),
    message: yup.string().required().min(100, 'Please, enter at least 100 characters'),
});
const MessageForm = () => {
    const classes = useStyles()
    const [isMessageSent, setIsMessageSent] = useState(false)
    const [error, setError] = useState(false)
    const handleFromSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            axios.post('https://email-js-api.herokuapp.com/sendemail', values)
                .then(() => { setIsMessageSent(true); resetForm({}) })
                .catch(err => { if (err) setError(true) })
            setSubmitting(false)
        }, 1000)
    }
    return (
        <Formik
            onSubmit={handleFromSubmit}
            validationSchema={validationSchema}
            initialValues={formValues}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                touched,
                isSubmitting,
                errors,
            }) => (

                <Form className={classes.formContainer} noValidate onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Control
                            name='name'
                            placeholder='Name'
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={errors.name && touched.name}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name='email'
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={errors.email && touched.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                        <Form.Text className='text-muted'>
                            I will not share this email with anyone else
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            name='message'
                            as="textarea"
                            rows={4}
                            placeholder='Message'
                            value={values.message}
                            onChange={handleChange}
                            isInvalid={errors.message && touched.message}

                        />
                        {values.message.length < 100 &&
                            <Form.Text className='text-muted'>
                                Characters required: {100 - values.message.length}
                            </Form.Text>
                        }
                        <Form.Control.Feedback type="invalid">
                            {errors.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        className={classes.submitButton}
                        type='submit' disabled={isSubmitting}
                    >
                        Send
                    </Button>
                    <Alert show={isMessageSent} variant='success' onClose={() => setIsMessageSent(false)} dismissible transition={false}>
                        Message Sent
                    </Alert>
                    <Alert show={error} variant='danger' onClose={() => setError(null)} dismissible transition={false} >
                        Oops... something is wrong try using links below, or message me later
                    </Alert>
                </Form>

            )}

        </Formik>
    )
}
export default MessageForm
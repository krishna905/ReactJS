import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phone: ['', '']

}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required !'),
    email: Yup.string().email('Invalid email format !').required('Required !'),
    channel: Yup.string().required('Required !'),
    address: Yup.string().required('Required !'),
    comments: Yup.string().required('Required !'),


})

function YtFormUpdated() {

    // console.log('Form values', formik.errors)
    // console.log(' visited fields', formik.touched)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form >
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field
                        type='text'
                        id='name'
                        name='name'
                    //{...formik.getFieldProps('name')}
                    />
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                    //{...formik.getFieldProps('email')}
                    />
                    <ErrorMessage name='email' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                    //{...formik.getFieldProps('channel')}
                    />
                    <ErrorMessage name='channel'>
                        {
                            (errorMsg) => {
                                return (<div className='error'>{errorMsg}</div>)
                            }

                        }
                    </ErrorMessage>
                </div>
                <div className='form-control'>
                    <label htmlFor="comments">Comments</label>
                    <Field
                        as="textarea" // component="textarea"
                        id="comments"
                        name="comments"
                    />
                    <ErrorMessage name="comments" component={TextError} />

                </div>
                <div className='form-control'>
                    <label htmlFor="address">Address</label>
                    <Field name="address" >
                        {
                            (props) => {
                                const { field, form, meta } = props
                                console.log('Rendering props', props)
                                return (
                                    <div>
                                        <input type="text" id='address' {...field} />
                                        {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                                    </div>
                                )

                            }
                        }
                    </Field>
                </div>

                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook Profile</label>
                    <Field
                        type='text'
                        id='facebook'
                        name='social.facebook'
                    />
                    <ErrorMessage name='social.facebook' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter Profile</label>
                    <Field
                        type='text'
                        id='twitter'
                        name='social.twitter'
                    />
                    <ErrorMessage name='social.twitter' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='primaryPh'>Primary phn num</label>
                    <Field
                        type='text'
                        id='primaryPh'
                        name='phone[0]'
                    />
                    <ErrorMessage name='primaryPh' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='secondaryPh'>Secondary phn num</label>
                    <Field
                        type='text'
                        id='secondaryPh'
                        name='phone[1]'
                    />
                    <ErrorMessage name='secondaryPh' component={TextError} />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YtFormUpdated

//using getFieldProps func, we can advantage of making event changes in particular input  but  spread operator is necessary
//handleChange, handleBur,value wil  be handled solely by getFieldProps func itself
//Formik is replacement to useFormik hook, which accepts initialValues, validationSchema, and onSubmit handler as props

//Form componnet replaces regualr form tag...wil take care of onSubmit helper method ...wtver we act on form directly...Form wil take care of it

//formik acts as context provider components, tat provoides helper methods and properties

//ErrorMessage  component  wil take care of rendering the error message of partuicular field by help of name props passed in that component
//wil throw only if visited

//as prop defines the type of input..textarea, select etc

//{...field} will take care of name, value, handleChange, handleBlur attributes
//{meta }for error
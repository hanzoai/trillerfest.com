import React from 'react'
import { Formik, Form, Field } from 'formik'

const onSubmit = (values) => {
  console.log(values)
}

const validateEmail = (value) => {
  let error
  if (!value) {
    error = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address'
  }
  return error
}

const validateTelephone = (value) => {
  let error
  if (!value) {
    error = 'Required'
  } else if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/i.test(value)) {
    error = 'Invalid phone number'
  }
  return error
}

export default (props) => (
  <div className='sign-up' >
    <div className='sign-up-stage' >
      <div className='form-outer'>
        <h2>Sign up for promotions and more</h2>
        <Formik
          initialValues={{ email: '', telephone: '' }}
          onSubmit={ onSubmit }
        >
          {({
            errors,
            touched,
            isValidating,
          }) => (
            <Form>
              <div className='field-outer'>
                <Field name='email' validate={validateEmail} placeholder='email'/>
                {errors.email && touched.email && <p className='error-message'>{errors.email}</p>}
              </div>
              <div className='field-outer'>
                <Field name='telephone' validate={validateTelephone} placeholder='phone' />
                {errors.telephone && touched.telephone && <p className='error-message'>{errors.telephone}</p>}
              </div>
              <button type="submit">Get Updates</button>
            </Form>
          )}
        </Formik>
      </div>
      <div className='logos-outer'>
        <div className='logo-card logo-card-triller'>
          <h3>Download App</h3>
          <a href="https://itunes.apple.com/us/app/triller-social-video-platform/id994905763">
            <img src='assets/triller-logo-245x245.png' width='245px' height='245px' alt='triller' />
          </a>
        </div>
        <div className='logo-card logo-card-triller'>
          <h3>Media Partner</h3>
          <a href="https://complex.com">
            <img src='assets/com-plex-logo-275x246.png' width='275px' height='246px' alt='com plex' />
          </a>
        </div>
      </div>
    </div>
  </div>
)

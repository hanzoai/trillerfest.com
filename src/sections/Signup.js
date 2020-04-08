import React from 'react'
import { Formik, Form, Field } from 'formik'

export default (props) => (
  <div className='sign-up' >
    <div className='sign-up-stage' >
      <div className='form-outer'>
        <h2>Sign up for promotions and more</h2>
        <Formik
          initialValues={{ emailOrPhone: ''}}
          onSubmit={ onSubmit }
        >
          {({
            errors,
            touched,
            isSubmitting
          }) => {
            const invalid = (errors.emailOrPhone && touched.emailOrPhone)
            const buttonParam = (invalid || isSubmitting) ? {disabled: true} : {}

            return (
            <Form>
              <div className='field-outer'>
                <Field name='emailOrPhone' validate={validateEither} placeholder='email or phone'/>
                <p className={`error-message ${(invalid ? 'has-error' : 'no-error')}`}>{`*${errors.emailOrPhone}`}</p>
              </div>
              <button type="submit" {...buttonParam}>{(isSubmitting) ? 'sending...' : 'Get Updates'}</button>
            </Form>
          )}}
        </Formik>
      </div>
      <div className='logos-outer'>
        <div className='logo-card logo-card-triller'>
          <h3>Download App</h3>
          <a href="https://www.triller.co">
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

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODYzNjU2MDIsInN1YiI6Iks4VDFYb08ydTAiLCJqdGkiOiJCT3VPVkp1VElqZyIsIm5hbWUiOiJsaXZlLXB1Ymxpc2hlZC1rZXkiLCJiaXQiOjQ1MDM2MTcwNzU2NzUxNzJ9.G6o7vniZ4fKqJk_xXw7EkfX0Va4KIiQDwp5l0TBwEwg'
const endpoint = 'https://api.hanzo.ai/form/lDuQEQ99F02vmn/subscribe'

const onSubmit = (data, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    window.fetch(endpoint, {
      method: "POST",
      headers: {
        'Authorization': token,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({
        'email': data.emailOrPhone,
      })
    })
    .then(() => {console.log("form success :) ")})
    .catch(error => console.log(error))
    .finally(() => {
      setSubmitting(false)
      resetForm({})
    })
  }, 600);
}

const validateEither = (value) => {
  let error
  if (!value) {
    error = 'email or phone is required'
  }
  else if (
    !/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/i.test(value)
    &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ) {
    error = 'not a valid email or phone number'
  }
  return error
}

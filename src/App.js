import React from 'react'
import Charities from './sections/Charities'
import Signup from './sections/Signup'

import './scss/styles.scss'


export default () => {
  return (
    <div className='stage'>
      <div className='hero' />
      <Signup />
      <Charities />
      <div className='jay-pharoah' />
      <div className='isnta' />
      <div className='footer' />
    </div>
  )
}

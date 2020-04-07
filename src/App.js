import React from 'react'
import Charities from './sections/Charities'
import Signup from './sections/Signup'
import JayPharoah from './sections/JayPharoah'

import './scss/styles.scss'


export default () => {
  return (
    <div className='stage'>
      <div className='hero' />
      <Signup />
      <Charities />
      <JayPharoah />
      <div className='jay-pharoah' />
      <div className='isnta' />
      <div className='footer' />
    </div>
  )
}

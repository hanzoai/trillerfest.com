import React from 'react'

import Hero from './sections/Hero'
import Charities from './sections/Charities'
import Signup from './sections/Signup'
import JayPharoah from './sections/JayPharoah'
import InstaFeed from './sections/InstaFeed'
import Footer from './sections/Footer'

import './scss/styles.scss'


export default () => {
  return (
    <div className='stage'>
      <Hero />
      <Signup />
      <Charities />
      <JayPharoah />
      <InstaFeed />
    </div>
  )
}

/*
      <Footer />
*/
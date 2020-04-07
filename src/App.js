import React from 'react'

import Hero from './sections/Hero'
import Charities from './sections/Charities'
import Signup from './sections/Signup'
import JayPharoah from './sections/JayPharoah'
import InstaFeed from './sections/InstaFeed'
import Footer from './sections/Footer'
import analytics from './analytics'

import './scss/styles.scss'

analytics.init()
analytics.pageview()

export default () => {
  return (
    <div className='stage'>
      <Hero />
      <Signup />
      <Charities />
      <JayPharoah />
      <InstaFeed />
      <Footer />
    </div>
  )
}

import React from 'react'

import Hero from './sections/Hero'
import Charities from './sections/Charities'
import Signup from './sections/Signup'
import Artists from './sections/Artists'
import JayPharoah from './sections/JayPharoah'
import InstaFeed from './sections/InstaFeed'
import Footer from './sections/Footer'
import Trailer from './sections/Trailer'
import analytics from './analytics'

import './scss/styles.scss'

analytics.init()
analytics.pageview()

export default () => {
  return (
    <div className='stage'>
      <Hero />
      <Charities />
      <Signup />
      <Artists />
      <JayPharoah />
      <Trailer />
      <InstaFeed />
      <Footer />
    </div>
  )
}

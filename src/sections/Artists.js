import React from 'react'
import Watch from '../components/Watch'

export default (props) => (
  <div className='artists'>
    <main>
      <img className='lineup' src='assets/FB_FRIDAYlineup_web.png' alt='lineup'/>
      <img className='artist-names' src='assets/artists.png' alt='artists'/>
      <div className='content-outer'>
        <Watch />
      </div>
    </main>
  </div>
)

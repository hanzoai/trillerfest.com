import React from 'react'
import Watch from '../components/Watch'

export default (props) => (
  <div className='artists'>
    <main>
      <img className='artist-names' src='assets/artists.png' alt='artists'/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img className='lineup' src='assets/sunday.png' alt='lineup'/>
      <img className='lineup' src='assets/saturday.png' alt='lineup'/>
      <img className='lineup' src='assets/friday.png' alt='lineup'/>
      <div className='content-outer'>
        <Watch />
      </div>
    </main>
  </div>
)

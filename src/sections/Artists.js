import React from 'react'
import YouTubeSubscribe from '../components/YouTubeSubscribe'

export default (props) => (
  <div className='artists'>
    <main>
      <img className='artist-names' src='assets/artists.png' alt='artists'/>
      <div className='content-outer'>
        <YouTubeSubscribe />
      </div>

    </main>
  </div>
)

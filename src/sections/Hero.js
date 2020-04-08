import React from 'react'
import YouTubeSubscribe from '../components/YouTubeSubscribe'

export default (props) => (
  <div className='hero'>
    <main>
      <img className='logo' src='assets/trillerfest-logo-735x276.png' alt='tf'/>
      <div className='content-outer'>
        <YouTubeSubscribe />
        <div className='copy-outer'>
        <p className='line-1'>
            3 days of quarantine sessions
        </p>
        <p className='line-2'>
          Fri 4/10 - Sun 4/12
        </p>
        <p className='line-3'>
          the largest virtual music festival
        </p>
        </div>
      </div>

    </main>
  </div>
)

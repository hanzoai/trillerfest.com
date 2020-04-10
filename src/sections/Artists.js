import React from 'react'
import YouTubeSubscribe from '../components/YouTubeSubscribe'

export default (props) => (
  <div className='artists'>
    <main>
      <img className='lineup' src='assets/FB_FRIDAYlineup_web.png' alt='lineup'/>
      <img className='artist-names' src='assets/artists.png' alt='artists'/>
      <div className='content-outer'>
        <a href='https://www.youtube.com/c/trillervids?sub_confirmation=1' target='_blank'>
          <img className='watch-button' src='assets/yt-watch.png' alt='Watch on Youtube'/>
        </a>
        <a href='https://www.twitch.tv/triller' target='_blank'>
          <img className='watch-button' src='assets/twitch-watch.png' alt='Watch on Twitch'/>
        </a>
        <a href='https://www.caffeine.tv/Triller' target='_blank'>
          <img className='watch-button' src='assets/caffeine-watch.png' alt='Watch on Caffeine'/>
        </a>
      </div>
    </main>
  </div>
)

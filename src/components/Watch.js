import React from 'react'
import analytics from '../analytics'


import './youtube-subscribe.scss'

const links = {
  youtube:  'https://www.youtube.com/c/trillervids?sub_confirmation=1',
  twitch:   'https://www.twitch.tv/triller',
  caffeine: 'https://www.caffeine.tv/Triller',
}

const onClick = (platform) => {
  analytics.watch(platform)
  window.open(links[platform], '_blank')
}

export default (props) => (
  <>
    <a href='#' onClick={()=>{onClick('youtube')}}>
      <img className='watch-button' src='assets/yt-watch.png' alt='Watch on Youtube'/>
    </a>
    <a href='#' onClick={()=>{onClick('twitch')}}>
      <img className='watch-button' src='assets/twitch-watch.png' alt='Watch on Twitch'/>
    </a>
    <a href='#' onClick={()=>{onClick('caffeine')}}>
      <img className='watch-button' src='assets/caffeine-watch.png' alt='Watch on Caffeine'/>
    </a>
  </>
)

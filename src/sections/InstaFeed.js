import React from 'react'

import YouTubeSubscribe from '../components/YouTubeSubscribe'
import InstagramMatrix from '../components/InstagramMatrix'

import useWindowDimensions from '../util'

export default (props) => {
  const { width } = useWindowDimensions();
  return (
  <div className='instafeed' >
    <h2>Triller Insta Feed</h2>
    <InstagramMatrix size={(width > 451) ? 150 : 320} />

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
  </div>
)}

/*
    <a href="https://instagram.com/trillervids">
      <img src='assets/insta-whole-1109x1068.png' width='1109px' height='1068px' alt='insta' className='insta'/>
    </a>
*/

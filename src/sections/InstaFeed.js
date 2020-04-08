import React from 'react'

import YouTubeSubscribe from '../components/YouTubeSubscribe'
import InstagramMatrix from '../components/InstagramMatrix'


export default (props) => (
  <div className='instafeed' >
    <h2>Triller Insta Feed</h2>
    <InstagramMatrix size={150} />
    <YouTubeSubscribe />
  </div>
)

/* 
    <a href="https://instagram.com/trillervids">
      <img src='assets/insta-whole-1109x1068.png' width='1109px' height='1068px' alt='insta' className='insta'/>
    </a>
*/

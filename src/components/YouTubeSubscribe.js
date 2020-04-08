import React from 'react'
import analytics from '../analytics'


import './youtube-subscribe.scss'
const subscribeLink = 'https://www.youtube.com/c/trillervids?sub_confirmation=1'


const onClick = () => {
  analytics.subscribe()
  window.open(subscribeLink, '_blank')
}

export default (props) => (
  <div className='subscribe' onClick={onClick} />
)

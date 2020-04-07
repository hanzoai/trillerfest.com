import React from 'react'
import analytics from '../analytics'

const subscribeLink = 'https://www.youtube.com/c/trillervids?sub_confirmation=1'

export default (props) => {

  function onClick() {
    analytics.subscribe()
    window.open(subscribeLink, '_blank')
  }

  return (
    <img className='subscribe' src='assets/ty-subscribe-free-pass.png' alt='tf' width='733px' height='188px' onClick={onClick} />
  )
}

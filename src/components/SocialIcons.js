import React from 'react'

import { SocialIcon } from 'react-social-icons';

import './social-icons.scss'

export default (props) => {

  return (
    <div className='social-icons-outer'>
      <SocialIcon network="facebook"  url="https://facebook.com/trillervids"  bgColor='transparent' fgColor='white'/>
      <SocialIcon network="twitter"   url="https://twitter.com/triller"       bgColor='transparent' fgColor='white'/>
      <SocialIcon network="youtube"   url="https://youtube.com/trillervids"   bgColor='transparent' fgColor='white'/>
      <SocialIcon network="instagram" url="https://instagram.com/trillervids" bgColor='transparent' fgColor='white'/>
    </div>
  )
}

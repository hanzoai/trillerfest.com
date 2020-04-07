import React from 'react'

import { SocialIcon } from 'react-social-icons';

import './social-icons.scss'

export default (props) => {

  return (
    <div className='social-icons-outer'>
      <SocialIcon network="facebook" bgColor='transparent' fgColor='white'/>
      <SocialIcon network="twitter"  bgColor='transparent' fgColor='white'/>
      <SocialIcon network="youtube"  bgColor='transparent' fgColor='white'/>
      <SocialIcon network="instagram"  bgColor='transparent' fgColor='white'/>
    </div>
  )
}
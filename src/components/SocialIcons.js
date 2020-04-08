import React from 'react'

import { SocialIcon } from 'react-social-icons';

import './social-icons.scss'

export default (props) => {

  let iconProps = (props.white) ? {
    bgColor: 'transparent',
    fgColor: 'white' 
  } : {fgColor: 'white'}

  if (props.size) {
    iconProps = Object.assign(iconProps, {width: props.size, height: props.size})
  }


  return (
    <div className='social-icons-outer'>
      <SocialIcon network="facebook"  url="https://facebook.com/trillervids"  {...iconProps} />
      <SocialIcon network="twitter"   url="https://twitter.com/triller"       {...iconProps} />
      <SocialIcon network="youtube"   url="https://youtube.com/trillervids"   {...iconProps} />
      <SocialIcon network="instagram" url="https://instagram.com/trillervids" {...iconProps} />
    </div>
  )
}

import React from 'react'

import './instagram-matrix.scss'

const data = [
  'p/B-sQOAaFQeH/',
  'p/B-r-EkTHHS2/',
  'p/B-qTw9_nMPU/',
  'p/B-nalv2IKE2/',
  'p/B-lVINmo5hb/',
  'p/B-gK4p0H8Yg/',
  'p/B-fctSin_Of/',
  'p/B94mBb5FXbh/',
  'p/B9j3N0NlQnW/'
]

const URL_PREFIX = 'https://www.instagram.com/'

const URL_POSTFIX = 'media/?size='

const SIZES = {
  150: 't',
  320: 'm'
}

export default ({ size }) => (
  <div className='insta-outer'>
    {data.map((d) => {
      return (
        <a href={`${URL_PREFIX}${d}`}>
          <img src={`${URL_PREFIX}${d}${URL_POSTFIX}${SIZES[size]}`} width={size} height='auto' alt='img'/>
        </a>
      )
    })}
  </div>
)

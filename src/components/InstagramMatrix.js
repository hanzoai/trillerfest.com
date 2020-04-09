import React from 'react'

import './instagram-matrix.scss'

const posts = [
  ['B-fctSin_Of'],
  ['B-u9IwdIR2D'],
  ['B-nalv2IKE2'],
  ['B-qTw9_nMPU'],
  ['B-r-EkTHHS2'],
  ['B-ueDzhIYfO'],
  ['B9AkhjnoE7K'],
  ['B94mBb5FXbh'],
  ['B9j3N0NlQnW'],
]


export default ({ size }) => (
  <div className='insta-outer'>
    {posts.map((id) => {
      const url = `https://www.instagram.com/p/${id}`
      const img = `/assets/insta/${id}.jpg`

      return (
        <a href={url}>
          <div className='thumbnail'>
            <img src={img} width={size} height='auto' alt='img'/>
          </div>
        </a>
      )
    })}
  </div>
)

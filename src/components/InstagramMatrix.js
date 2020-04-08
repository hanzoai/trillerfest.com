import React from 'react'

import './instagram-matrix.scss'


const data = [
  ['https://www.instagram.com/p/B-fctSin_Of/', 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/91609984_1580135962135749_1541846223956553576_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=j4NW6TwjKZ8AX-qQQHN&oh=d4b96d2416dbac7594b2db97792a191b&oe=5E8F8BA6'],
  ['https://www.instagram.com/p/B-lVINmo5hb/', 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/c157.0.405.405a/92028385_314169749553177_4539015575953124889_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=GTBuSxRfFLcAX9Uwzo_&oh=5538caf197339a34268f7b60a1b79253&oe=5E8F643F'],
  ['https://www.instagram.com/p/B-nalv2IKE2/', 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/c157.0.405.405a/92725914_257891338707469_7043711247048977085_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=9tv1LDgf3kUAX_Yidlz&oh=9645a037b5008b183eb3cc3584586992&oe=5E8FBE66'],
  ['https://www.instagram.com/p/B-qTw9_nMPU/', 'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/c157.0.405.405a/92184895_2278897845750066_559223455377862389_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=fkfy0qWspq0AX9YMDQt&oh=09795968e9c869bf72e5105fcdc55676&oe=5E8F8C93'],
  ['https://www.instagram.com/p/B-r-EkTHHS2/', 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/92034447_2867761013307430_4912295062463930653_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=CmVCNr5_dCYAX8xPYse&oh=ccc9413a0727c66ebabc623775af92fe&oe=5EB4E3EA'],
  ['https://www.instagram.com/p/B-sQOAaFQeH/', 'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/c157.0.405.405a/92289179_226454791749439_1159289470398648470_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=qepLo1qilIcAX_OKsLp&oh=dd1697e821372aa61ae6aeb7dc387b05&oe=5E8F629D'],
  ['https://www.instagram.com/p/B9AkhjnoE7K/', 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/88210703_185766462709133_5273854634715013940_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=OHeRc6Mg3ScAX_43YMG&oh=24a5605bffaf2fc56e15c3bf74f63d44&oe=5E902338'],
  ['https://www.instagram.com/p/B94mBb5FXbh/', 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/90088157_237775494284413_906290703472193056_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=qrIyaN7UGngAX_fq6Xn&oh=3f9cc5dcd7518911ec7736efad6d6229&oe=5E8F8FA3'],
  ['https://www.instagram.com/p/B9j3N0NlQnW/', 'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/89090680_1494610680700866_8444175657145243426_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=hpR3jPq0PUMAX-HzEN9&oh=3b4e9ffba8b834441ef23cb2c620dfa6&oe=5E8FD239'],
]



export default ({ size }) => (
  <div className='insta-outer'>
    {data.map((d) => {
      let [url, img] = d
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

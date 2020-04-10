import React from 'react'
import YouTubeSubscribe from '../components/YouTubeSubscribe'
import { Zoom } from 'react-slideshow-image'

const slideImages = [
  {
    img: 'assets/artists/SS_AJR.jpg',
  },
  {
    img: 'assets/artists/SS_BLVK-JVCK.jpg',
  },
  {
    img: 'assets/artists/SS_HANNAH.jpg',
  },
  {
    img: 'assets/artists/SS_IDA.jpg',
  },
  {
    img: 'assets/artists/SS_JEREMY-TORRES.jpg',
  },
  {
    img: 'assets/artists/SS_MIGOS.jpg',
  },
  {
    img: 'assets/artists/SS_Omicron.jpg',
  },
  {
    img: 'assets/artists/SS_Paris.jpg',
  },
  {
    img: 'assets/artists/SS_Sulan.jpg',
  },
  {
    img: 'assets/artists/SS_YK-TOON.jpg',
  },
  {
    img: 'assets/artists/SS_wyclef.jpg',
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(slideImages)

const properties = {
  duration: 5000,
  transitionDuration: 600,
  infinite: true,
  indicators: false,
  arrows: false,
  pauseOnHover: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

export default (props) => (
  <div className='hero'>
    <main>
      <Zoom className='hero-slider' {...properties}>
        {
          slideImages.map((img) => (
            <div className='hero-slide' style={{'backgroundImage': `url(${img.img})`}}/>
          ))
        }
      </Zoom>
      <img className='logo' src='assets/trillerfest-logo-735x276.png' alt='tf'/>
      <div className='content-outer'>
        <div className='copy-outer'>
        <p className='line-1'>
            3 days of quarantine sessions
        </p>
        <p className='line-2'>
          Fri 4/10 - Sun 4/12
        </p>
        <p className='line-3'>
          the largest virtual music festival
        </p>
        </div>
        <div className='buttons'>
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

    </main>
  </div>
)

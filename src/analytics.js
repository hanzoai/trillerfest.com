import ReactFB from 'react-facebook-pixel'
import ReactGA from 'react-ga'

function init() {
  ReactFB.init('3098302576886662')
  ReactGA.initialize('UA-163043561-1')
}

function pageview() {
  ReactFB.pageView()
  ReactGA.pageview(window.location.pathname + window.location.search)
}


const labels = {
  caffeine: 'Caffeine',
  twitch:   'Twitch',
  youtube:  'YouTube',
  updates:  'Updates',
}

function watch(platform) {
  ReactGA.event({
    category: 'User',
    action:   `${labels[platform]} Watch`
  })

  if (platform == 'youtube') subscribe(platform)
}

function subscribe(platform) {
  ReactGA.event({
    category: 'User',
    action:   `${labels[platform]} Subscribe`
  })

  ReactFB.track('Subscribe', {
    value: '0.00',
    currency: 'USD',
    predicted_ltv: '0.00',
  })
}

export default {
  init: init,
  pageview: pageview,
  subscribe: subscribe,
  watch: watch,
}

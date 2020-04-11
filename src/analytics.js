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

const partners = {
  nkh: 'No Kid Hungry',
  ram: 'Recording Academy MusiCares',
}

function donate(opt) {
  ReactGA.event({
    category: 'User',
    action:   `${partners[opt]} Donate`
  })

  ReactFB.track('Purchase', {
    value: '0.00',
    currency: 'USD',
    predicted_ltv: '0.00',
  })
}


const platforms = {
  caffeine: 'Caffeine',
  twitch:   'Twitch',
  youtube:  'YouTube',
  updates:  'Updates',
}

function watch(opt) {
  ReactGA.event({
    category: 'User',
    action:   `${platforms[opt]} Watch`
  })

  if (opt == 'youtube') subscribe(opt)
}

function subscribe(opt) {
  ReactGA.event({
    category: 'User',
    action:   `${platforms[opt]} Subscribe`
  })

  ReactFB.track('Subscribe', {
    value: '0.00',
    currency: 'USD',
    predicted_ltv: '0.00',
  })
}

export default {
  init: init,
  donate: donate,
  pageview: pageview,
  subscribe: subscribe,
  watch: watch,
}

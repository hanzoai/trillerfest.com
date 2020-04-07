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

function subscribe() {
  ReactGA.event({
    category: 'User',
    action:   'YouTube Subscribe'
  })

  ReactFB.track('Subscribe', {
    value: '0.00',
    currency: 'USD',
    predicted_ltv: '0.00'
  })
}

export default {
  init: init,
  pageview: pageview,
  subscribe: subscribe,
}

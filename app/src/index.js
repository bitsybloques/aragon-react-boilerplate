import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { AragonApi } from '@aragon/api-react'
import './i18n'
import App from './App'

const reducer = state => {
  if (state === null) {
    return { count: 0, syncing: true }
  }
  return state
}

ReactDOM.render(
  <Suspense fallback="">
    <AragonApi reducer={reducer}>
      <App />
    </AragonApi>
  </Suspense>,
  document.getElementById('root')
)

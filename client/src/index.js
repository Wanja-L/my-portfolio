import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App styles='{background-color: #0C0A3E}' />,
  document.getElementById('root')
)
registerServiceWorker()

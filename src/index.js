import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import * as FBase from './services/firebase'

// Init firebase
FBase.init()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
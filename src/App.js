import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { BrowserRouter, Route } from 'react-router-dom'
// Import page components
import Menu from './Components/Menu'
import Chat from './Pages/Chat'
import Profile from './Pages/Profile'
// End of page components

class App extends Component {

  state = { // Data model of THIS component

  }

  componentDidMount () { // Behavior
    
  }

  render() { // Presentational
    return (
      <div>
        <BrowserRouter>
          <div className="section" style={{ paddingTop: 20 }}>
            <Menu />
            <div style={{ height: 20 }}></div>
            <Route component={Chat} path="/" exact />
            <Route component={Profile} path="/profile" />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
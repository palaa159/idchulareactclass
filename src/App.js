import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
// Import page components
import Menu from './Components/Menu'
import Chat from './Pages/Chat'
import Profile from './Pages/Profile'
// End of page components
import * as FBase from './services/firebase'

class App extends Component {

  state = { // Data model of THIS component
    user: {}
  }

  componentDidMount () { // Behavior
    FBase.autoLogin((x) => {
      this.setState({
        user: x
      })
    })
  }

  async _signIn () {
    const result = await FBase.login()
    console.log(result.user)
    this.setState({
      user: result.user
    })
  }

  render() { // Presentational
    return (
      <div>
        <BrowserRouter>
          <div className="section" style={{ paddingTop: 20 }}>
            <Menu 
              onSignIn={this._signIn.bind(this)}
              user={this.state.user}
            />
            <div style={{ height: 20 }}></div>
            <Route
              render={() => 
                <Chat user={this.state.user} />
              }
              path="/" 
              exact />
            <Route
              render={(props) => <Profile {...props} />}
              path="/profile" />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
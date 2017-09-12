import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
// Import page components
import Menu from './Components/Menu'
import Chat from './Pages/Chat'
import About from './Pages/About'
import ProfileModal from './Components/ProfileModal'
// End of page components
import * as FBase from './services/firebase'
import { Helmet } from 'react-helmet'

class App extends Component {

  state = { // Data model of THIS component
    user: null,
    userId: null,
    isModalActive: true
  }

  componentDidMount () { // Behavior
    // FBase.autoLogin((x) => {
    //   console.log(x)
    //   this.setState({
    //     user: x
    //   })
    // })
    // Inject localStorage
    let userId = new Date().getTime()
    console.log(window.localStorage['avataji'])
    if (window.localStorage && !window.localStorage['avataji']) {
      window.localStorage['avataji'] = userId // initial
    }
    
    this.setState({
      userId: window.localStorage['avataji']
    })
  }

  async _signIn () {
    const result = await FBase.login()
    console.log(result.user)
    this.setState({
      user: result.user
    })
  }

  async _signOut () {
    const result = await FBase.logout()
    this.setState({
      user: null
    })
  } 

   _selectAvatji (emoji) {
    console.log(emoji)
    // Put user of `userId` online
    FBase.user(this.state.userId).update({
      status: 'online',
      emoji: emoji,
      lastLogin: new Date().getTime()
    }, (err) => {
      console.log(err)
      FBase.user(this.state.userId).onDisconnect().update({
        lastSeen: new Date().getTime(),
        status: 'offline'
      })
      this.setState({
        isModalActive: false
      })
    })
   }

  render() { // Presentational
    return (
      <div>
        <Helmet>
          <title>🐐 Avataji 🥑</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <ProfileModal
          onSelectAvataji={this._selectAvatji.bind(this)}
          isActive={this.state.isModalActive}
        />
        <BrowserRouter>
          <div className="section" style={{ paddingTop: 20 }}>
            <Menu 
              onSignIn={this._signIn.bind(this)}
              onSignOut={this._signOut.bind(this)}
              user={this.state.user}
            />
            <div style={{ height: 20 }}></div>
            <Route
              render={() => 
                <Chat user={this.state.user} userId={this.state.userId} />
              }
              path="/" 
              exact />
            <Route
              render={(props) => <About {...props} />}
              path="/about" />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
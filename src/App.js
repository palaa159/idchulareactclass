import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import FollowerBtn from './Components/FollowerBtn'
// Router
import { BrowserRouter, Route } from 'react-router-dom'
// Import page components
import Menu from './Components/Menu'
import NewsFeed from './Pages/NewsFeed'
import Photos from './Pages/Photos'
import Profile from './Pages/Profile'
// End of page components

class App extends Component {

  state = { // Data model of THIS component
    followerCount: 0,
  }

  componentDidMount () { // Behavior
    
  }

  addFollower (num) { // Behavior
    this.setState({
      followerCount: this.state.followerCount + num
    })
  }

  unFollow () { // Behavior
    this.setState({
      followerCount: this.state.followerCount - 1
    })
  }

  render() { // Presentational
    return (
      <div>
        <BrowserRouter>
          <div className="section" style={{ paddingTop: 20 }}>
            <Menu />
            <div style={{ height: 20 }}></div>
            <Route component={NewsFeed} path="/" exact />
            <Route component={Photos} path="/photos" />
            <Route component={Profile} path="/profile" />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
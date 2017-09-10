import React from 'react'
import { Link } from 'react-router-dom'
import * as FBase from '../services/firebase'

class Menu extends React.Component {

  state = {
    user: {} // empty object
  }

  componentDidMount () {
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

  render () {
    return (
      <div>
        <nav className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5">
                โปรแกรมแชทโง่ๆ
              </p>
            </div>
          </div>

          <div className="level-right">
            <p className="level-item"><Link to="/">👧 Chat</Link></p>
            <p className="level-item"><Link to="/profile">🍑 Profile</Link></p>
            <p className="level-item">
              {/* if... then... */}
              { this.state.user.displayName === undefined &&
                <button className="button" onClick={() => this._signIn()}>Sign-in</button>
              }
              { this.state.user.displayName &&
                <span>
                  <img
                    src={this.state.user.photoURL}
                    style={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      marginRight: 5 
                    }} 
                  />
                </span>
              }
              <span>{this.state.user.displayName}</span>
            </p>
          </div>
        </nav>
      </div>      
    )
  }
}

export default Menu
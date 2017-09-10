import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {

  componentDidMount () {
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
              { this.props.user.displayName === undefined &&
                <button className="button" onClick={() => this.props.onSignIn()}>Sign-in</button>
              }
              { this.props.user.displayName &&
                <span>
                  <img
                    src={this.props.user.photoURL}
                    style={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      marginRight: 5 
                    }} 
                  />
                </span>
              }
              <span>{this.props.user.displayName}</span>
            </p>
          </div>
        </nav>
      </div>      
    )
  }
}

export default Menu
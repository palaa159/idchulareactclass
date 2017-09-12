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
            <p className="level-item"><Link to="/about">🍑 About</Link></p>
            <div className="level-item">
              {/* if... then... */}
              { !this.props.user &&
                <button className="button" onClick={() => this.props.onSignIn()}>Sign-in</button>
              }
              { this.props.user &&
                <div>
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
                  <span style={{ top: 7, position: 'relative' }}>
                    {this.props.user.displayName}
                  </span>
                  <button onClick={this.props.onSignOut.bind(this)} className="button">Log out</button>
                </div>
              }
            </div>
          </div>
        </nav>
      </div>      
    )
  }
}

export default Menu
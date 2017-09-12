import React from 'react'
import { getData, setData } from '../services/firebase'

class Chat extends React.Component {

  state = {
    chatLog: ['this is the first message.. 🎈'],
    favFruit: null
  }
  
  componentDidMount() {
    getData('/fruit').on('value', (snapshot) => {
      let result = snapshot.val()
      this.setState({
        favFruit: result
      })
    })
  }

  _send (msg) {
    this.setState({
      chatLog: [ msg, ...this.state.chatLog ] // (...) flatten array
    })
    // console.log(this.state.chatLog)
  }

  _setFruit (x) {
    setData('/fruit', x)
  }

  render () {
    // Build display logic
    return (
      <div className="chatContainer">
        <p className="title">My favorite fruit is {this.state.favFruit}</p>
        <div className="chatInput field">
          <div className="control is-large has-icons-right">
            <input
              onKeyUp={(evt) => {
                if (evt.keyCode === 13 && evt.target.value.length) {
                  // this._send(evt.target.value)
                  this._setFruit(evt.target.value)
                  // clear
                  evt.target.value = ''
                }
              }}
              className="input is-large"
              type="text"
              placeholder="Press enter to send" />
          </div>
        </div>
        <div className="chatFeed">
          { this.state.chatLog.map((msg, i) =>
              <div key={i}>
                {/* <img
                  src={this.props.user.photoURL}
                  style={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    marginRight: 5,
                    verticalAlign: 'sub'
                  }} 
                /> */}
                <span className="is-size-3">👁‍🗨</span>
                <span className="is-size-3"> {msg}</span>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Chat
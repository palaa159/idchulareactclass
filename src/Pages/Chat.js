import React from 'react'
import * as FBase from '../services/firebase'

class Chat extends React.Component {

  state = {
    chatLog: {}
  }
  
  componentDidMount() {
    FBase.getChatLog()
      .on('value', (snapshot) => {
        console.log(snapshot.val())
        this.setState({
          chatLog: snapshot.val()
        })
      }
    )
  }

  _send (msg) {
    // this.setState({
    //   chatLog: [...this.state.chatLog, msg]
    // })
    FBase.pushChat({ 
      sender: {
        displayName: this.props.user.displayName,
        photoURL: this.props.user.photoURL
      },
      message: msg,
      sentAt: new Date().getTime()
    })
    // console.log(this.state.chatLog)
  }

  render () {
    // Build display logic
    return (
      <div className="chatContainer">
        <div className="chatInput field">
          <div className="control is-large has-icons-right">
            <input
              onKeyUp={(evt) => {
                if (evt.keyCode === 13 && evt.target.value.length) {
                  this._send(evt.target.value)
                  // clear
                  evt.target.value = ''
                }
              }}
              className="input is-large"
              type="text"
              placeholder="Press enter to send" />
            <a className="icon is-medium is-right">
              <i className="fa fa-send"></i>
            </a>
          </div>
        </div>
        <div className="chatFeed">
          { Object.keys(this.state.chatLog).map((key, i) =>
              <div key={i}>
                <img
                  src={this.state.chatLog[key].sender.photoURL}
                  style={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    marginRight: 5,
                    verticalAlign: 'sub'
                  }} 
                />
                <span className="is-size-3"> {this.state.chatLog[key].message}</span>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Chat
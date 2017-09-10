import React from 'react'
import * as FBase from '../services/firebase'
import moment from 'moment'

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
        displayName: this.props.user && this.props.user.displayName,
        photoURL: this.props.user && this.props.user.photoURL
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
              className="input is-warning is-large"
              type="text"
              placeholder="Press enter to send" />
          </div>
        </div>
        <div className="chatFeed">
          { this.state.chatLog && Object.keys(this.state.chatLog).map((key, i) =>
              <div key={i}>
                { this.state.chatLog[key].sender &&
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
                }
                { !this.state.chatLog[key].sender &&
                  <span className="is-size-4">👮</span>
                }
                <span className="is-size-4"> {this.state.chatLog[key].message}</span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span className="is-size-7 has-text-grey-lighter">
                  <i className="fa fa-send is-inline"></i>
                  &nbsp;
                  {moment(this.state.chatLog[key].sentAt).fromNow()}
                </span>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Chat
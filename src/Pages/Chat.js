import React from 'react'
import * as FBase from '../services/firebase'
import moment from 'moment'

class Chat extends React.Component {

  state = {
    chatLog: {},
    users: []
  }
  
  componentDidMount() {
    FBase.getUsers()
      .on('value', (users) => {
        users = users.val()
        this.setState({
          users
        })
      })
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
        id: this.props.userId
      },
      message: msg,
      sentAt: new Date().getTime()
    })
    // console.log(this.state.chatLog)
  }

  render () {
    // Build display logic
    return (
      <div className="columns">
        <div className="column">
          <div className="content">
            <h2>Users:</h2>
            { this.state.users && Object.keys(this.state.users)
                // .reverse()
                .sort((key) => this.state.users[key].status)
                .map((key, i) =>
                  <div key={i} onClick={() => alert(`
                      ${this.state.users[key].emoji}
                      id: ${key}
                      last_seen: ${moment(this.state.users[key].lastSeen).fromNow()}
                    `)}>
                    { this.props.userId === key &&
                      <span>☝️ </span>
                    }
                    <span className="is-size-4">{this.state.users[key].emoji} </span>
                    <span className="tag is-rounded">
                      {this.state.users[key].status === 'online' ? '💚 ' : ''}
                      {this.state.users[key].status}
                    </span>
                  </div>
              )
            }
          </div>
        </div>
        <div className="column is-9 chatContainer">
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
            { this.state.chatLog && Object.keys(this.state.chatLog).reverse().map((key, i) =>
                <div 
                  className="chatLine" 
                  key={i} 
                  onClick={() => alert(`
                    ${this.state.users[this.state.chatLog[key].sender.id].emoji}
                    id: ${this.state.chatLog[key].sender.id}
                  `)}>
                  <span className="is-size-4">{this.state.users[this.state.chatLog[key].sender.id].emoji}</span>
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
      </div>
    )
  }
}

export default Chat
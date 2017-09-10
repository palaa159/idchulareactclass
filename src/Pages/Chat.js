import React from 'react'

class Chat extends React.Component {

  state = {
    chatLog: ['this is the first message.. 🎈']
  }
  
  componentDidMount() {
    
  }

  _send (msg) {
    this.setState({
      chatLog: [...this.state.chatLog, msg]
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
          { this.state.chatLog.map((msg, i) =>
              <div key={i}>
                <img
                  src={this.props.user.photoURL}
                  style={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    marginRight: 5,
                    verticalAlign: 'sub'
                  }} 
                />
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
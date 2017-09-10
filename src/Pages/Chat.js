import React from 'react'

class Chat extends React.Component {

  state = {
  }
  
  componentDidMount() {
    
  }

  render () {
    // Build display logic
    return (
      <div>
        <h1>Chat Feed</h1>
        <div className="field">
          <div className="control is-large has-icons-right">
            <input className="input is-large" type="text" placeholder="Large loading input" />
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat
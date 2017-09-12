import React from 'react'

class ProfileModal extends React.Component {

  state = {
    avataji: ['👻', '🐨', '🐋', '🐯', '🦇', '🦏', '👽', '🎱', '💯']
  }

  render () {
    return (
      <div className={`modal ${this.props.isActive? 'is-active': ''}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <article className="message">
            <div className="message-body">
              <div className="columns">
                <div className="column is-half">
                  <p className="is-size-4">⛏ Pick your Avataji:</p>
                  <div className="field">
                    { this.state.avataji.map((x, i) =>
                      <button 
                        key={i}
                        onClick={() => this.props.onSelectAvataji(x)}
                        className="avatajiBtn button is-large is-white">{x}</button>
                      )
                    }
                  </div>
                </div>
                <div className="column">
                <p className="is-size-4">🚶 Or sign-in</p>
                <p>ขี้เกียจทำ</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        {/* <button className="modal-close is-large" aria-label="close"></button> */}
      </div>
    )
  }
}

export default ProfileModal
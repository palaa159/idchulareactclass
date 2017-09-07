import React from 'react'

class FollowerBtn extends React.Component {

  constructor (props) {
    super(props)
  }

  state = {
    btnColor: 'orange'
  }

  _addFollower () {
    // add follower count
    this.props.onAddFollower()
  }

  _alert () {
    alert('Hi!')
  }

  _changeColorTo(color) {
    this.setState({
      btnColor: color
    })
  }

  render () {
    return (
      <div>
        <button
          className="button is-info is-outlined"
          onClick={() => { 
            this._addFollower()
            this._changeColorTo('aqua')
          }}
          >
          Add follower
        </button>
      </div>
    )
  }
}

export default FollowerBtn
import React, { Component } from 'react'

class About extends Component {

  render() {
    return (
      <div className="content">
        <h1 className="title">
          Firebase Chat App
        </h1>
        <h3>Basic</h3>
        <ul>
          <li>Use state to store chat log.</li>
          <li>Be able to add ➕ and (delete 💣) chat</li>
        </ul>
        <h3>Advanced</h3>
        <ul>
          <li>Sync data with Firebase 🔥</li>
        </ul>
      </div>
    )
  }
}

export default About
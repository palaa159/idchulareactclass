import React from 'react'
import { getUser } from '../services/api'
import UserCard from '../Components/UserCard'

class NewsFeed extends React.Component {

  state = {
    randomUser: {},
    randomUsers: []
  }
  
  componentDidMount() {
    getUser(30).then((x) => {
      console.log(x.data.results)
      this.setState({
        randomUsers: x.data.results,
        randomUser: x.data.results[0]
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  render () {
    // Build display logic
    return (
      <div>
        <h1>Friends</h1>
        <div className="section">
          <div className="columns is-multiline">
            {
              this.state.randomUsers.map((user, index) =>
                <div className="column is-one-quarter" key={index}>
                  <UserCard
                    image={user.picture.medium}
                    gender={user.gender}
                    title={user.name.title}
                    first={user.name.first}
                    last={user.name.last}
                  />
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default NewsFeed
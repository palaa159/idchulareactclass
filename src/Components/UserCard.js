import React from 'react'

class UserCard extends React.Component {

  render () {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={this.props.image} alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">
                <span className="is-capitalized">
                  {this.props.title}.&nbsp; {/* comment */}
                </span> 
                <span className="is-capitalized">
                  {this.props.first}&nbsp;
                </span>
                <span className="is-capitalized">
                {this.props.last}
                </span>
              </p>
              <p className="subtitle is-6">{this.props.gender}</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a>#css</a> <a>#responsive</a>
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    )
  }
}

export default UserCard
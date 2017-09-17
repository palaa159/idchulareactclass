import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div style={{ 
    backgroundColor: 'white',
    width: 50,
    height: 50
   }}>{text}</div>
)

class Map extends Component {

  static defaultProps = {
    center: {lat: 13.752533, lng: 100.574712},
    zoom: 15
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="content" style={{ height: 500 }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <div
            onClick={() => alert('yo yo!')}
            style={{ color: 'red', fontWeight: 'bold', backgroundColor: 'white', width: 50, height: 50}}
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          >
            RCA yoyo!
          </div>
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
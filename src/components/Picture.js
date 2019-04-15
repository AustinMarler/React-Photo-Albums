import React, { Component } from 'react';
import axios from 'axios';

class Picture extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/pictures/${this.props.match.params.id}`).then(resp => {
      this.setState({
        data: resp.data
      })
    })
  }

  render() {
    return (
      <div id="pictureContainer">
        <div id="pictureHeader">
          <div>
            <h3>Picture Name</h3>
          </div>
        </div>
        <div id="pictureLowerContainer">
          <div className="switchPictureButton">

          </div>

          <div id="picture">
            <img src={this.state.data.url} alt="" />
          </div>

          <div className="switchPictureButton">

          </div>
        </div>
      </div>
    )
  }
}

export default Picture;
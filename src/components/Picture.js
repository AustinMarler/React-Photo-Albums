import React, { Component } from 'react';
import axios from 'axios';

class Picture extends Component {
  state = {

  }

  componentDidMount() {
    axios.get('http://localhost:3001/').then(resp => {
      console.log(resp.data);
      this.setState({
        data: resp.data
      })
      console.log(this.state.data);
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
            <img src="http://placehold.it/200/200" alt="" />
          </div>
          <div className="switchPictureButton">

          </div>
        </div>
      </div>
    )
  }
}

export default Picture;
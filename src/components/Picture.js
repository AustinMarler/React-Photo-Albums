import React, { Component } from 'react';
import { getPictures } from '../actions/gallery';

class Picture extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    getPictures(this.props.match.params.id).then(data => {
      this.setState({
        data: data
      })
    })
  }

  render() {
    return (
      <div id="pictureContainer">
        <div id="pictureHeader">
          <div>
            <h3>{this.state.data.title}</h3>
            <h6>by {this.state.data.author}</h6>
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
import React, { Component } from 'react';
import { getPictures, getAlbumPictures } from '../actions/gallery';
import { Link } from 'react-router-dom'

class Picture extends Component {
  state = {
    data: {},
    prev: 0,
    next: 0
  }

  componentDidMount() {
    getPictures(this.props.match.params.id).then(data => {
      this.setState({
        data: data,
      })
      this.setupButtons(this.props.match.params.id)
    })
  }

  componentWillReceiveProps(newprops) {
    var thisId = this.props.match.params.id
    if (newprops.match.params.id !== thisId) {
      getPictures(newprops.match.params.id).then(data => {
        this.setState({
          data: data,
        })
        this.setupButtons(newprops.match.params.id)
      })
    }
  }

  setupButtons(id) {
    var pictures = getAlbumPictures(this.state.data.albumId)
    var prev = Number(id) - 1
    var next = Number(id) + 1
    if (id === 0) {
      prev = pictures.length
    } else if (id === pictures.length - 1) {
      next = 1
    }
    this.setState({
      prev: prev,
      next: next
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
          <div id="buttonPrev" className="switchPictureButton">
            <Link to={"/picture/" + this.state.prev}>&#10554;</Link>
          </div>

          <div id="picture">
            <img src={this.state.data.url} alt="" />
          </div>

          <div id="buttonNext" className="switchPictureButton">
            <Link to={"/picture/" + this.state.next}>&#10555;</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Picture;
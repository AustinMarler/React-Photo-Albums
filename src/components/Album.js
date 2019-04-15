import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAlbums } from '../actions/gallery';

class Album extends Component {
  state = {
    data: [],
    pictures: [],
    albumTitle: ''
  }

  componentDidMount() {
    getAlbums().then(data => {
      this.setState({
        data: data,
        pictures: data[this.props.match.params.id - 1].pictures,
        albumTitle: data[this.props.match.params.id - 1].title
      })
    })
  }

  componentWillReceiveProps(newprops) {
    const thisId = this.props.match.params.id;
    if (newprops.match.params.id !== thisId) {
      getAlbums().then(data => {
        this.setState({
          pictures: data[newprops.match.params.id - 1].pictures,
          albumTitle: data[newprops.match.params.id - 1].title
        })
      })
    }
  }
  
  render() {
    return (
      <div id="albumContainer">
        <div id="albumHeader">
          <div>
            <h3>{this.state.albumTitle}</h3>
          </div>
        </div>
        <div id="albumLowerContainer">
          <div id="albumLinksList">
            <ul>
              {
                this.state.data.map(function(album) {
                  return (
                    <li key={"albumLink" + album.id}>
                      <Link to={"/album/" + album.id}>{album.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div id="albumPicturesList">
            {
              this.state.pictures.map(function(picture) {
                return (
                  <div key={"picture" + picture.id} className="pictureLinkContainer" style={{backgroundImage: "url(" + picture.url + ")"}}>
                    <Link to={"/picture/" + picture.id}>{picture.title}</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Album;
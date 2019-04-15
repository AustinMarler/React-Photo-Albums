import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Album extends Component {
  state = {
    data: [],
    pictures: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/albums?_embed=pictures`).then(resp => {
      this.setState({
        data: resp.data,
        pictures: resp.data[this.props.match.params.id - 1].pictures
      })
    })
  }

  componentWillReceiveProps() {
    axios.get(`http://localhost:3001/albums?_embed=pictures`).then(resp => {
      this.setState({
        data: resp.data,
        pictures: resp.data[this.props.match.params.id - 1].pictures
      })
    })
  }
  
  render() {
    return (
      <div id="albumContainer">
        <div id="albumHeader">
          <div>
            <h3>Album Name</h3>
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
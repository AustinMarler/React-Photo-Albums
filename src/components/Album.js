import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Album extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/albums/${this.props.match.params.id}?_embed=pictures`).then(resp => {
      this.setState({
        data: resp.data
      })
      console.log(this.state.data)
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
                      <Link to={"/album/" + album.id}></Link>
                    </li>
                  )
                })
              }
              {/* <li><Link to="/album/1">Architecture</Link></li>
              <li><Link to="/album/2">Nature</Link></li>
              <li><Link to="/album/3">Animals</Link></li>
              <li><Link to="/album/4">Arts &amp; Culture</Link></li>
              <li><Link to="/album/5">Food &amp; Drink</Link></li>
              <li><Link to="/album/6">Textures &amp; Patterns</Link></li> */}
            </ul>
          </div>
          <div id="albumPicturesList">
            <div className="pictureLinkContainer">
              <img src="http://placehold.it/200/200" alt="" />
              <h6>Pic 1</h6>
            </div>
            <div className="pictureLinkContainer">
              <img src="http://placehold.it/200/200" alt="" />
              <h6>Pic 2</h6>
            </div>
            <div className="pictureLinkContainer">
              <img src="http://placehold.it/200/200" alt="" />
              <h6>Pic 3</h6>
            </div>
            <div className="pictureLinkContainer">
              <img src="http://placehold.it/200/200" alt="" />
              <h6>Pic 4</h6>
            </div>
            <div className="pictureLinkContainer">
              <img src="http://placehold.it/200/200" alt="" />
              <h6>Pic 5</h6>
            </div>
            <div className="pictureLinkContainer">
              <img src="http://placehold.it/200/200" alt="" />
              <h6>Pic 6</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Album;
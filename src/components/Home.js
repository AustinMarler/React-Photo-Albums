import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAlbums } from '../actions/gallery';

class Home extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    getAlbums().then(data => {
      this.setState({
        data: data
      })
    })
  }

  render() {
    return (
      <div id="homeContainer">
        <div id="homeHeader">
          <div>
            <h3>My Albums</h3>
          </div>
        </div>
        <div id="albumListContainer">
          {
            this.state.data.map(function(album) {
              return (
                <div key={"album" + album.id} className="albumLinkContainer" style={{backgroundImage: "url(" + album.pictures[0].url + ")"}}>
                  <Link to={"/album/" + album.id}>{album.title}</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Home;
import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://localhost:3002/').then(resp => {
      console.log(resp);
      this.setState({
        data: resp.data
      })
      console.log(this.state.data);
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
          <div className="albumLinkContainer">
            <img src="http://placehold.it/200/200" alt="" />
            <h6>Architecture</h6>
          </div>
          <div className="albumLinkContainer">
            <img src="http://placehold.it/200/200" alt="" />
            <h6>Nature</h6>
          </div>
          <div className="albumLinkContainer">
            <img src="http://placehold.it/200/200" alt="" />
            <h6>Animals</h6>
          </div>
          <div className="albumLinkContainer">
            <img src="http://placehold.it/200/200" alt="" />
            <h6>Arts &amp; Culture</h6>
          </div>
          <div className="albumLinkContainer">
            <img src="http://placehold.it/200/200" alt="" />
            <h6>Food &amp; Drink</h6>
          </div>
          <div className="albumLinkContainer">
            <img src="http://placehold.it/200/200" alt="" />
            <h6>Textures &amp; Patterns</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
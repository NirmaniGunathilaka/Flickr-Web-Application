import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/photos")
      .then((response) => {
        this.setState({ photos: response.data.items });

        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div class="p-3 mb-2 bg-warning text-dark">
        <h3>Gallery</h3>
        <div class="cont">
          {this.state.photos.map((pic) => (
            <div class="item">
              <img class="img-thumbnail" src={pic.media.m} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

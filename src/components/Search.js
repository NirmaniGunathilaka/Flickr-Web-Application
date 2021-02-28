import React, { Component } from "react";
import "../App.css";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      photos: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "The resulted images for " +
        this.state.value +
        " will be displaed below.."
    );
    fetch(
      "http://localhost:5000/api/search/" +
        this.state.value.replace(/^\s+|\s+$/g, "")
    ) //pass the submitted word as a parameter to backend
      .then((response) => {
        return response.json();
        console.log(this.state.value.replace(/\s+/g, ""));
      })
      .then(
        function (j) {
          let picArray = j.photos.photo.map((pic) => {
            //construct the resulted photo url
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              ".jpg";
            return <img class="img-thumbnail" alt="dogs" src={srcPath}></img>;
          });
          this.setState({ photos: picArray });
          console.log(this.state.photos);
        }.bind(this)
      )
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div class="p-3 mb-2 bg-warning text-dark">
        <div class="search">
          <form onSubmit={this.handleSubmit}>
            <label className="form-label">
              <h3>Search</h3>
              <input
                type="text"
                class="form-control"
                placeholder="Type a word"
                value={this.state.value}
                onChange={this.handleChange}
                required
              />
            </label>
            <button class="btn btn-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div class="cont">
          {this.state.photos.map((pic) => (
            <div class="item">{pic}</div>
          ))}
        </div>
      </div>
    );
  }
}

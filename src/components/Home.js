import React, { Component } from "react";
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <div class="card">
        <div class="title">
          <h1>Welcome to Flickr Gallery !!!</h1>
        </div>
        <img
          src="/flickr.jpg"
          class="img-fluid"
          class="rounded mx-auto d-block"
          alt="image"
        />
      </div>
    );
  }
}

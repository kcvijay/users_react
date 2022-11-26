import React, { Component } from "react";
import classes from "./PersonSingle.module.css";

class PersonSingle extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data,
          isLoading: false,
        });
      });
  }
  render() {
    if (this.state.isLoading) {
      return <p>Getting Data...</p>;
    }
    return (
      <div className={classes.detail}>
        <h2>{this.state.data.name}</h2>
        <h4>
          Username: <span>{this.state.data.username}</span>
        </h4>
        <h3>Address:</h3>
        <p>{this.state.data.address?.street}</p>
        <p>{this.state.data.address?.zipcode}</p>
        <p>{this.state.data.address?.city}</p>
        <h3>Company:</h3>
        <p>{this.state.data.company?.name}</p>
        <p>www.{this.state.data.website}</p>
      </div>
    );
  }
}
export default PersonSingle;

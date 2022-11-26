import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Persons from "./Persons";
import NotFound from "./NotFound";
import Card from "./Card";
import PersonSingle from "./PersonSingle";
import "./App.css";

const RouterWrapper = (props) => {
  const params = useParams();
  return <PersonSingle params={params} {...props} />;
};

class App extends Component {
  state = {
    persons: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          persons: data,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <p>Getting data...</p>
        </div>
      );
    }
    const personData = this.state.persons.map((person) => {
      return (
        <Card
          key={person.id}
          name={person.name}
          email={person.email}
          phone={person.phone}
          id={person.id}
          company={person.company.name}
        />
      );
    });

    return (
      <BrowserRouter>
        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Persons persons={personData} />} />
            <Route path="/:id" element={<RouterWrapper />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

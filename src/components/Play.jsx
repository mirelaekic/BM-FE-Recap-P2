import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'
import "./Start.css"
class Play extends Component {
  render() {
    return (
      <Container>
        <h1 className="title-name">ENTER YOUR NAME</h1>
        <input className="input-name"type="text" id="name" />
        <Link to="/start">
        <Button className="start-button">START</Button>
        </Link>
      </Container>
    );
  }
}

export default withRouter(Play)
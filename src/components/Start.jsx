import React, { Component } from "react";
import { Container, Button} from "react-bootstrap";
import "./Start.css"
import { Link, withRouter } from 'react-router-dom'

class Start extends Component {
  render() {
    return (
      <div>
        <Container>
         <h1 className="title">QUIZ</h1>
            <Link to="/play">
              <Button className="start-button" >PLAY</Button>
              </Link>
              <Button className="start-button" >HIGH SCORES</Button>
        </Container>
      </div>
    );
  }
}
export default withRouter(Start)

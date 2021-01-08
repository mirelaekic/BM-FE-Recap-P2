import React, { Component } from "react";
import { Container, Button, Form } from "react-bootstrap";
import "./Start.css";
class Play extends Component {
  state = {
    candidateName:"",
    errMessage: " ",
    loading: false,
  };
  submitName = (event) => {
    let candidateName = this.state.candidateName
    let currentId = event.currentTaget.id;
    candidateName[currentId] = event.currentTarget.value
    this.setState({candidateName: candidateName})
  };

 getNewExam = async (event) => {
     event.preventDefault();
    try {
      let response = await fetch("http://localhost:3010/exam/start", {
        method: "POST",
        body: JSON.stringify(this.state.candidateName),
        headers: new Headers({
            "Accept":"application/json",
        "Content-Type": "application/json"
        }),
      });
      if (response.ok) {
          console.log(response)
          alert("WELCOME")
          this.setState({
              candidateName:" "
          })
        this.props.history.push("/");
        alert("success!!")
      } else {
        console.log("errorrr");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
          loading: false,
        });
      }
    } catch (err) {
        console.log(err)
    }
  };

  render() {
    return (
      <div>
        <Container>
          <h1 className="title-name">ENTER YOUR NAME</h1>
          <Form.Group>
            <Form.Control
              className="input-name"
              type="text"
              id="candidateName"
              candidatename="candidateName"
              value={this.state.candidateName}
              onChange={(event) => this.submitName(event)}
              required
              minLength="2"
            />
          </Form.Group>
            <Button className="start-button" onClick={this.getNewExam}>
              START
            </Button>
        </Container>
      </div>
    );
  }
}

export default Play;

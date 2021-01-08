import React, { Component } from 'react'
import { Container, Button, Row, Col} from "react-bootstrap";
import "./Start.css"

export default class Questions extends Component {
    state = {
        questions: [],
        TotalDuration: null,
    }
    getNewExam = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        try {
          let response = await fetch("http://localhost:3010/exam/${id}/answer", {
            method: "POST",
            body: JSON.stringify(this.state.questions),
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          });
          if (response.ok) {
            return response;
          } else {
            console.log("eror");
            };
        } catch (err) {
            console.log(err);
        }
      };
    render() {
        return (
            <div>
                <Container>
                <h1 className="title-name">QUESTION</h1>
                <Row className="answer-row" >
                    <Col>
                    <Button className="answer-button" >answer options</Button>
                    <Button className="answer-button" >answer options</Button>
                    </Col>
                    <Col>
                    <Button className="answer-button" >answer options</Button>
                    <Button className="answer-button" >answer options</Button>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

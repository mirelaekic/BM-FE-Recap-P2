import React, { Component } from 'react'
import { Container, Button, Row, Col} from "react-bootstrap";
import "./Start.css"

export default class Questions extends Component {
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

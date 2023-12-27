import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import "./Toggle.css"

function Toggle() {
    // PROPERTIES


    return (
        <div className="main-div text-center">
            <div>
                <h5 className="m-3"> I'm looking for:</h5>
            </div>
            <Row className="justify-content-center align-content-center">
                <Col className="col-1 ">
                    <Button variant="dark">Galleries</Button>
                </Col>
                <Col className="col-1">
                    <Button variant="outline-dark">Artists</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Toggle
import React from "react"
import {CustomFooter} from "../components/CustomFooter";
import {Row, Col, Container} from "react-bootstrap"
import fourohfourimage from "./images/404Image.png"

export const FourOhFour = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>404 Error</h1>
                        <p>We can't find the page you're searching for on our server.</p>
                        <p>Please enjoy this picture:</p>
                        <img alt="404 not found image" src={fourohfourimage} style={{width: '400px'}}/>
                    </Col>
                </Row>
            </Container>
            <CustomFooter/>
        </>
    )
}
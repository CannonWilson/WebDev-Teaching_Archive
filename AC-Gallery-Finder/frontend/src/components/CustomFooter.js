import {Container, Row, Col} from "react-bootstrap";
import "./CustomFooter.css"

export const CustomFooter = () => {
    return (
        <>
            <footer className="footer-links">
                <Container fluid className="g-0">
                    <Row>
                        <Col className="text-center">
                            <a href="/">Home</a>
                        </Col>
                        <Col className="text-center">
                            <a href="/about-us">About Us</a>
                        </Col>
                        <Col className="text-center">
                            <a href="/privacy-policy">Privacy Policy</a>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-center sign">
                            <a href="/sign-up">Sign Up/Sign In</a>
                            <div className="watermark">2021 All Rights Reserved, CREATIVECONNECTION.COM</div>
                        </Col>
                    </Row>

                </Container>
            </footer>
        </>
    )
}
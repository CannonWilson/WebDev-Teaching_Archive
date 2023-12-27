import './MainNavbar.css'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";
import logo from "../images/creativeConnection.png"

export const MainNavbar = () => {
    // PROPERTIES

    return (
        <Navbar>
            <Container fluid>
                <Row>
                    <a href="/" className="logoLink ms-auto d-block"><Image className="mainLogo ms-auto d-block" src={logo}/></a>
                </Row>
            </Container>
        </Navbar>
    )
}

export default MainNavbar
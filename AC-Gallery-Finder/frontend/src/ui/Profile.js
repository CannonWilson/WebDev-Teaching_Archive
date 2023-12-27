import React, {useEffect, useState} from "react";
import {Modal, Form, Button, Container, Row, Col, Image} from "react-bootstrap";
import {CustomFooter} from "../components/CustomFooter";
import "./Profile.css"
import MainNavbar from "../components/MainNavbar";
import {useDispatch, useSelector} from "react-redux";
import {fetchEventByEventId} from "../store/event";
import {PieceForm} from "./Piece/PieceForm";
import {EventForm} from "./Event/EventForm";
import placeholder from "./images/profile-image-placeholder.png"
import {SignInForm} from "./Sign-In/SignInForm";
import {fetchAuth} from "../store/auth";



export const Profile = ({match}) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const sideEffect = () => {
        dispatch(fetchAuth())
        dispatch(fetchEventByEventId(match.params.eventId))
    };
    useEffect(sideEffect,[match.params.eventId, dispatch]);


    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);



    const [showPiece, setShowPiece] = useState(false);
    const [showEvent, setShowEvent] = useState(false);
    const [showProfilePic, setShowProfilePic] = useState(false);


    return (
        <>

            <MainNavbar/>
            <div className="position-relative">

            <Modal show={showPiece} onHide={() => setShowPiece(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Piece</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PieceForm/>
                </Modal.Body>
            </Modal>

            <Modal show={showEvent} onHide={() => setShowEvent(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create an Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EventForm/>
                </Modal.Body>
            </Modal>

            <Modal show={showProfilePic} onHide={() => setShowProfilePic(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload your profile pic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Image uploader will go here</div>
                </Modal.Body>
            </Modal>

            <div className="profile-wrapper">
            <Container className="mt-5">


                <Row className="mt-5">
                    <Col className="text-center">
                        <Image className="profilePic" onClick={() => setShowProfilePic(true)} roundedCircle src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Sahil_Shrestha.jpg/640px-Sahil_Shrestha.jpg"}/>
                    </Col>

                    <Col className="mt-5">
                        <h2>Levi Kunha</h2>
                        <h4>Amarillo, TX</h4>
                        <textarea placeholder="Talk about yourself here" className="input-100 message" type="text" name="message"
                                  maxLength="300"></textarea>
                        <Col className="text-center">
                            <Button>Save</Button>
                        </Col>

                        <Row>
                                <Image className="artPic" onClick={() => setShowPiece(true)}  src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Damn_reality.jpg/640px-Damn_reality.jpg"}/>
                                <Image className="artPic" onClick={() => setShowPiece(true)} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Damn_reality_new.jpg/640px-Damn_reality_new.jpg"}/>
                                <Image className="artPic" onClick={() => setShowPiece(true)} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Roof_%2835250012%29.jpeg/640px-Roof_%2835250012%29.jpeg"}/>
                        </Row>
                    </Col>
                </Row>
                <Row>

                </Row>
                <Row>
                    <Col className="text-center align-items-center align-content-center">
                        <div className="field-text">Change Name:</div>
                        <input placeholder="First and Last name"></input>

                        <div className="field-text">Change Email:</div>
                        <input placeholder="Please type your email here"></input>

                        <div className="field-text">Change Password:</div>
                        <input placeholder="Eight or more characters"></input>

                        <div className="field-text">Confirm Password:</div>
                        <input placeholder="Confirm your password"></input>
                    </Col>

                   <Col className="text-center align-items-center align-content-center">
                       <div className="field-text">Hometown:</div>
                       <input placeholder="Where are you from?"></input>

                       <div className="field-text">Style:</div>
                       <Button className="style">Modern</Button>
                       <Button className="style">Postmodern</Button>
                       <Button className="style">Abstract</Button>
                       <Button className="style">Print</Button>
                       <Button className="style">Photography</Button>

                       <div className="field-text">Events:</div>
                       <Button onClick={() => setShowEvent(true)} className="field-text">Create an Event</Button>
                   </Col>
                </Row>

                <Row>

                    <Col className="text-center align-items-center align-content-center">

                    </Col>
                </Row>
            </Container>
            </div>
            <CustomFooter/>
        </div>
        </>
    );
}

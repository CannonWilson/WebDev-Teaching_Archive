import React from 'react';
import {Modal} from "react-bootstrap";
import {PieceForm} from "../../ui/Piece/PieceForm";

<Modal show={show} onHide={handleClose}>
    <Modal.Header>
        <Modal.Title>Create an event</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <PieceForm/>
    </Modal.Body>
</Modal>

export const EventModal = () => {}
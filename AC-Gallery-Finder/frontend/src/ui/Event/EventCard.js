import React from "react";
import {Card, Carousel, Col} from "react-bootstrap";
import logo from "../images/Artfinder-logo.png"
import "./EventCard.css"
export const EventCard = ({event}) => {

    function reformatDate(date) {
        // date is in the format YYYY-MM-DD TT:TT:TTTT
        // We split on the space and return the YYYY-MM-DD portion
        // of the string.
        return date.split(" ")[0]
    }

    return(
        <>
            <Col className="p-5">
          <Card className="event-card p-3">
             <Card.Body>
                 <Card.Title>
                     {event.eventName}
                 </Card.Title>
                 <Card.Text>
                     {event.eventDescription}
                 </Card.Text>
                 <Card.Text>
                     {new Date(event.eventStartDate).toLocaleString()}
                 </Card.Text>
                 <Card.Text>
                     {new Date(event.eventEndDate).toLocaleString()}
                 </Card.Text>
             </Card.Body>
          </Card>
            </Col>



        </>
    )
}
import {getAllEvents, getEventByEventId, postEventController} from "./event.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {eventValidator} from "./event.validator";

export const EventRoute: Router = Router();
EventRoute.route('/')
    .post(
        isLoggedIn,
        asyncValidatorController(checkSchema(eventValidator)),
        postEventController
    );

EventRoute.route('/eventId/:eventId')
    .get(
        getEventByEventId
    )
EventRoute.route('/getAllEvents')
    .get(
        getAllEvents
    )

import {Router} from "express";
import {getAllRsvp, getRsvpByRsvpEventId, getRsvpByRsvpProfileId, postRsvp} from "./rsvp.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";

export const RsvpRoute: Router = Router()

RsvpRoute.route('/')
    .post (
        isLoggedIn,
        asyncValidatorController([check("rsvpEventId", "please provide a valid rsvpEventId").isUUID()]),
        postRsvp
    )

RsvpRoute.route('/getAllRsvp')
    .get (
        getAllRsvp
    )

RsvpRoute.route('/getRsvpByRsvpProfileId/:rsvpProfileId')
.get (
    getRsvpByRsvpProfileId
)

RsvpRoute.route('/getRsvpByRsvpEventId/:rsvpEventId')
.get (
    asyncValidatorController([check("rsvpEventId", "please provide a valid rsvpEventId").isUUID()]),
    getRsvpByRsvpEventId
)
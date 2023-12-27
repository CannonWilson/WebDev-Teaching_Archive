import {Request, Response} from "express";
import {Event} from "../../utils/interfaces/Event";
import {Status} from "../../utils/interfaces/Status";
import {selectEventByEventId} from "../../utils/event/selectEventByEventId";
import {selectAllEvents} from "../../utils/event/selectAllEvents";
import {insertEvent} from "../../utils/event/insertEvent";
import {Profile} from "../../utils/interfaces/Profile";


export async function postEventController(request: Request, response: Response) : Promise<Response|null>{
    try {
        const {eventAddress, eventDescription, eventEndDate, eventLatitude, eventLongitude, eventName, eventStartDate} = request.body
        const profile = <Profile>request.session.profile
        const eventProfileId : string = <string>profile.profileId

        const event = {
            eventId: null,
            eventProfileId: eventProfileId,
            eventAddress: eventAddress,
            eventDescription: eventDescription,
            eventEndDate: eventEndDate,
            eventLatitude: eventLatitude,
            eventLongitude: eventLongitude,
            eventName: eventName,
            eventStartDate: eventStartDate
        }

        const result = await insertEvent(event)
        const status: Status = {status: 200, message: "Event successfully created", data: result}

        return response.json(status)

    } catch (error: any) {
        return response.json( {status:400, data: null, message: error.message})
    }
}


export async function getEventByEventId(request: Request, response: Response) : Promise<Response> {
    try {
        const {eventId} = request.params;
        const mySqlResult = await selectEventByEventId(eventId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: "Successfully got event by event id"}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}


export async function getAllEvents(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const data = await selectAllEvents()
        const status:Status = {status: 200, data: data, message: null}
        return response.json(status)
    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}
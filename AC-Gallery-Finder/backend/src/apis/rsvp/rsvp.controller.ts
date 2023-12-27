import {Request, Response} from "express";
import {Rsvp} from "../../utils/interfaces/Rsvp";
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/interfaces/Profile"
import {insertRsvp} from "../../utils/rsvp/insertRsvp";
import {selectRsvpByRsvpProfileId} from "../../utils/rsvp/selectRsvpByRsvpProfileId";
import {selectRsvpByRsvpEventId} from "../../utils/rsvp/selectRsvpByRsvpEventId";
import {selectAllRsvp} from "../../utils/rsvp/selectAllRsvp";

export async function postRsvp(request: Request, response: Response) : Promise<Response> {
    try {
        const profile = <Profile>request.session.profile
        const profileIdFromSession: string = <string>profile.profileId
        const {rsvpEventId} = request.body
        const rsvp = {
            rsvpProfileId: profileIdFromSession,
            rsvpEventId: rsvpEventId
        }
        const result = await insertRsvp(rsvp)
        return response.json({status: 200, data: result, message: "Rsvp successfully created"})
    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function getRsvpByRsvpProfileId(request: Request, response: Response): Promise<Response> {
    try {
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId
        const result = await selectRsvpByRsvpProfileId(profileIdFromSession)
        return response.json({status: 200, data: result, message: "successfully got rsvp by rsvpProfileId"})
    } catch(error:any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function getRsvpByRsvpEventId(request: Request, response: Response): Promise<Response> {
    try {
        const {rsvpEventId} = request.body
        const result = await selectRsvpByRsvpEventId(rsvpEventId)
        return response.json({status: 200, data: result, message: "successfully got rsvp by rsvpEventId"})
    } catch(error:any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function getAllRsvp(request: Request, response: Response): Promise<Response> {
    try {
        const result = await selectAllRsvp()
        return response.json({status: 200, data: result, message: "got all rsvps"})
    } catch(error:any) {
        throw error
    }
}
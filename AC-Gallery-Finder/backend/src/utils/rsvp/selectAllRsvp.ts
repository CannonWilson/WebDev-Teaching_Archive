import {connect} from "../database.utils";
import {RowDataPacket,} from "mysql2"
import {Rsvp} from "../interfaces/Rsvp";

export async function selectAllRsvp(): Promise<Rsvp[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(rsvpProfileId) AS rsvpProfileId, BIN_TO_UUID(rsvpEventId) AS rsvpEventId FROM rsvp'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Rsvp>
    } catch(error: any) {
        throw error
    }
}

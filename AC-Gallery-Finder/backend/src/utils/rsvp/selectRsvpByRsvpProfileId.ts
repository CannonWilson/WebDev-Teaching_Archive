import {connect} from "../database.utils";
import {Rsvp} from "../interfaces/Rsvp";
import {RowDataPacket} from 'mysql2';

export async function selectRsvpByRsvpProfileId(rsvpProfileId: string): Promise<Rsvp[]>  {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = 'SELECT BIN_TO_UUID(rsvpProfileId) AS rsvpProfileId, BIN_TO_UUID(rsvpProfileId) AS rsvpProfileId FROM rsvp WHERE rsvpProfileId = :rsvpProfileId'

        const result = await <RowDataPacket>mysqlConnection.execute(sqlQuery, {rsvpProfileId})
        return result[0] as Rsvp[]
    } catch (error) {
        throw error
    }
}
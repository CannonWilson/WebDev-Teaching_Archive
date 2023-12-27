import {connect} from "../database.utils";
import {Rsvp} from "../interfaces/Rsvp";
import {RowDataPacket} from 'mysql2';

export async function selectRsvpByRsvpEventId(rsvpEventId: string): Promise<Rsvp[]>  {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = 'SELECT BIN_TO_UUID(rsvpProfileId) as rsvpProfileId, BIN_TO_UUID(rsvpEventId) AS rsvpEventId FROM rsvp WHERE rsvpEventId = rsvpEventId'
        const result = await <RowDataPacket>mysqlConnection.execute(sqlQuery, {rsvpEventId})
        return result[0] as Rsvp[]
    } catch (error) {
        throw error
    }
}

/*
rsvpProfileId BINARY(16) NOT NULL,
    rsvpEventId   BINARY(16) NOT NULL,
 */
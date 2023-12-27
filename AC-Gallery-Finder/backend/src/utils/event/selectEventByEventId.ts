import {connect} from "../database.utils";
import {Event} from "../interfaces/Event";
import {RowDataPacket} from 'mysql2';

export async function selectEventByEventId(eventId: string): Promise<Event|null>  {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = 'SELECT BIN_TO_UUID(eventId) as eventId, BIN_TO_UUID(eventProfileId) as eventProfileId, eventAddress, eventDescription, eventEndDate, eventLatitude, eventLongitude, eventName, eventStartDate FROM event WHERE eventId = UUID_TO_BIN(:eventId)'
        const result = await mysqlConnection.execute(sqlQuery, {eventId}) as RowDataPacket[]
        const rows: Event[]  = result[0] as Event[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}

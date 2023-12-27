import {connect} from "../database.utils";
import {Rsvp} from "../interfaces/Rsvp";

export async function insertRsvp(rsvp: Rsvp) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO rsvp(rsvpProfileId, rsvpEventId) VALUES (UUID_TO_BIN(:rsvpProfileId), UUID_TO_BIN(:rsvpEventId))'
        await mysqlConnection.execute(query, rsvp);
        return 'Rsvp Successfully Created'
    } catch(error) {
        console.log(error)
        throw error
    }
}
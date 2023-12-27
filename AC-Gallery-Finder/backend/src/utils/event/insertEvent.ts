import {connect} from "../database.utils";
import {Event} from "../interfaces/Event";

export async function insertEvent(event: Event) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query: string = 'INSERT INTO event(eventId, eventProfileId, eventAddress, eventDescription, eventEndDate, eventLatitude, eventLongitude, eventName, eventStartDate) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(:eventProfileId), :eventAddress, :eventDescription, :eventEndDate, :eventLatitude, :eventLongitude, :eventName, :eventStartDate)'
        await mysqlConnection.execute(query, event);
        return 'Event Successfully Created'
    } catch (error) {
        console.log(error)
        throw error
    }
}
import {Event} from "../interfaces/Event";
import {connect} from "../database.utils";
import {RowDataPacket,} from "mysql2"


// Make sure to edit
export async function selectAllEvents(): Promise<Event[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(eventId) AS eventId, BIN_TO_UUID(eventProfileId) AS eventProfileId, eventAddress, eventDescription, eventEndDate, eventLatitude, eventLongitude, eventName, eventStartDate FROM event'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Event>
    } catch(error: any) {
        throw error
    }
}

/*
    eventId          BINARY(16) NOT NULL,
    eventProfileId   BINARY(16) NOT NULL,    -- foreign keys have higher precendence than other attributes
    eventAddress     VARCHAR(512)  NOT NULL, -- full USPS address, street, city, zip, etc.
    eventDescription VARCHAR(256)  NOT NULL,
    eventEndDate     DATETIME(6) NOT NULL,
    eventLatitude    DECIMAL(8, 5) NOT NULL, -- 8 digits, 5 after decimal
    eventLongitude   DECIMAL(8, 5) NOT NULL,
    eventName        VARCHAR(32)   NOT NULL,
    eventStartDate   DATETIME(6) NOT NULL,
 */
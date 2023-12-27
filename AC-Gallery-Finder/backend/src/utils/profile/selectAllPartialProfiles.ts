import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";
// import {Status} from "../interfaces/Status";
import {RowDataPacket,} from "mysql2"


export async function selectAllPartialProfiles(): Promise<Event[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(profileId) AS profileId, profileBio, profileEmail, profileHometown, profileName, profileImage, profileStyle FROM profile'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Event>
    } catch(error: any) {
        throw error
    }
}

/*
    profileId : string|null,
    profileBio: string|null,
    profileEmail: string,
    profileHometown: string|null,
    profileName: string,
    profileImage: string|null,
    profileStyle: string|null
 */
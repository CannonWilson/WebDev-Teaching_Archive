import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string>{
	console.log(profile)
	try {
		const mysqlConnection = await connect();
		const query : string = 'INSERT INTO profile(profileId, profileActivationToken, profileBio, profileHash, profileHometown, profileName, profileImage, profileStyle, profileEmail) VALUES (UUID_TO_BIN(UUID()) ,:profileActivationToken, :profileBio, :profileHash, :profileHometown, :profileName, :profileImage, :profileStyle, :profileEmail)';
		await mysqlConnection.execute(query, profile);
		return 'Profile Successfully Created'
	} catch (error) {
		console.log(error)
		throw error
	}
}
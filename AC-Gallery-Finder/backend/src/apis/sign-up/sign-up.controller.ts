import {Request, Response} from 'express';
// DB
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Profile} from '../../utils/interfaces/Profile';
import {Status} from '../../utils/interfaces/Status';
import {insertProfile} from '../../utils/profile/insertProfile';
import formData from 'form-data'
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';


// Interfaces (represent the DB model and types of the columns associated with a specific DB table)


export async function signupProfileController(request: Request, response: Response): Promise<Response | undefined> {
	try {

		const mailgun: Mailgun = new Mailgun(formData)
		const mailgunClient: Client = mailgun.client({username: "api", key: <string>process.env.MAILGUN_API_KEY})

		const {profileEmail, profileName, profilePassword} = request.body;

		const profileBio = request.body.profileBio ?? null
		const profileStyle = request.body.profileStyle ?? null
		const profileHometown = request.body.profileHometown ?? null
		const profileHash = await setHash(profilePassword);
		const profileActivationToken = setActivationToken();
		const profileImage = 'http://www.fillmurray.com/100/150'
		const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}/activation/${profileActivationToken}`
		console.log(profileActivationToken)

		const message = `<h2>Welcome to DDCTwitter.</h2>
<p>In order to start posting tweets of cats you must confirm your account </p>
<p><a href="${basePath}">${basePath}</a></p>
`

		const mailgunMessage = {
			from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
			to: profileEmail,
			subject: 'One step closer to Sticky Head -- Account Activation',
			html: message
		}


		const profile: Profile = {
			profileId:null,
			profileActivationToken,
			profileBio,
			profileEmail,
			profileHash,
			profileHometown,
			profileName,
			profileImage,
			profileStyle
		};
		await insertProfile(profile)

		await mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)

		const status: Status = {
			status: 200,
			message: 'Profile successfully created please check your email.',
			data: null
		};

		return response.json(status)

	} catch (error: any) {

		const status: Status = {
			status: 500,
			message: error.message,
			data: null
		};

		return response.json(status);
	}
}

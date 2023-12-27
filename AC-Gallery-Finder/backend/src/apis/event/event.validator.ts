import {Schema} from "express-validator";

export const eventValidator : Schema = {
    // eventId: {
    //     isUUID : {
    //         errorMessage: 'please provide a valid eventId'
    //     }
    // },
    // eventProfileId: {
    //     isUUID: {
    //         errorMessage: 'please provide a valid eventProfileId'
    //     }
    // },
    eventAddress: {
        escape: true,
        trim: true
    },
    eventDescription: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'please provide an eventDescription between 1 and 256 characters',
            options: {min: 1, max:256}
        }
    },
    eventEndDate: {
        escape: true,
        trim: true,


        // isDate: { // Is this the correct format?
        //     options: {format: "YYYY-MM-DD"}
        // }

    },
    eventLatitude: {
        escape: true,
        trim: true
    },
    eventLongitude: {
        escape: true,
        trim: true
    },
    eventName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'please provide an eventName between 1 and 32 characters',
            options: {min: 1, max: 32}
        }
    },
    eventStartDate : {
        escape: true,
        trim: true,


        // isDate: { // Is this the correct format?
        //     options: {format: "YYYY-MM-DD"}
        // }

    }
}
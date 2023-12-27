import {Schema} from "express-validator";

export const profileValidator : Schema = {
  profileId: {
    isUUID: {
      errorMessage: 'please provide a valid TweetProfileId'
    }
  },
  profileBio: {
    escape: true,
    trim: true,
    optional: true,
    isLength: {
      errorMessage: 'profileBio must be between one and one hundred characters',
      options: {min:1, max: 100 }
    }
  },
  profileEmail: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    trim: true
  },
  profileHometown: {
    escape: true,
    trim: true,
    optional: true,
    isLength: {
      errorMessage: 'profileHometown must be between one and fifty characters',
      options: {min: 1, max: 50}
    }
  },
  profileName: {
    escape: true,
    trim: true,
    optional: true,
    isLength: {
      errorMessage: 'profileName must be between one and twenty characters',
      options: {min: 1, max: 20}
    }
  },
  profileImage: {
    optional: {
      options: {
        nullable: true
      }
    },
    isURL: {
      errorMessage: "profile avatar is malformed please upload a new image"
    },
  },
  profileStyle: {
    escape: true,
    trim: true,
    optional: true,
    isLength: {
      errorMessage: 'profileStyle must be between one and twenty characters',
      options: {min: 1, max: 20}
    }
  }
};
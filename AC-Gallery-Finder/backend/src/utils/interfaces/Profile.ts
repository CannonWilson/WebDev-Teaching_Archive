export interface PartialProfile {
    profileId : string|null,
    profileBio: string|null,
    profileEmail: string,
    profileHometown: string|null,
    profileName: string,
    profileImage: string|null,
    profileStyle: string|null
}

export interface Profile {
    profileId : string|null,
    profileActivationToken : string|null,
    profileBio: string|null,
    profileEmail: string,
    profileHash: string,
    profileHometown: string|null,
    profileName: string,
    profileImage: string|null,
    profileStyle: string|null
}

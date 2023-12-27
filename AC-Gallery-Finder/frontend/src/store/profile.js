import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"
import {fetchAuth} from './auth'

// Define our reducer and action.
const profileSlice = createSlice({
    name: "profile",
    initialState: null,
    reducers: { // reducers are basically actions and reducers at the same time
        getProfileByProfileId: (profile, action) => {
            return action.payload
        },
        getAllProfiles: (profile, action) => { // passing the state of  the profile, not an actual profile
            // action.payload is basically getting a new state
            return action.payload // Returns an array of all the profiles
        }
    }
})

// Make our actions callable as functions.
export const {getProfileByProfileId} = profileSlice.actions
export const {getAllProfiles} = profileSlice.actions

// We use export default here so that if something imports this file, they will get it by default
export default profileSlice.reducer

export const fetchProfileByProfileId = () => async (dispatch, getState) => {
    await dispatch(fetchAuth()) // Fetch auth makes sure someone is logged in
    const {auth} = getState()
    if (auth !== null) {
        const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
        console.log(data)
        dispatch(getProfileByProfileId(data))
    }
}

export const fetchAllProfiles = () => async (dispatch) => {
    // user does not need to be logged in to see all of the profiles
    const {data} = await httpConfig.get('/apis/profile/getAllPartialProfiles') // make sure to check with the route in the backend utils
    // dispatching data to the reducer to update the state
    dispatch(getAllProfiles(data))
}
import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

// Step 1: create the slice - a slice is an object. It's a function from redux toolkit. We give it name,
// initial state, and reducers

const eventSlice = createSlice({
    name: "event",
    initialState: [],
    reducers: {
        getAllEvents:(event, action) => {
            return action.payload
        },
        getEventByEventId:(event, action) =>{
            return action.payload
        }
    }
})
export const {getAllEvents, getEventByEventId} = eventSlice.actions
// Step 2: create the function that fetches data from the backend

export const fetchAllEvents = () => async (dispatch) => {
    const {data} = await httpConfig(`/apis/event/getAllEvents/`);
    dispatch(getAllEvents(data))
}
export const  fetchEventByEventId = (id) => async (dispatch) => {
    const {data} = await httpConfig (`apis/event/eventId/${id}`);
    dispatch(getEventByEventId(data))


}
export default eventSlice.reducer
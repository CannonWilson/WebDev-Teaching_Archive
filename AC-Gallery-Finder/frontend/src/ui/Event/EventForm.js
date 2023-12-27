import * as Yup from "yup"
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllEvents} from "../../store/event";
import {httpConfig} from "../../utils/httpConfig";
import {EventFormContent} from "./EventFormContent";
import Geocode from "react-geocode";
import jwtDecode from "jwt-decode";
import {getAuth} from "../../store/auth";


export const EventForm = () => {

    const Geocodio = require('geocodio-library-node');
    const geocoder = new Geocodio('7bcccf8889f7aff6d61c8b9f612a8b8f29a2b71');

    const event = {
        eventDescription: "",
        eventName: "",
        eventAddress: "",
        eventEndDate: "",
        eventStartDate: ""
    }

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth ? state.auth : null); // make sure they are logged in

    const validator = Yup.object().shape({
        eventDescription: Yup.string().required("Event description is required."),
        eventName: Yup.string().required("Event name is required"),
        eventAddress: Yup.string().required("Event address is required"),
        eventStartDate: Yup.string().required("Event start date is required"),
        eventEndDate: Yup.string().required("Event end date is required")
    })

    const addressToLatLong = async (address) => {
        const latLong = await geocoder.geocode(address)
            .then(response => {
                //console.log('lat', response.results[0].location.lat, 'lng', response.results[0].location.lng)
                return response.results[0].location
            })
            .catch(err => {
                    console.error(err);
                }
            );
        return latLong
    }

    const submitEvent = async (values, {resetForm, setStatus}) => {
        const eventProfileId = auth?.profileId ?? null
        const getLat = async (address) => {
            const res = await addressToLatLong(address)
            return res.lat
        }
        const getLng = async (address) => {
            const res = await addressToLatLong(address)
            return res.lng
        }
        const eventLatitude = await getLat(values.eventAddress)
        const eventLongitude = await getLng(values.eventAddress)
        const event = {eventProfileId, eventLatitude, eventLongitude, ...values}
        httpConfig.post("/apis/event/", event)
            .then(reply => {
                let {message, type} = reply
                if (reply.status === 200) { // event post was successful
                    resetForm();
                    dispatch(fetchAllEvents())
                }
                setStatus({message, type})
            })
    }

    return (
        <Formik
            initialValues={event}
            onSubmit={submitEvent}
            validationSchema={validator}>
            {EventFormContent}
        </Formik>
    )
}
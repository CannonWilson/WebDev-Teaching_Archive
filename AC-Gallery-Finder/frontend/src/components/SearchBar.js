import React, {useState} from "react";
import "./SearchBar.css"
import {EventCard} from "../ui/Event/EventCard";
import {ProfileCard} from "./ProfileCard";

function SearchBar(props) {


// FILTER LOGIC
//     const [name, setName] = useState('')
//     const [foundUsers, setFoundUsers] = useState({userData})
//
//     const filter = (element) => {
//         const keyword = element.target.value
//
//         if (keyword !== '') {
//             const results = userData.filter((user) => {
//                 return user.name.toLowerCase().startsWith(keyword.toLowerCase())
//             })
//             setFoundUsers(results)
//         } else {
//             setFoundUsers(userData) // if text field is empty, show all users
//         }
//
//         setName(keyword)
//     }


    const [event, setEvent] = useState('')
    const eventData = props.events
    const [foundEvents, setFoundEvents] = useState({eventData})


    const filterEvent = (element) => {
        // Get what the user typed in
        const input = element.target.value

        if (input !== '') { // if input is not empty
            const results = eventData.filter((event) => {
                return event.eventName.toLowerCase().startsWith(input.toLowerCase())
            })
            setFoundEvents(results)
        } else {
            // if no input, show all events.
            // In the futures, may want to change this to only first five events
            setFoundEvents('')
        }
        setEvent(input)
    }



    return (
        <div className = "bar">
            <div>
                <input
                    type="search"
                    value={event}
                    onChange={filterEvent}
                    className="input"
                    placeholder="Search"
                />

                {/* Events Filter */}
                <div>
                    {foundEvents && foundEvents.length > 0 ? (
                        foundEvents.map((event) => (
                            <li key={event.eventId} className="event">
                                <span className="user-name">{event.eventName}</span>
                            </li>
                        ))
                    ) : (
                        <h6>No results found!</h6>
                    )}
                </div>

            {/*  Write Profile Filter Logic here */}





            </div>
        </div>
    )
}

export default SearchBar
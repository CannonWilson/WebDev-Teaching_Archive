import React, {useRef, useEffect, useState} from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel';
import MainNavbar from "../components/MainNavbar";
import SearchBar from "../components/SearchBar";
import Toggle from "../components/Toggle";
import {CustomFooter} from "../components/CustomFooter";
import ReactMapGl from "react-map-gl"
import "./Home.css";
import {Pin} from "./Pin";
import {fetchAllProfiles} from "../store/profile";
import {useDispatch, useSelector} from "react-redux";
import {ProfileCard} from "../components/ProfileCard"
import {fetchAllEvents} from "../store/event";
import {EventCard} from "./Event/EventCard";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export const Home = () => {

    const dispatch = useDispatch()
    const profileList = useSelector((state) => state.profile ? state.profile : []) // state.profile references the state we want from the store
    const eventList = useSelector((state) => state.event ? state.event : []) // state.event references the state we want from the store
    const event = useSelector((state => {
        console.log(state)
        return state.event
    }))
    const initialEffects = () => {
        dispatch(fetchAllProfiles())
        dispatch(fetchAllEvents())
    }
    React.useEffect(initialEffects, [dispatch])

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    console.log(event)


    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;


    const [viewport, setViewport] = React.useState({
        latitude: 35.2220,
        longitude: -101.8313,
        zoom: 11
    });


    return (
        <div className="home-page">
            <div className="content-wrapper"> {/*Everything is in content-wrapper except the footer*/}
                <MainNavbar/>
                <Container fluid className="text-center">
                    <Toggle/>
                    <div id="searchBarWrapper">
                        <SearchBar profiles={profileList}
                                   events={eventList}/>
                    </div>
                </Container>
                {/*    Styling for map in index.css*/}


              <Container>
                  <ReactMapGl
                    {
                        ...viewport
                    }
                    width={"70vw"}
                    height={"90vh"}
                    onViewportChange={nextViewport=> setViewport(nextViewport)}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    className={"map-container"}

                    >
                        {
                            event.map(event => <Pin lat={event.eventLatitude} lng={event.eventLongitude}/>)
                        }
                    </ReactMapGl>
                </Container>

            </div>


            {/*<div className="carousel">*/}
            {/*    <ItemsCarousel*/}
            {/*        requestToChangeActive={setActiveItemIndex}*/}
            {/*        activeItemIndex={activeItemIndex}*/}
            {/*        numberOfCards={2}*/}
            {/*        gutter={20}*/}
            {/*        leftChevron={<button>{'<'}</button>}*/}
            {/*        rightChevron={<button>{'>'}</button>}*/}
            {/*        outsideChevron*/}
            {/*        chevronWidth={chevronWidth}*/}
            {/*    >*/}
            <Container className="pb-5">
                <Row>
                    {event.map(event => <EventCard key={event.eventId} event={event}/>)}
                </Row>
            </Container>


            {/*<div style={{ height: 200, background: '#EEE' }}>First card</div>*/}
            {/*<div style={{ height: 200, background: '#EEE' }}>Second card</div>*/}
            {/*<div style={{ height: 200, background: '#EEE' }}>Third card</div>*/}
            {/*<div style={{ height: 200, background: '#EEE' }}>Fourth card</div>*/}
            {/*</ItemsCarousel>*/}
            {/*</div>*/}

            <CustomFooter/>
        </div>
    );
}

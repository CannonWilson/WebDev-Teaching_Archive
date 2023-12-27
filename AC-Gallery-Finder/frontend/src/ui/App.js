import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './Home'
import 'bootstrap/dist/css/bootstrap.css';
import {FourOhFour} from './FourOhFour'
import {PrivacyPolicy} from "./PrivacyPolicy";
import {Profile} from "./Profile";
import {AboutUs} from "./AboutUs";
import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'

// Import react-redux so we can use the store.


import {Provider} from "react-redux";
import {SignUp} from "./SignUp";

export const App = (store) => {

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about-us' component={AboutUs}/>
                        <Route exact path='/privacy-policy' component={PrivacyPolicy}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/sign-up' component={SignUp}/>
                        <Route component={FourOhFour}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    );
}
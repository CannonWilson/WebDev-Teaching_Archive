import {configureStore, combineReducers} from "@reduxjs/toolkit";
import auth from "./auth";
import profile from "./profile";
import event from "./event";
import piece from "./piece";

const reducer = combineReducers({auth, profile, event, piece})
export const store = configureStore({reducer});
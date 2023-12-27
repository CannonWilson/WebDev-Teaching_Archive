import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {FormDebugger} from "../FormDebugger";

export const EventFormContent = (props) => {

    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return (
        <>
        <form onSubmit={handleSubmit}>

            {/*  First form-group, Event Name  */}
            <div className="form-group">
                <label htmlFor="eventName">Event Name</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon="pencil-alt"/>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="eventName"
                        type="text"
                        value={values.eventName}
                        placeholder="please name your event"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {
                    errors.eventName && touched.eventName && (
                        <div className="alert alert-danger">
                            {errors.eventName}
                        </div>
                    )
                }
            </div>

            {/* Second form-group, Event Description*/}
            <div className="form-group">
                <label htmlFor="eventDescription">Description</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon="pencil-alt"/>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="eventDescription"
                        type="text"
                        value={values.eventDescription}
                        placeholder="please describe your event"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {
                    errors.eventDescription && touched.eventDescription && (
                        <div className="alert alert-danger">
                            {errors.eventDescription}
                        </div>
                    )
                }
            </div>

        {/* Third form-group, Event Address */}
            <div className="form-group">
                <label htmlFor="eventAddress">Address</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon="pencil-alt"/>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="eventAddress"
                        type="text"
                        value={values.eventAddress}
                        placeholder="Your event's address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {
                    errors.eventAddress && touched.eventAddress && (
                        <div className="alert alert-danger">
                            {errors.eventDescription}
                        </div>
                    )
                }
            </div>

        {/*  Fourth Form Group, event start date  */}
            <div className="form-group">
                <label htmlFor="eventStartDate">Event Start Date</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon="pencil-alt"/>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="eventStartDate"
                        type="text"
                        value={values.eventStartDate}
                        placeholder="1995-12-17T03:24:00"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {
                    errors.eventStartDate && touched.eventStartDate && (
                        <div className="alert alert-danger">
                            {errors.eventStartDate}
                        </div>
                    )
                }
            </div>

        {/*  Fifth form-group, event end-date  */}
            <div className="form-group">
                <label htmlFor="eventEndDate">Event End Date</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon="pencil-alt"/>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="eventEndDate"
                        type="text"
                        value={values.eventEndDate}
                        placeholder="1995-12-17T03:24:00"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {
                    errors.eventEndDate && touched.eventEndDate && (
                        <div className="alert alert-danger">
                            {errors.eventEndDate}
                        </div>
                    )
                }
            </div>

            <div className="form-group">
                <button className="btn btn-primary mb-2" type="submit">Submit</button>
                <button
                    className="btn btn-danger mb-2"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                >Reset
                </button>
            </div>


            {/*<FormDebugger {...props} />*/}
        </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
}
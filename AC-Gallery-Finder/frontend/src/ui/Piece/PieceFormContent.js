import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {FormDebugger} from "../FormDebugger";

export const PieceFormContent = (props) => {
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
                {/*controlId must match what is passed to the initialValues prop*/}

                <div className="form-group">
                    <label htmlFor="pieceDescription">Description</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="pencil-alt"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="pieceDescription"
                            type="text"
                            value={values.pieceDescription}
                            placeholder="please enter a description of your work"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.pieceDescription && touched.pieceDescription && (
                            <div className="alert alert-danger">
                                {errors.pieceDescription}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="pieceName">Name</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="pencil-alt"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="pieceName"
                            type="text"
                            value={values.pieceName}
                            placeholder="please enter a name for your work"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.pieceName && touched.pieceName && (
                            <div className="alert alert-danger">
                                {errors.pieceName}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="pieceImage">Image URL</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="pencil-alt"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="pieceImage"
                            type="text"
                            value={values.pieceImage}
                            placeholder="please enter an image URL"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.pieceImage && touched.pieceImage && (
                            <div className="alert alert-danger">
                                {errors.pieceImage}
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
};
import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import { useSelector, useDispatch } from 'react-redux'
import {fetchAllPiece} from "../../store/piece";
import {httpConfig} from "../../utils/httpConfig";
import {PieceFormContent} from "./PieceFormContent";

export const PieceForm = () => {
    const piece = {
        pieceDescription: "",
        pieceName: "",
        pieceImage: ""
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);

    const validator = Yup.object().shape({
        pieceDescription: Yup.string().required("piece description is required"),
        pieceName: Yup.string().required("piece name is required"),
        pieceImage: Yup.string().required("piece content is required"),
    });

    const submitPiece = (values, {resetForm, setStatus}) => {
        const pieceProfileId = auth?.profileId ?? null
        const piece = {pieceProfileId, ...values}
        httpConfig.post("/apis/piece/", piece)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                        dispatch(fetchAllPiece())
                    }
                    setStatus({message, type});
                }
            );
    };


    return (
        <Formik
            initialValues={piece}
            onSubmit={submitPiece}
            validationSchema={validator}
        >
            {PieceFormContent}
        </Formik>

    )
};
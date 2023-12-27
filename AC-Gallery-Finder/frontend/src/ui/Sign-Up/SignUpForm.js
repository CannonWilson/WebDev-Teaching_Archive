import React from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import {SignUpFormContent} from "./SignUpFormContent";
import {useDispatch} from "react-redux";
import jwtDecode from 'jwt-decode'
import {httpConfig} from "../../utils/httpConfig";
import {getAuth} from "../../store/auth";
import {useHistory} from "react-router";

export const SignUpForm = () => {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        profilePasswordConfirm: Yup.string()
            .oneOf([Yup.ref("profilePassword"),null],"passwords must match")
    });


    //the initial values object defines what the request payload is.
    const signUp = {
        profileEmail: "",
        profilePassword: "",
        profileName: "",
    }
    const history = useHistory()
    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);
                    resetForm();
                    let jwtToken = jwtDecode(reply.headers["authorization"])
                    dispatch(getAuth(jwtToken))
                    history.push("/profile")
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik
                initialValues={signUp}
                onSubmit={submitSignUp}
                validationSchema={validator}
            >
                {SignUpFormContent}
            </Formik>
        </>
    )
};

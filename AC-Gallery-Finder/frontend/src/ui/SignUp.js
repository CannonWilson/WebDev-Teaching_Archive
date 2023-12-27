import React from 'react';
import {CustomFooter} from "../components/CustomFooter";
import {Container, Col, Row, Button} from 'react-bootstrap'
import './SignUp.css'
import MainNavbar from "../components/MainNavbar";
import {httpConfig} from "../utils/httpConfig";
import {SignInForm} from "./Sign-In/SignInForm";
import {SignUpForm} from "./Sign-Up/SignUpForm";

export const SignUp = () => {

    function signUp() {
        let good = true;
        const name = document.getElementById("name")
        const email = document.getElementById("email")
        const password = document.getElementById("password")
        const confirmPassword = document.getElementById("confirm-password")

        if (name.value.length < 1) {
            good = false;
            name.placeholder = "This field cannot be empty"
            name.classList.add("incorrect")
        }

        if (email.value.length < 1) {
            good = false;
            email.placeholder = "This field cannot be empty"
            email.classList.add("incorrect")
        }

        if (password.value.length < 1) {
            good = false;
            password.placeholder = "This field cannot be empty"
            password.classList.add("incorrect")
        }
        if (confirmPassword.value.length < 1) {
            good = false;
            confirmPassword.placeholder = "This field cannot be empty"
            confirmPassword.classList.add("incorrect")
        }

        if (!email.value.includes('@') || !email.value.includes('.')) {
            good = false;
            email.value = ""
            email.placeholder = "Please check your email formatting"
            email.classList.add("incorrect")
        }

        if (password.value !== confirmPassword.value) {
            good = false;
            password.value = ""
            confirmPassword.value = ""
            password.placeholder = "Passwords do not match"
            confirmPassword.placeholder = "Passwords do not match"
            password.classList.add("incorrect")
            confirmPassword.classList.add("incorrect")
        }

        if (good) {
            const values = {
                "profileEmail" : email.value,
                "profileName" : name.value,
                "profilePassword" : password.value,
                "profilePasswordConfirm" : confirmPassword.value
            }
            httpConfig.post("/apis/sign-up", values)
                .then(reply => {
                        if(reply.status === 200) { // if the post was successful
                            // Load up the profile page
                            window.location.href="/profile"
                        } else {
                            alert("There was a problem signing up. This is an error on our end, please sit tight. Check back in later or email CWilson1901@gmail.com for assistance.")
                        }
                    }
                );
        }
    }

    return (

        <div className="position-relative">
            <MainNavbar/>

            {/* Make fields for  profileImage, profileName, profileEmail, profilePassword, profileBio, ProfileHometown, profileStyle */}
            <Container className="main">

                <Row className="mt-5">
                    <Col className="text-center">
                        <h2>Create an Account</h2>
                        <SignUpForm/>
                    </Col>

                    <Col className="text-center">
                        <h2>Sign In</h2>
                        <SignInForm/>
                    </Col>

                </Row>
            </Container>

            <CustomFooter/>
        </div>

    );
}
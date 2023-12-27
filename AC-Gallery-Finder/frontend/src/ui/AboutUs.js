import React from 'react';
import aboutUsImage from "./images/nettyR.jpeg"
import cannonImage from "./images/IMG_3989 copy.jpg"
import {CustomFooter} from "../components/CustomFooter";
import {Container, Col, Image, Row} from 'react-bootstrap'
import NickImage from './images/profile-images/profileImage.png'
import './AboutUs.css'
import NelsImage from "../../../../AC-Gallery-Finder/frontend/src/images/Nels.JPG";
import MainNavbar from "../components/MainNavbar";
import GithubLogo from "../../../../AC-Gallery-Finder/frontend/src/images/github-logo.png";
import WebsiteLogo from "../../../../AC-Gallery-Finder/frontend/src/images/personalWebsite-logo.png"

export const AboutUs = () => {

    return (

        <div className="position-relative">
            <MainNavbar/>

            <div className="about-wrapper">
            <Container className="my-profile">
                <Row>
                    <Col>
                        <h2>Nels Bjork</h2>

                        <p>Fate. It protects fools, little children, and ships named "Enterprise." Shields up! Rrrrred alert!
                            Fear
                            is the true enemy, the only enemy. Ensign Babyface! What's a knock-out like you doing in a
                            computer-generated gin joint like this? I'm afraid I still don't understand, sir. You're going to be
                            an
                            interesting companion, Mr. Data. Your head is not an artifact! I think you've let your personal
                            feelings
                            cloud your judgement.
                        </p>

                        <a href="https://github.com/clavos06">
                            <Image className="logos" src={GithubLogo}/>
                        </a>
                        <a href="http://nelsbjork.com">
                            <Image className="logos" src={WebsiteLogo}/>
                        </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="profile-image" roundedCircle src={NelsImage} />
                    </Col>
                </Row>
            </Container>

            <Container className="my-profile">
                <Row>
                    <Col>
                        <h3>Nicholas Del Toro</h3>
                        <p>I'm a creative who's constantly evolving and drawing inspiration from the world around me.
                            With a Bachelor's in Studio Art & Management, I've been able to understand how to implement
                            good design techniques and also refine my skills to make solid aesthetic work. While I'm new
                            to the coding world I believe the same principles still apply. Color, ephemera,
                            photo-montage and piecing work together in collage is much like building websites. Whether
                            you are building things from scratch or taking a template and tweaking it here and there,
                            the goal is still to create amazing work.</p>

                        <a href="https://github.com/nickdt96">
                            <Image className="logos" src={GithubLogo}/>
                        </a>
                        <a href="https://nicholasdeltoro.com">
                            <Image className="logos" src={WebsiteLogo}/>
                        </a>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={NickImage} roundedCircle className="profile-image"/>
                    </Col>
                </Row>
            </Container>


            <Container className="my-profile">
                <Row>
                    <Col>
                        <h3>Netty Ramirez</h3>
                        <p>Jr. Developer... Mother of Dragons aka Khaleesi. Writing software with design flare. Blazing
                            lines of
                            code. Feel the burn. Jin ave sekke verven anni m'orvikoon. Jin ave sekke verven anni
                            m'orvikoon.
                            Fini hazi? Hash yer dothrae chek asshekh? Ezas eshna gech ahilee!Ifas maisi yeri. Jalan
                            atthirari
                            anni. Yer zheanae sekke. Athdavrazar! Hash anha atihak yera save?</p>

                        <a href="https://github.com/nramirez40">
                            <Image className="logos" src={GithubLogo}/>
                        </a>
                        <a href="http://137.184.112.7">
                            <Image className="logos" src={WebsiteLogo}/>
                        </a>
                    </Col>

                    <Col xs={6} md={4}>
                        <Image src={aboutUsImage} roundedCircle className="profile-image"/>
                    </Col>
                </Row>
            </Container>

            <Container className="my-profile">
                <Row>
                    <Col>
                        <h3>Cannon Wilson</h3>
                        <p>I am a programmer, instructor, entrepreneur, and musician. Please check out my GitHub page
                        to see my most recent projects. You can learn more about me at CannonWilson.com.
                        </p>

                        <a href="https://github.com/cannonwilson">
                            <Image className="logos" src={GithubLogo}/>
                        </a>
                        <a href="http://cannonwilson.com">
                            <Image className="logos" src={WebsiteLogo}/>
                        </a>
                    </Col>

                    <Col xs={6} md={4}>
                        <Image src={cannonImage} roundedCircle className="profile-image"/>
                    </Col>
                </Row>
            </Container>

        </div>
            <CustomFooter/>
        </div>

    );
}

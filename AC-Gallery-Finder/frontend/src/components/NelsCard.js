import React from "react";
import Container from "react-bootstrap/Container";
import "../../../../AC-Gallery-Finder/frontend/src/index.css"
import {Image} from "react-bootstrap"
import NelsImage from "../../../../AC-Gallery-Finder/frontend/src/images/Nels.JPG"


export const NelsCard = () => {

    return (
        <>
            <Container>

                <h2>Nels Bjork</h2>

                <p>Fate. It protects fools, little children, and ships named "Enterprise." Shields up! Rrrrred alert!
                    Fear
                    is the true enemy, the only enemy. Ensign Babyface! What's a knock-out like you doing in a
                    computer-generated gin joint like this? I'm afraid I still don't understand, sir. You're going to be
                    an
                    interesting companion, Mr. Data. Your head is not an artifact! I think you've let your personal
                    feelings
                    cloud your judgement. \
                </p>

                <Image src={NelsImage} />
            </Container>
            </>
                 );

}

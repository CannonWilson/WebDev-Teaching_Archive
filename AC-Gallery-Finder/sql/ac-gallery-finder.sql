-- these statements will drop the tables and re-add them
-- they would need to be deleted for a production build
DROP TABLE IF EXISTS piece;
DROP TABLE IF EXISTS rsvp;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile
(
    profileId              BINARY(16) NOT NULL,
    profileActivationToken CHAR(32),
    profileBio             VARCHAR(256), -- Use VARCHAR here instead of BLOB to establish a character limit
    profileEmail           VARCHAR(128) NOT NULL,
    profileHash            CHAR(97)     NOT NULL,
    profileHometown        VARCHAR(64),
    profileImage           VARCHAR(256), -- images once uploaded get stored as a string of letters and numbers, so use VARCHAR here
    profileName            VARCHAR(64)  NOT NULL,
    profileStyle           VARCHAR(256),
    UNIQUE (profileEmail),
    PRIMARY KEY (profileId)
);

CREATE TABLE event
(
    eventId          BINARY(16) NOT NULL,
    eventProfileId   BINARY(16) NOT NULL,    -- foreign keys have higher precedence than other attributes
    eventAddress     VARCHAR(512)  NOT NULL, -- full USPS address, street, city, zip, etc.
    eventDescription VARCHAR(256)  NOT NULL,
    eventEndDate     DATETIME(6) NOT NULL,
    eventLatitude    DECIMAL(8, 5) NOT NULL, -- 8 digits, 5 after decimal
    eventLongitude   DECIMAL(8, 5) NOT NULL,
    eventName        VARCHAR(32)   NOT NULL,
    eventStartDate   DATETIME(6) NOT NULL,
    INDEX(eventProfileId),
    FOREIGN KEY (eventProfileId) REFERENCES profile (profileId),
    PRIMARY KEY (eventId)                    -- Primary keys are enforced as unique by the database
);

CREATE TABLE rsvp
(
    rsvpProfileId BINARY(16) NOT NULL,
    rsvpEventId   BINARY(16) NOT NULL,
    INDEX(rsvpEventId), -- Just make sure to index all foreign keys so they can connect to the respective primary keys
    INDEX(rsvpProfileId),
    FOREIGN KEY (rsvpProfileId) REFERENCES profile (profileId),
    FOREIGN KEY (rsvpEventId) REFERENCES event (eventId),
    PRIMARY KEY (rsvpEventId, rsvpProfileId)
);

create TABLE piece
(
    pieceId          BINARY(16) NOT NULL,
    pieceProfileId   BINARY(16) NOT NULL,
    pieceDescription VARCHAR(2056) NOT NULL,
    pieceImage       VARCHAR(256)  NOT NULL,
    pieceName        VARCHAR(256)  NOT NULL,
    FOREIGN KEY (pieceProfileId) REFERENCES profile (profileId),
    PRIMARY KEY (pieceId)

);
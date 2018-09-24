-- create database
CREATE DATABASE movienightdb;

-- use it
use movienightdb;

-- tables
-- Table: events
CREATE TABLE events (
    id bigint NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    location varchar(80) NOT NULL,
    date date NOT NULL,
    CONSTRAINT events_pk PRIMARY KEY (id)
);

-- Table: friendships
CREATE TABLE friendships (
    id bigint NOT NULL AUTO_INCREMENT,
    user_id bigint NOT NULL,
    friend_id bigint NOT NULL,
    confirmed bool NOT NULL,
    CONSTRAINT friendships_pk PRIMARY KEY (id,user_id)
);

-- Table: media_contents
CREATE TABLE media_contents (
    id int NOT NULL AUTO_INCREMENT,
    playlist_id int NOT NULL,
    title varchar(20) NOT NULL,
    year varchar(15) NOT NULL,
    image_url text NULL,
    CONSTRAINT media_contents_pk PRIMARY KEY (id)
);

-- Table: notifications
CREATE TABLE notifications (
    id bigint NOT NULL AUTO_INCREMENT,
    date date NOT NULL,
    reciever_id bigint NOT NULL,
    sender_id bigint NOT NULL COMMENT 'es aquel usuario quien me envio la notificacion',
    description text NOT NULL,
    CONSTRAINT notifications_pk PRIMARY KEY (id,reciever_id)
);

-- Table: participant_events
CREATE TABLE participant_events (
    id int NOT NULL AUTO_INCREMENT,
    event_id bigint NOT NULL,
    user_id bigint NOT NULL,
    rol_id int NOT NULL,
    field varchar(50) NULL,
    CONSTRAINT participant_events_pk PRIMARY KEY (id)
);

-- Table: personal_media_contents
CREATE TABLE personal_media_contents (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(20) NOT NULL,
    year varchar(15) NOT NULL,
    personal_playlist_id int NOT NULL,
    image_url text NULL,
    CONSTRAINT personal_media_contents_pk PRIMARY KEY (id)
);

-- Table: personal_playlists
CREATE TABLE personal_playlists (
    id int NOT NULL AUTO_INCREMENT,
    user_id bigint NOT NULL,
    name varchar(20) NOT NULL,
    description text NOT NULL,
    CONSTRAINT personal_playlists_pk PRIMARY KEY (id)
);

-- Table: playlists
CREATE TABLE playlists (
    id int NOT NULL AUTO_INCREMENT,
    event_id bigint NOT NULL,
    original bool NOT NULL,
    description text NOT NULL,
    CONSTRAINT playlists_pk PRIMARY KEY (id)
);

-- Table: responsabilities
CREATE TABLE responsabilities (
    id int NOT NULL AUTO_INCREMENT,
    product_name varchar(25) NOT NULL,
    description text NOT NULL,
    participant_event_id int NOT NULL,
    CONSTRAINT responsabilities_pk PRIMARY KEY (id)
);

-- Table: roles
CREATE TABLE roles (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    description text NOT NULL,
    CONSTRAINT roles_pk PRIMARY KEY (id)
);

-- Table: snacklists
CREATE TABLE snacklists (
    id int NOT NULL AUTO_INCREMENT,
    event_id bigint NOT NULL,
    original bool NOT NULL,
    description text NOT NULL,
    CONSTRAINT snacklists_pk PRIMARY KEY (id)
);

-- Table: snacks
CREATE TABLE snacks (
    id int NOT NULL AUTO_INCREMENT,
    snacklist_id int NOT NULL,
    name varchar(20) NOT NULL,
    trademark varchar(20) NOT NULL,
    CONSTRAINT snacks_pk PRIMARY KEY (id)
);

-- Table: users
CREATE TABLE users (
    id bigint NOT NULL AUTO_INCREMENT,
    user_code bigint NOT NULL,
    phone varchar(9) NULL,
    firstname varchar(30) NOT NULL,
    lastname varchar(30) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(15) NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: Event_Participant_Event (table: participant_events)
ALTER TABLE participant_events ADD CONSTRAINT Event_Participant_Event FOREIGN KEY Event_Participant_Event (event_id)
    REFERENCES events (id);

-- Reference: Event_Participant_Roles (table: participant_events)
ALTER TABLE participant_events ADD CONSTRAINT Event_Participant_Roles FOREIGN KEY Event_Participant_Roles (rol_id)
    REFERENCES roles (id);

-- Reference: Event_Participant_User (table: participant_events)
ALTER TABLE participant_events ADD CONSTRAINT Event_Participant_User FOREIGN KEY Event_Participant_User (user_id)
    REFERENCES users (id);

-- Reference: Friend_User (table: friendships)
ALTER TABLE friendships ADD CONSTRAINT Friend_User FOREIGN KEY Friend_User (user_id)
    REFERENCES users (id);

-- Reference: ModiaContent_PlayList (table: media_contents)
ALTER TABLE media_contents ADD CONSTRAINT ModiaContent_PlayList FOREIGN KEY ModiaContent_PlayList (playlist_id)
    REFERENCES playlists (id) ON DELETE CASCADE;

-- Reference: Notification_User (table: notifications)
ALTER TABLE notifications ADD CONSTRAINT Notification_User FOREIGN KEY Notification_User (reciever_id)
    REFERENCES users (id);

-- Reference: PersonalMediaContent_PersonalPlayList (table: personal_media_contents)
ALTER TABLE personal_media_contents ADD CONSTRAINT PersonalMediaContent_PersonalPlayList FOREIGN KEY PersonalMediaContent_PersonalPlayList (personal_playlist_id)
    REFERENCES personal_playlists (id) ON DELETE CASCADE;

-- Reference: PersonalPlayList_User (table: personal_playlists)
ALTER TABLE personal_playlists ADD CONSTRAINT PersonalPlayList_User FOREIGN KEY PersonalPlayList_User (user_id)
    REFERENCES users (id);

-- Reference: PlayList_Event (table: playlists)
ALTER TABLE playlists ADD CONSTRAINT PlayList_Event FOREIGN KEY PlayList_Event (event_id)
    REFERENCES events (id) ON DELETE CASCADE;

-- Reference: SnackList_Event (table: snacklists)
ALTER TABLE snacklists ADD CONSTRAINT SnackList_Event FOREIGN KEY SnackList_Event (event_id)
    REFERENCES events (id) ON DELETE CASCADE;

-- Reference: Snack_SnackList (table: snacks)
ALTER TABLE snacks ADD CONSTRAINT Snack_SnackList FOREIGN KEY Snack_SnackList (snacklist_id)
    REFERENCES snacklists (id) ON DELETE CASCADE;

-- Reference: responsabilities_participant_events (table: responsabilities)
ALTER TABLE responsabilities ADD CONSTRAINT responsabilities_participant_events FOREIGN KEY responsabilities_participant_events (participant_event_id)
    REFERENCES participant_events (id) ON DELETE CASCADE;

-- End of file.


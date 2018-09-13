-- create database
CREATE DATABASE movienightdb;
-- use database movienight
use movienightdb;
-- tables
-- Table: Event
CREATE TABLE Event (
    IDEvent bigint NOT NULL AUTO_INCREMENT,
    Name varchar(50) NOT NULL,
    Location varchar(80) NOT NULL,
    Date date NOT NULL,
    CONSTRAINT Event_pk PRIMARY KEY (IDEvent)
);

-- Table: Event_Participant
CREATE TABLE Event_Participant (
    IDEvent bigint NOT NULL AUTO_INCREMENT,
    Date date NOT NULL,
    TXTResponsabilities text NULL,
    IDUser bigint NOT NULL,
    IDRol int NOT NULL,
    Field varchar(50) NOT NULL,
    CONSTRAINT Event_Participant_pk PRIMARY KEY (IDEvent,Date)
);

-- Table: Friend
CREATE TABLE Friend (
    IDUser bigint NOT NULL,
    CodeFriend bigint NOT NULL,
    Confirmed bool NOT NULL,
    CONSTRAINT Friend_pk PRIMARY KEY (IDUser)
);

-- Table: MediaContent
CREATE TABLE MediaContent (
    IDContent int NOT NULL AUTO_INCREMENT,
    IDPlayList int NOT NULL,
    Title varchar(20) NOT NULL,
    Year varchar(15) NOT NULL,
    CONSTRAINT MediaContent_pk PRIMARY KEY (IDContent)
);

-- Table: Notification
CREATE TABLE Notification (
    IDDate date NOT NULL,
    IDReciever bigint NOT NULL,
    IDSender bigint NOT NULL COMMENT 'es aquel usuario quien me envio la notificacion',
    Description text NOT NULL,
    CONSTRAINT Notification_pk PRIMARY KEY (IDDate)
);

-- Table: PersonalMediaContent
CREATE TABLE PersonalMediaContent (
    IDPersonalContent int NOT NULL AUTO_INCREMENT,
    Title varchar(20) NOT NULL,
    Year varchar(15) NOT NULL,
    IDPersonalPlayList int NOT NULL,
    CONSTRAINT PersonalMediaContent_pk PRIMARY KEY (IDPersonalContent)
);

-- Table: PersonalPlayList
CREATE TABLE PersonalPlayList (
    IDPersonalPlayList int NOT NULL AUTO_INCREMENT,
    IDUser bigint NOT NULL,
    Name varchar(20) NOT NULL,
    CONSTRAINT PersonalPlayList_pk PRIMARY KEY (IDPersonalPlayList)
);

-- Table: PlayList
CREATE TABLE PlayList (
    IDPlayList int NOT NULL AUTO_INCREMENT,
    IDEvent bigint NOT NULL,
    Original bool NOT NULL,
    CONSTRAINT PlayList_pk PRIMARY KEY (IDPlayList)
);

-- Table: Rol
CREATE TABLE Rol (
    IDRol int NOT NULL AUTO_INCREMENT,
    NameRol varchar(20) NOT NULL,
    Description text NOT NULL,
    CONSTRAINT Rol_pk PRIMARY KEY (IDRol)
);

-- Table: Snack
CREATE TABLE Snack (
    IDSnack int NOT NULL AUTO_INCREMENT,
    IDSnackList int NOT NULL,
    Name varchar(20) NOT NULL,
    TradeMark varchar(20) NOT NULL,
    CONSTRAINT Snack_pk PRIMARY KEY (IDSnack)
);

-- Table: SnackList
CREATE TABLE SnackList (
    IDSnackList int NOT NULL AUTO_INCREMENT,
    IDEvent bigint NOT NULL,
    Original bool NOT NULL,
    CONSTRAINT SnackList_pk PRIMARY KEY (IDSnackList)
);

-- Table: User
CREATE TABLE User (
    IDUser bigint NOT NULL AUTO_INCREMENT,
    CodeUser bigint NOT NULL,
    Phone varchar(9) NULL,
    FirstName varchar(30) NOT NULL,
    LastName varchar(30) NOT NULL,
    Email varchar(50) NOT NULL,
    Password varchar(15) NOT NULL,
    CONSTRAINT User_pk PRIMARY KEY (IDUser)
);

-- foreign keys
-- Reference: Event_Participant_Event (table: Event_Participant)
ALTER TABLE Event_Participant ADD CONSTRAINT Event_Participant_Event FOREIGN KEY Event_Participant_Event (IDEvent)
    REFERENCES Event (IDEvent);

-- Reference: Event_Participant_Roles (table: Event_Participant)
ALTER TABLE Event_Participant ADD CONSTRAINT Event_Participant_Roles FOREIGN KEY Event_Participant_Roles (IDRol)
    REFERENCES Rol (IDRol);

-- Reference: Event_Participant_User (table: Event_Participant)
ALTER TABLE Event_Participant ADD CONSTRAINT Event_Participant_User FOREIGN KEY Event_Participant_User (IDUser)
    REFERENCES User (IDUser);

-- Reference: Friend_User (table: Friend)
ALTER TABLE Friend ADD CONSTRAINT Friend_User FOREIGN KEY Friend_User (IDUser)
    REFERENCES User (IDUser);

-- Reference: ModiaContent_PlayList (table: MediaContent)
ALTER TABLE MediaContent ADD CONSTRAINT ModiaContent_PlayList FOREIGN KEY ModiaContent_PlayList (IDPlayList)
    REFERENCES PlayList (IDPlayList);

-- Reference: Notification_User (table: Notification)
ALTER TABLE Notification ADD CONSTRAINT Notification_User FOREIGN KEY Notification_User (IDReciever)
    REFERENCES User (IDUser);

-- Reference: PersonalMediaContent_PersonalPlayList (table: PersonalMediaContent)
ALTER TABLE PersonalMediaContent ADD CONSTRAINT PersonalMediaContent_PersonalPlayList FOREIGN KEY PersonalMediaContent_PersonalPlayList (IDPersonalPlayList)
    REFERENCES PersonalPlayList (IDPersonalPlayList);

-- Reference: PersonalPlayList_User (table: PersonalPlayList)
ALTER TABLE PersonalPlayList ADD CONSTRAINT PersonalPlayList_User FOREIGN KEY PersonalPlayList_User (IDUser)
    REFERENCES User (IDUser);

-- Reference: PlayList_Event (table: PlayList)
ALTER TABLE PlayList ADD CONSTRAINT PlayList_Event FOREIGN KEY PlayList_Event (IDEvent)
    REFERENCES Event (IDEvent);

-- Reference: SnackList_Event (table: SnackList)
ALTER TABLE SnackList ADD CONSTRAINT SnackList_Event FOREIGN KEY SnackList_Event (IDEvent)
    REFERENCES Event (IDEvent);

-- Reference: Snack_SnackList (table: Snack)
ALTER TABLE Snack ADD CONSTRAINT Snack_SnackList FOREIGN KEY Snack_SnackList (IDSnackList)
    REFERENCES SnackList (IDSnackList);

-- End of file.


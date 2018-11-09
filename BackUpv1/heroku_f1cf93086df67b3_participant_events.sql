CREATE DATABASE  IF NOT EXISTS `heroku_f1cf93086df67b3` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `heroku_f1cf93086df67b3`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: us-cdbr-iron-east-01.cleardb.net    Database: heroku_f1cf93086df67b3
-- ------------------------------------------------------
-- Server version	5.5.56-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `participant_events`
--

DROP TABLE IF EXISTS `participant_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `participant_events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `field` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Event_Participant_Event` (`event_id`),
  KEY `Event_Participant_Roles` (`rol_id`),
  KEY `Event_Participant_User` (`user_id`),
  CONSTRAINT `Event_Participant_User` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `Event_Participant_Event` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`),
  CONSTRAINT `Event_Participant_Roles` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=291 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant_events`
--

LOCK TABLES `participant_events` WRITE;
/*!40000 ALTER TABLE `participant_events` DISABLE KEYS */;
INSERT INTO `participant_events` VALUES (51,51,61,1,NULL),(61,61,61,1,NULL),(71,71,61,1,NULL),(81,81,61,1,NULL),(91,91,61,11,NULL),(101,101,61,11,NULL),(111,111,61,11,NULL),(121,121,61,11,NULL),(131,131,61,11,NULL),(141,141,61,11,NULL),(151,151,61,11,NULL),(161,161,61,11,NULL),(171,171,61,11,NULL),(261,291,71,11,NULL),(271,291,1,1,'empty'),(281,301,81,11,NULL);
/*!40000 ALTER TABLE `participant_events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-06 23:52:21

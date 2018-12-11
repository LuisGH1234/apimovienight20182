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
-- Table structure for table `media_contents`
--

DROP TABLE IF EXISTS `media_contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media_contents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playlist_id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `year` varchar(15) NOT NULL,
  `image_url` text,
  `imdb_id` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ModiaContent_PlayList` (`playlist_id`),
  CONSTRAINT `ModiaContent_PlayList` FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media_contents`
--

LOCK TABLES `media_contents` WRITE;
/*!40000 ALTER TABLE `media_contents` DISABLE KEYS */;
INSERT INTO `media_contents` VALUES (11,61,'Captain America: Civil War','2016','https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg',NULL),(21,61,'Doctor Strange','2016','https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg',NULL),(31,61,'Captain America: The First Avenger','2011','https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg',NULL),(41,51,'Captain America: The First Avenger','2011','https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg','12345');
/*!40000 ALTER TABLE `media_contents` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-11 17:15:36

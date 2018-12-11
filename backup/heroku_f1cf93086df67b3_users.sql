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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_code` bigint(20) DEFAULT NULL,
  `phone` varchar(9) DEFAULT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `image_url` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=331 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,17449172018,'999888777','Luis','Galindo','lagh3.30@gmail.com','abc123abc','https://www.slcschools.org/accounts/employees/danielaragon/profilepictures/dan-aragon/'),(11,17499172018,'999888776','Juan','Yanqui','juanY@gmail.com','abc123abC','https://scontent.flim1-2.fna.fbcdn.net/v/t1.0-9/26169842_1601785766554789_3010483933007119022_n.jpg?_nc_cat=111&_nc_ht=scontent.flim1-2.fna&oh=226362a53bf82d95f56b4c2385c5cd7c&oe=5C6B6093'),(21,17509172018,'999888775','Omar','Chavez','drugoalex@gmail.com','abc123aBC','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMdc4dM_E21YMmK4htLJstifmnTByToba8vAy-2nGLhzdc6TJ'),(31,18219172018,'999888774','test','Tests','test@gmail.com','abc123aBC',NULL),(41,123456789,'123456789','example','example','email@example.com','123upc',NULL),(51,20,'999425178','Kevin','Ore','upcmail@example.com','123upc',NULL),(61,20,'999425178','Kevin','Ore','upcmail2@example.com','123upc',NULL),(71,3287205463,'971556634','Cesar Alexander','Castrejon Luke','CesarCas@hotmail.com','miupc.456.','URL2'),(81,3287205463,'914872833','Cesar2','Castrejon2','Cesar2Cas@hotmail.com','miupc.456.','URL'),(91,1287205463,'914872866','Adrian','Castilla','AdrianCass@hotmail.com','miupc.456#','URL2'),(201,NULL,NULL,'Kevin',NULL,'test5@mail.com','abc123abc',NULL),(211,NULL,NULL,'TestNameFromApp',NULL,'test6@mail.com','abc123abc',NULL),(221,NULL,NULL,'TestName',NULL,'test7@mail.com','abc123abc',NULL),(231,NULL,NULL,'TestName',NULL,'test8@mail.com','abc123abc',NULL),(241,NULL,NULL,'Katherine',NULL,'katherin@gmail.com','123abc',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-11 17:15:11

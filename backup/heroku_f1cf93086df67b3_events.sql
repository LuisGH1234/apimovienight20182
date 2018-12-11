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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `location` varchar(80) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `created_by` bigint(20) NOT NULL,
  `latitude` decimal(8,6) DEFAULT NULL,
  `longitude` decimal(9,6) DEFAULT NULL,
  `image_url` text,
  `description` text,
  `create_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=471 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'Movie night 1','San Isidro','2018-09-27 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(11,'Movie night 1','San Isidro','2018-09-27 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(21,'Movie night 1','San Isidro','2018-09-27 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(31,'MoviesTime','San Isidro','2018-09-27 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(41,'postman event test 4','location test','2018-05-06 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(51,'postman event test 4','location test','2018-05-06 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(61,'Movies2','San Isidro','2018-09-27 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(71,'Movies3','San Isidro','2018-09-27 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(81,'Movies4','Jesus Maria','2018-09-27 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(91,'Movies5','UPC SI','2018-10-10 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(101,'Movies6','UPC SI','2018-10-10 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(111,'Movies7','UPC MO','2018-10-10 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(121,'Movies 8','UPC Villa','2018-10-12 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(131,'UPC movie night','UPC SI','2018-11-15 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(141,'Nuevo evento ','Lince','2018-10-04 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(151,'Nuevo evento ','Lince','2018-10-04 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(161,'Nuevo evento ','Lince','2018-10-04 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(171,'Nuevo evento ','San isidro ','2018-11-03 00:00:00',0,NULL,NULL,NULL,NULL,NULL),(291,'Maraton de Terror','mi casa','2018-10-27 00:00:01',71,-90.000000,180.000000,'https://multimedia.larepublica.pe/660x392/larepublica/imagen/2018/03/20/noticia-netflix-peliculas-de-terror.png','MovieNight para ver la mayor cantidad de peliculas de terror con amigos del colegio','2018-11-23'),(301,'Postman Playlist 81',NULL,NULL,81,NULL,NULL,'URL',NULL,NULL),(311,'Postman Playlist 81',NULL,NULL,81,NULL,NULL,'URL',NULL,NULL),(321,'Postman Playlist 81',NULL,NULL,81,NULL,NULL,'URL',NULL,NULL),(331,'Horror Night',NULL,NULL,0,NULL,NULL,'URL',NULL,NULL),(341,'Update Method Postman2','location test2','2018-10-27 00:00:01',211,-90.000000,180.000000,'Some url image2','Update optional description',NULL),(351,'Horror Night',NULL,NULL,211,NULL,NULL,'URL',NULL,NULL),(361,'Horror Night 2',NULL,NULL,211,NULL,NULL,'URL',NULL,NULL),(371,'mi evento',NULL,NULL,241,NULL,NULL,'URL',NULL,NULL),(381,'Humor Night',NULL,NULL,211,NULL,NULL,'URL',NULL,'2018-11-23'),(391,'Movies 1',NULL,NULL,211,NULL,NULL,'URL',NULL,'2018-11-23'),(401,'Accion',NULL,NULL,211,NULL,NULL,'URL',NULL,'2018-11-23'),(411,'Cumpleaños arturo',NULL,NULL,11,NULL,NULL,'https://previews.123rf.com/images/aliasching/aliasching1606/aliasching160600182/60563605-feliz-cumplea%C3%B1os-feliz-cumplea%C3%B1os-en-tarjeta-de-felicitaci%C3%B3n-espa%C3%B1ola.jpg',NULL,'2018-11-23'),(421,'Noche de Humor',NULL,NULL,21,NULL,NULL,'http://www.lostiempos.com/sites/default/files/styles/noticia_home_apertura/public/media_imagen/2016/4/8/humor_-_los_tiempos_web-03.jpg?itok=yoWnQpGK',NULL,'2018-11-23'),(431,'Kevin',NULL,NULL,71,NULL,NULL,'URL',NULL,'2018-11-23'),(441,'Finales movienight',NULL,NULL,71,NULL,NULL,'https://www.librarieshawaii.org/wp-content/uploads/2016/09/movie-night-1.png',NULL,'2018-11-23'),(451,'UPC maraton',NULL,NULL,71,NULL,NULL,'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/UPC_logo_transparente.png/240px-UPC_logo_transparente.png',NULL,'2018-11-23'),(461,'UPC MovieNight ',NULL,NULL,71,NULL,NULL,'URL',NULL,'2018-11-23');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-11 17:15:27

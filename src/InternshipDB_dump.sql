-- MySQL dump 10.13  Distrib 5.7.35, for Linux (x86_64)
--
-- Host: localhost    Database: InternshipDB
-- ------------------------------------------------------
-- Server version	5.7.35

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
-- Table structure for table `Intern`
--

DROP TABLE IF EXISTS `Intern`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Intern` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(100) DEFAULT NULL,
  `Internship_Id` int(11) DEFAULT NULL,
  `Age` varchar(255) DEFAULT NULL,
  `Specialty_Area_Id` int(11) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Phone_No` varchar(255) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Phone_No` (`Phone_No`),
  UNIQUE KEY `Email` (`Email`),
  KEY `Internship_Id` (`Internship_Id`),
  KEY `Specialty_Area_Id` (`Specialty_Area_Id`),
  CONSTRAINT `Intern_ibfk_1` FOREIGN KEY (`Internship_Id`) REFERENCES `Internship` (`Id`),
  CONSTRAINT `Intern_ibfk_2` FOREIGN KEY (`Specialty_Area_Id`) REFERENCES `Specialty_Area` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Intern`
--

LOCK TABLES `Intern` WRITE;
/*!40000 ALTER TABLE `Intern` DISABLE KEYS */;
INSERT INTO `Intern` VALUES (1,'Karleigh','Sawyer',8,'20',1,'sawyer.hakeem4155@hotmail.edu','736-5312','$2b$12$YoCymzj6unKyYr5qNH/YHOZeLtPnO5QCdL.d/fhuo/bW87e9ET7Yu'),(2,'Reagan','Sawyer',7,'19',10,'s_yardley@hotmail.org','1-833-453-2880','$2b$12$ECtWXODFk8cdYLxHkDHdPu2QoLa/RHw85/nIhiLwYDPkA5sD0qYEK'),(3,'weewoo','opobo',4,'13',4,'j_opobo@hotmail.org','1-254-445-9221','$2b$12$gKg.QIFM86r7y14U4NNS6uNBlN1v5ggITZyx5QnMTk22HUyFeeWBK'),(4,'Hannah','Ronan',12,'18',4,'ronanrobert@google.ca','1-239-892-6216','$2b$12$sMv9yeZ68NvADovfD7IHB.huQxFvodqSI5wqPVbGUD8e6Gp5avc/i'),(5,'Rylee','Dillon',10,'20',8,'et.nunc@hotmail.org','1-654-166-6094','$2b$12$epTXJ1CFuTXdpeOZ0jDJxu.6kvMN5G8xL8Riv2gTKio9ZzgB1YRMW'),(6,'Mara','Dante',4,'20',12,'molestie.tellus.aenean@aol.com','1-444-469-4709','$2b$12$6wIG/Fhu.wgh44ub9xsfEODL2ct/wsTVeL9Q/2ks//4FY6AOzjozC'),(7,'Maxwell','Hamish',8,'19',10,'sem.magna.nec@hotmail.couk','1-478-538-4361','$2b$12$.cDOCeQ41Tfk1Ec5rspi0.NgEInWlA8EngujU5w3gswRvVoB6Ne4y'),(8,'Kathlin','Dante',2,'18',2,'duis.volutpat.nunc@icloud.edu','(442)','$2b$12$eydYsl9jt8fuuUDkeyIYPeg9Q6fwj1inAQEcx1p2uzFXfDwwhCR0O'),(9,'Olivia','Drake',13,'18',4,'in.at@icloud.edu','(308) 765-7923','$2b$12$v8EeOwffEApVT0pqhs2GduxgEukFQLa4RDzX/0ysv33Z73ouE9pxm'),(10,'Amery','Nasim',9,'20',8,'facilisis@outlook.edu','123-234-5567','$2b$12$BUoGpf.bb5q3uqJcFnaM8eg0/THTnLeYcoCTrHswgKeMxC3VbKdwC'),(11,'Timon','Wallace',15,'20',16,'elit.fermentum@yahoo.couk','1-824-266-7440','$2b$12$kifIjSno1f6czQilGoznteEsJt2wPxxXGfBqb.CWHBA3k3lgcoFi2'),(12,'Evan','Jasper',9,'19',8,'pede.nec@aol.edu','1-299-927-2331','$2b$12$lK2sYiNQhIkL3lywctYwE.xg1VW1SE3BFXnBsx25cKeD4r7//02N.'),(13,'Orla','Kibo',12,'18',12,'quis.urna.nunc@protonmail.ca','1-652-234-1745','$2b$12$WMQDhzqjH3VwJhHgoqxOpuo25PLqhV5TlS4s.ZcH0lePVhoTUDoji'),(14,'Kyla','Dale',14,'18',17,'sem.consequat.nec@yahoo.com','1-506-385-4168','$2b$12$2Vl.2RaMAWobqOIV2tOc0.vBpMzp0sGP7FU/QMcBWxYZERepc4XNG'),(15,'Jamal','Price',8,'20',6,'duis@yahoo.ca','(680) 618-4446','$2b$12$vrdVES8vMDcQchC.NJRche5xTeokX/jzDkfjVwkTIl3B9wYjhNsUq'),(16,'Vera','Devin',13,'20',9,'ornare.facilisis.eget@icloud.net','872-3188','$2b$12$/QiYMP4CRFH61NGRoSJU8eTAeumAAhggN79Fx0ymcb2UVx9FG/kGu'),(17,'Stacy','Brady',16,'19',18,'ac@icloud.org','1-404-699-6356','$2b$12$.4S4xhTQSUhOymZXQd0H/eZb.P4a5FsEOTIKSw70Q0fTZHzqt5pVa'),(18,'Giselle','Scott',1,'18',14,'luctus.ut@yahoo.com','842-6397','$2b$12$1dY2AGcoO6xkzT7XcDnUm.ZANxB3ybL4No6sMgpDR7TZ.7BMPTjBm'),(19,'Lillian','Kasimir',18,'18',18,'tellus.phasellus.elit@google.net','964-2677','$2b$12$IB3F3BV0he5yDcxSYF2F/.Hrn2ROpbu7OvWSXMnnAO9gyDcFn1/9i'),(20,'Barrett','Tarik',4,'20',10,'non@yahoo.com','358-4927','$2b$12$MiUDiXxZ0inSy0CpWWbyceZoEkxthca4TcumwK.U2o06Gm8He25va'),(22,'sam','foo',19,'22',9,'vid02@gmail.com','8245236675','$2b$12$gzgIL6z1ISasTFTC0NHT0enXAfp7oWkJ3D78M9x78Gdn3SX5DIQji'),(44,'abba','saga',7,'24',8,'abbasaga@gmail.com','1-254-235-9678','$2b$12$NOC94hpViIQS0Rwt33Ozc.w3JVkvYOye6HQp6uKecsMiv9RRCD12y'),(45,'jagaban','badoo',6,'22',6,'jagaboo@gmail.com','8245876675','$2b$12$fwEU2ZaTz2LnpLNpYDYztuDvHoDaqEjWyOtSkw1rmYDfo40Cb0MWW'),(46,'red','axe',8,'19',7,'redaxe@gmail.com','1-123-396-2701','$2b$12$22VE8SeacTYaOxYvQ/GIYeS5xUunnW6yfXuAavV9RlfPlfQA0Q/5K');
/*!40000 ALTER TABLE `Intern` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Intern_Gender`
--

DROP TABLE IF EXISTS `Intern_Gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Intern_Gender` (
  `Intern_Id` int(11) DEFAULT NULL,
  `Gender` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Intern_Gender`
--

LOCK TABLES `Intern_Gender` WRITE;
/*!40000 ALTER TABLE `Intern_Gender` DISABLE KEYS */;
INSERT INTO `Intern_Gender` VALUES (1,'Male'),(2,'Female'),(3,'Female'),(4,'Male'),(5,'Male'),(6,'Female'),(7,'Male'),(8,'Male'),(9,'Female'),(10,'Male'),(11,'Male'),(12,'Female'),(13,'Male'),(14,'Female'),(15,'Female'),(16,'Male'),(17,'Female'),(18,'Male'),(19,'Female'),(20,'Male');
/*!40000 ALTER TABLE `Intern_Gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Intern_Progress`
--

DROP TABLE IF EXISTS `Intern_Progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Intern_Progress` (
  `Intern_Id` int(11) DEFAULT NULL,
  `Doing_Well` tinyint(1) NOT NULL,
  `Current_Module` int(11) DEFAULT NULL,
  `Mentor_Id` int(11) NOT NULL DEFAULT '1',
  KEY `Intern_Id` (`Intern_Id`),
  KEY `fk_Mentor_Id` (`Mentor_Id`),
  CONSTRAINT `Intern_Progress_ibfk_1` FOREIGN KEY (`Intern_Id`) REFERENCES `Intern` (`Id`),
  CONSTRAINT `fk_Mentor_Id` FOREIGN KEY (`Mentor_Id`) REFERENCES `Mentor` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Intern_Progress`
--

LOCK TABLES `Intern_Progress` WRITE;
/*!40000 ALTER TABLE `Intern_Progress` DISABLE KEYS */;
INSERT INTO `Intern_Progress` VALUES (1,0,2,16),(2,1,2,2),(3,1,6,14),(4,0,1,8),(5,1,6,8),(6,0,7,2),(7,0,4,9),(9,1,4,5),(10,1,8,4),(11,0,3,18),(12,1,7,3),(13,0,7,6),(14,1,9,12),(15,0,4,10),(16,1,7,20),(17,1,8,1),(18,0,6,6),(19,1,10,8),(20,0,9,5),(8,0,7,2),(46,1,7,8);
/*!40000 ALTER TABLE `Intern_Progress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Internship`
--

DROP TABLE IF EXISTS `Internship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Internship` (
  `Id` int(11) NOT NULL,
  `Internship_year` year(4) NOT NULL,
  `Start_Date` datetime NOT NULL,
  `End_Date` datetime NOT NULL,
  `Title` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Internship`
--

LOCK TABLES `Internship` WRITE;
/*!40000 ALTER TABLE `Internship` DISABLE KEYS */;
INSERT INTO `Internship` VALUES (1,2021,'2021-12-12 00:00:00','2022-05-15 00:00:00','Internship_dev_year'),(2,2022,'2022-05-01 00:00:00','2022-12-11 00:00:00','Internship_dev_year'),(3,2021,'2021-04-17 00:00:00','2022-06-01 00:00:00','Internship_dev_year'),(4,2014,'2014-12-31 00:00:00','2015-06-28 00:00:00','Internship_dev_year'),(5,2022,'2022-12-21 00:00:00','2023-05-16 00:00:00','Internship_dev_year'),(6,2021,'2021-12-18 00:00:00','2022-11-16 00:00:00','Internship_dev_year'),(7,2019,'2019-06-20 00:00:00','2020-10-09 00:00:00','Internship_dev_year'),(8,2022,'2022-04-17 00:00:00','2022-10-06 00:00:00','Internship_dev_year'),(9,2022,'2022-01-31 00:00:00','2022-06-22 00:00:00','Internship_dev_year'),(10,2010,'2010-12-21 00:00:00','2011-06-10 00:00:00','Internship_dev_year'),(11,2022,'2022-01-01 00:00:00','2022-07-14 00:00:00','Internship_dev_year'),(12,2018,'2018-06-07 00:00:00','2018-12-28 00:00:00','Internship_dev_year'),(13,2021,'2021-03-31 00:00:00','2022-11-16 00:00:00','Internship_dev_year'),(14,2020,'2020-12-05 00:00:00','2021-05-11 00:00:00','Internship_dev_year'),(15,2014,'2014-01-29 00:00:00','2015-07-09 00:00:00','Internship_dev_year'),(16,2011,'2011-12-18 00:00:00','2012-11-16 00:00:00','Internship_dev_year'),(17,2020,'2020-04-01 00:00:00','2021-09-06 00:00:00','Internship_dev_year'),(18,1995,'1995-05-02 00:00:00','1996-12-09 00:00:00','Internship_dev_year'),(19,2021,'2021-03-31 00:00:00','2022-01-28 00:00:00','Internship_dev_year'),(20,2017,'2017-05-23 00:00:00','2017-12-18 00:00:00','Internship_dev_year');
/*!40000 ALTER TABLE `Internship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mentor`
--

DROP TABLE IF EXISTS `Mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mentor` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(100) NOT NULL,
  `Last_Name` varchar(100) DEFAULT NULL,
  `Specialty_Area_Id` int(11) DEFAULT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Phone_No` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Phone_No` (`Phone_No`),
  UNIQUE KEY `Email` (`Email`),
  KEY `Specialty_Area_Id` (`Specialty_Area_Id`),
  CONSTRAINT `Mentor_ibfk_1` FOREIGN KEY (`Specialty_Area_Id`) REFERENCES `Specialty_Area` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mentor`
--

LOCK TABLES `Mentor` WRITE;
/*!40000 ALTER TABLE `Mentor` DISABLE KEYS */;
INSERT INTO `Mentor` VALUES (1,'Hakeem','Sawyer',6,'sawyer.hakeem4155@hotmail.edu','RYJ27SPX0JK','1-531-829-1372'),(2,'Yardley','Sawyer',8,'ronanrobert@google.ca','HQY64NTI4EC','1-795-382-1155'),(3,'weee','wooo',12,'wee_woo@hotmail.org','ETA85MIH3TU','1-254-235-9861'),(4,'Roberto','Ronan',1,'d-francesca4070@outlook.org','GDC52GPU8ML','(827)'),(5,'Francescita','Dillon',11,'k_jarrod6993@aol.ca','CKN32FUY7OF','1-448-963-4143'),(6,'Hakeem','Sawyer',20,'natoque.penatibus.et@hotmail.couk','ESD42JLE7NN','1-215-595-8187'),(7,'Yardley','Sawyer',14,'ullamcorper.nisl.arcu@protonmail.couk','DRA44OMX4KO','1-433-571-1891'),(8,'Rashford','casemiro',12,'non.vestibulum.nec@protonmail.ca','XWL82GXY2PJ','412-0378'),(9,'Robert','Ronan',11,'nulla.eu.neque@protonmail.ca','HVQ90LFF8ND','(888) 739-6638'),(10,'Francesca','Dillon',15,'in.nec@hotmail.edu','WRK63MWS5QS','1-487-388-7854'),(11,'Hakeem','Sawyer',2,'at@hotmail.com','8DR18GLS6TU','1-887-376-4104'),(12,'Yardley','Sawyer',5,'mauris@yahoo.couk','8CV27CUS9CO','(598) 208-0158'),(13,'Jarrod','Kasimir',2,'pellentesque.tellus@hotmail.org','5CL83VBP8KW','1-376-894-1115'),(14,'Robert','Ronan',2,'morbi.quis.urna@yahoo.net','0BK04KAH8XN','(387) 668-6144'),(15,'Francesca','Dillon',3,'sed.dictum.proin@protonmail.net','0FU43EJL5FP','(180) 646-6523'),(16,'Hakeem','Sawyer',20,'diam.duis@outlook.com','5II45D6I2EG','1-574-813-1559'),(17,'Yardley','Sawyer',17,'dis.parturient.montes@aol.edu','7DT73D8N3GR','363-4171'),(18,'Jarrod','Kasimir',19,'feugiat@aol.net','4KT65S6Q2IS','(685) 652-2741'),(19,'Robert','Ronan',19,'primis.in.faucibus@protonmail.org','3NP05B5F8QX','1-647-247-8184'),(20,'Francesca','Dillon',17,'non@yahoo.com','2KO87N3G0FJ','1-315-285-1743');
/*!40000 ALTER TABLE `Mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mentor_Gender`
--

DROP TABLE IF EXISTS `Mentor_Gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mentor_Gender` (
  `Mentor_Id` int(11) DEFAULT NULL,
  `Gender` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mentor_Gender`
--

LOCK TABLES `Mentor_Gender` WRITE;
/*!40000 ALTER TABLE `Mentor_Gender` DISABLE KEYS */;
INSERT INTO `Mentor_Gender` VALUES (1,'Male'),(2,'Female'),(3,'Male'),(4,'Female'),(5,'Male'),(6,'Female'),(7,'Male'),(8,'Female'),(9,'Male'),(10,'Female'),(11,'Male'),(12,'Male'),(13,'Female'),(14,'Female'),(15,'Male'),(16,'Male'),(17,'Female'),(18,'Male'),(19,'Female'),(20,'Male');
/*!40000 ALTER TABLE `Mentor_Gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Module`
--

DROP TABLE IF EXISTS `Module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Module` (
  `Id` int(11) NOT NULL,
  `Task` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Module`
--

LOCK TABLES `Module` WRITE;
/*!40000 ALTER TABLE `Module` DISABLE KEYS */;
INSERT INTO `Module` VALUES (1,'DBMs'),(2,'Git/GitLab'),(3,'Linux/Web,'),(4,'Node'),(5,'HTML/CSS'),(6,'Vue Js'),(7,'Docker'),(8,'SCSS'),(9,'REST APIs'),(10,'TypeScript'),(11,'PostgresDB'),(12,'MongoDB'),(13,'Magento 2'),(14,'PostMan'),(15,'Visual Studio Code'),(16,'Jira/Redmine'),(17,'Trello'),(18,'Design'),(19,'Data Modelling'),(20,'search engine optimization');
/*!40000 ALTER TABLE `Module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Specialty_Area`
--

DROP TABLE IF EXISTS `Specialty_Area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Specialty_Area` (
  `Id` int(11) NOT NULL,
  `Title` varchar(30) NOT NULL,
  `Class_Size` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Specialty_Area`
--

LOCK TABLES `Specialty_Area` WRITE;
/*!40000 ALTER TABLE `Specialty_Area` DISABLE KEYS */;
INSERT INTO `Specialty_Area` VALUES (1,'Frontend',7),(2,'Backend',10),(3,'DevOps',5),(4,'Quality Assurance',9),(5,'Area 5',8),(6,'Agriculture',7),(7,'Area 7',10),(8,'Management',9),(9,'Bussiness Admin',8),(10,'Networking',4),(11,'Advertisement',7),(12,'Area 12',10),(13,'Architecture',9),(14,'Statistics',5),(15,'Film Making',3),(16,'Sales',7),(17,'Photography',10),(18,'Game Dev',9),(19,'Mobile Dev',6),(20,'Teaching',8);
/*!40000 ALTER TABLE `Specialty_Area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tasks`
--

DROP TABLE IF EXISTS `Tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tasks` (
  `Id` int(11) NOT NULL,
  `Description` varchar(10000) NOT NULL,
  `Specialty_Area_Id` int(11) DEFAULT NULL,
  `Module_Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tasks`
--

LOCK TABLES `Tasks` WRITE;
/*!40000 ALTER TABLE `Tasks` DISABLE KEYS */;
INSERT INTO `Tasks` VALUES (1,'lectus justo eu arcu. Morbi sit amet massa.',1,7),(2,'non lorem',1,18),(3,'Aliquam rutrum lorem ac risus. Morbi metus.',1,14),(4,'amet, dapibus id, blandit at,',1,5),(5,'Aliquam gravida',1,9),(6,'euismod enim. Etiam gravida',2,14),(7,'lectus justo eu arcu. Morbi sit',2,3),(8,'parturient montes, nascetur ridiculus mus. Proin vel nisl.',2,18),(9,'ante ipsum primis in',2,4),(10,'ante ipsum',2,18),(11,'amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie',3,12),(12,'ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus',3,5),(13,'eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu,',3,14),(14,'ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat.',3,5),(15,'hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris',3,12),(16,'amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie',4,6),(17,'ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus',4,10),(18,'eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu,',4,7),(19,'ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat.',4,14),(20,'hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris',4,9);
/*!40000 ALTER TABLE `Tasks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-12 11:02:36

-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: gamification
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `stories`
--

DROP TABLE IF EXISTS `stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `video` varchar(200) DEFAULT NULL,
  `story` varchar(3000) DEFAULT NULL,
  `author` varchar(45) NOT NULL,
  `rate` float DEFAULT NULL,
  `title` varchar(45) NOT NULL,
  `file` varchar(200) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`,`author`)
) ENGINE=InnoDB AUTO_INCREMENT=176 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
INSERT INTO `stories` VALUES (175,'problem-root.mp4','أعرب لويس إنريكي المدير الفني للمنتخب الإسباني، عن استيائه من الخسارة (2-1) ضد سويسرا مساء السبت، ضمن منافسات الجولة الخامسة من دور المجموعات لبطولة دوري الأمم الأوروبية.\n\nوقال إنريكي، خلال تصريحات نقلتها صحيفة \"موندو ديبورتيفو\" الإسبانية: \"الخسارة تؤلم دائما. إنها عار وسويسرا منتخب قوي بدنيا للغاية وحرمنا من اللعب بأسلوبنا، وقالوا إن الفوز على سويسرا أمر سهل ورأى الجميع أنه ليس كذلك\".\n\nوأضاف: \"في الشوط الأول عانينا ولا أتذكر مباراة لي بها هذا الكم من الإخفاقات الفنية، وهذه الهزيمة لا تشير إلى شيء قبل كأس العالم، ومن الأفضل دائما أن أذهب للمونديال بانتصارات، لكن لدي ثقة كاملة في الفريق\".\n\nوتابع: \"في الشوط الثاني بدأنا بشكل أفضل وتعادلنا لكننا تلقينا أهداف من ركلات ركنية\".\n\nوأوضح: \"سنواصل العمل بنفس الطريقة ونحاول تطوير كل الجوانب، وأنا أؤمن بهذا الفريق وهذا ما قلته لهم في الاستراحة، ومواجهة البرتغال ستكون بمثابة نهائي وسنلعب للفوز\".\n\nوعن أسينسيو، علق: \"أنا أحبه دائما، وكانت المباراة صعبة للغاية لمهاجمينا، ولدى المهاجمين أدوار دفاعية وهجومية وعليهم الركض كثيرا\".\n\nوعن الظهور الأول لنيكو ويليامز وبورخا إيجلاسياس، قال: \"لقد رأيتهم بشكل جيد، وكانوا شجعان وهنأتهم، وسويسرا قدمت أداء جيدا للغاية\".\n\nوبهذه الخسارة تجمد رصيد إسبانيا عند 8 نقاط في المركز الثاني، بينما رفع منتخب سويسرا رصيده إلى 6 نقاط في المركز الثالث.\n\nيذكر أن الجولة الختامية في المجموعة يوم الثلاثاء المقبل ستشهد مواجهة \"الحسم\" بين جارتي شبة الجزيرة الأيبيرية في مدينة براجا البرتغالية، حيث أن فوز أو تعادل أصحاب الأرض يمنحهم التأهل لنصف النهائي، بينما سيعني فوز الإسبان استعادة الصدارة وبلوغ نصف النهائي للنسخة الثانية على التوالي.\n\nأعرب لويس إنريكي المدير الفني للمنتخب الإسباني، عن استيائه من الخسارة (2-1) ضد سويسرا مساء السبت، ضمن منافسات الجولة الخامسة من دور المجموعات لبطولة دوري الأمم الأوروبية.\n\nوقال إنريكي، خلال تصريحات نقلتها صحيفة \"موندو ديبورتيفو\" الإسبانية: \"الخسارة تؤلم دائما. إنها عار وسويسرا منتخب قوي بدنيا للغاية وحرمنا من اللعب بأسلوبنا، وقالوا إن الفوز على سويسرا أمر سهل ورأى الجميع أنه ليس كذلك\".\n\nوأضاف: \"في الشوط الأول عانينا ولا أتذكر مباراة لي بها هذا الكم من الإخفاقات الفنية، وهذه الهزيمة لا تشير إلى شيء قبل كأس العالم، ومن الأفضل دائما أن أذهب للمونديال بانتصارات، لكن لدي ثقة كاملة في الفريق\".\n\nوتابع: \"في الشوط الثاني بدأنا بشكل أفضل وتعادلنا لكننا تلقينا أهداف من ركلات ركنية\".\n','omar.hanoun',NULL,'تحليل المباراة','omarf.pdf',NULL);
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-02 14:18:58

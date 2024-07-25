CREATE DATABASE IF NOT EXISTS `projekat` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `projekat`;

DROP TABLE IF EXISTS `korisnici`;
CREATE TABLE IF NOT EXISTS `korisnici` (
  `id` int PRIMARY KEY AUTO_INCREMENT, 
  `korisnicko_ime` varchar(50)UNIQUE NOT NULL,
  `lozinka` varchar(256) NOT NULL,
  `bezbedonosno_pitanje` varchar(50) NOT NULL,
  `odgovor` varchar(50) NOT NULL,
  `ime` varchar(50) NOT NULL,
  `prezime` varchar(50) NOT NULL,
  `tip` varchar(50) NOT NULL,
  `pol` varchar(1) NOT NULL,
  `adresa` varchar(100) NOT NULL,
  `telefon` varchar(14) NOT NULL,
  `mejl` varchar(50) UNIQUE NOT NULL,
  `slika` varchar(100) NULL,
  `kartica` varchar(20) NULL,
  `status` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `korisnici` 
(`id`, `korisnicko_ime`, `lozinka`, `bezbedonosno_pitanje`, `odgovor`, `ime`, `prezime`, `tip`, `pol`, `adresa`, `telefon`, `mejl`, `slika`, `kartica`, `status`)
 VALUES
 (1, 'admin1', SHA2('Admin1.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'fizicko', 'Ana', 'Lazic', 'admin', 'Z', 'Batutova 15, Beograd', '+38161111111', 'admin1@gmail.com', 'slika1.jpeg',  null, 'O'),
 (2, 'admin2', SHA2('Admin2.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'matematika', 'Darko', 'Lazic', 'admin', 'M', 'Batutova 15, Beograd', '+381622222222', 'admin2@gmail.com', null, null, 'O'),
 (3, 'gost1', SHA2('Gost1.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'srpski', 'Branko', 'Pavlovic', 'gost', 'M', 'Batutova 15, Beograd', '+38163333333', 'gost1@gmail.com', null, '3333444455556666/123', 'O'),
 (4, 'gost2', SHA2('Gost2.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'fizicko', 'Danica', 'Misic', 'gost', 'Z', 'Batutova 15, Beograd', '+381644444444', 'gost2@gmail.com', 'slika1.jpeg', '4444555566667777/123', 'O'),
 (5, 'konobar1', SHA2('Konobar1.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'likovno', 'Biljana', 'Mihajlovic', 'konobar', 'Z', 'Batutova 15, Beograd', '+381655555555', 'konobar1@gmail.com', null, null, 'O'),
 (6, 'konobar2', SHA2('Konobar2.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'biologija', 'Pavle', 'Pavlovic', 'konobar', 'M', 'Batutova 15, Beograd', '+38166666666', 'konobar2@gmail.com', 'slika2.jpg', null, 'O'),
 (7, 'konobar3', SHA2('Konobar3.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'likovno', 'Darko', 'Ruzic', 'konobar', 'M', 'Batutova 15, Beograd', '+381655555555', 'konobar3@gmail.com', null, null, 'O'),
 (8, 'konobar4', SHA2('Konobar4.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'biologija', 'Vesna', 'Milicevic', 'konobar', 'Z', 'Batutova 15, Beograd', '+38166666666', 'konobar4@gmail.com', null, null, 'O'),
 (9, 'konobar5', SHA2('Konobar5.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'likovno', 'Dragana', 'Lukic', 'konobar', 'Z', 'Batutova 15, Beograd', '+381655555555', 'konobar5@gmail.com', null, null, 'O'),
 (10, 'konobar6', SHA2('Konobar6.', 256), 'Koji je bio omiljeni predmet u osnovnoj školi?', 'biologija', 'Petar', 'Pilic', 'konobar', 'M', 'Batutova 15, Beograd', '+38166666666', 'konobar6@gmail.com', null, null, 'O'),
 (11, 'gost3', SHA2('Gost3.', 256), 'Koje je tvoje omiljeno jelo?', 'sarme', 'Bojan', 'Bikovic', 'gost', 'M', 'Batutova 15, Beograd', '+38163333333', 'gost3@gmail.com', null, '3333444455556666/123', 'Z'),
 (12, 'gost4', SHA2('Gost4.', 256), 'Koje je tvoje omiljeno jelo?', 'pire krompir', 'Milica', 'Marjanovic', 'gost', 'Z', 'Batutova 15, Beograd', '+381644444444', 'gost4@gmail.com', null, '4444555566667777/123', 'Z'),
 (13, 'gost5', SHA2('Gost5.', 256), 'Koje je tvoje omiljeno jelo?', 'knedle', 'Petar', 'Nikolic', 'gost', 'M', 'Batutova 15, Beograd', '+38163333333', 'gost5@gmail.com', null, '3333444455556666/123', 'Z');



DROP TABLE IF EXISTS `restorani`;
CREATE TABLE IF NOT EXISTS `restorani` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `naziv` varchar(50) NOT NULL,
  `adresa` varchar(100) NOT NULL,
  `tip` varchar(50) NOT NULL,
  `opis` varchar(500),
  `telefon` varchar(14) UNIQUE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `restorani` 
(`id`, `naziv`, `adresa`, `tip`, `opis`, `telefon`)
 VALUES
 ( 1, 'restoran1', 'Batutova 1, Beograd', 'kineski', 'kratak opis resotrana 1', '+38161111111'),
 ( 2, 'restoran2', 'Batutova 2, Beograd', 'indijski', 'kratak opis resotrana 2', '+38161222222'),
 ( 3, 'restoran3', 'Batutova 3, Beograd', 'japanski', 'kratak opis resotrana 3', '+38161333333'),
 ( 4, 'restoran4', 'Batutova 4, Beograd', 'srpski', 'kratak opis resotrana 4', '+38161444444');
 
 CREATE TABLE IF NOT EXISTS `zaposlen` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `idr` int NOT NULL,
  `idk` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `zaposlen` 
(`id`, `idr`, `idk`)
 VALUES
 ( 1, 1, 5),
 ( 2, 1, 6),
 ( 3, 1, 7),
 ( 4, 2, 8),
 ( 5, 2, 9),
 ( 6, 4, 10);
 
DROP TABLE IF EXISTS `jelovnik`;
CREATE TABLE IF NOT EXISTS `jelovnik` (
  `id` int PRIMARY KEY AUTO_INCREMENT, 
  `idr` int NOT NULL,
  `naziv` varchar(50) NOT NULL,
  `cena` int NOT NULL,
  `slika` varchar(100),
  `sastojci` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `jelovnik`
  ADD CONSTRAINT `fk_restorani_jelovnik` FOREIGN KEY (`idr`) REFERENCES `restorani` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

INSERT INTO `jelovnik` 
(`id`, `idr`, `naziv`, `cena`, `slika`, `sastojci`)
 VALUES
 ( 1, 1, 'Becka snicla', 1350, 'becka_snicla.jpg','sastojci becke snicle'),
 ( 2, 1, 'Cevapi', 800,'cevapi.jpg','sastojci cevapa'),
 ( 3, 1, 'Dimnjeni pileci batak', 1200,'dimljeni_pileci_batak.jpg','sastojci pileceg batka'),
 ( 4, 1, 'Karadjordjeva snicla', 1500, 'karadjordjeva_snicla.jpg','sastojci karadjordjeve snicle'),
 ( 5, 2, 'Mesano meso', 1800, 'mesano_meso.jpg','sastojci mesanog mesa'),
 ( 6, 2, 'Piletina sa sampinjonima', 1400, 'piletina_sa_sampinjonima.jpg','sastojci piletine sa sampinjonima'),
 ( 7, 2, 'Pljeskavica', 1000, 'pljeskavica.jpg','sastojci pljeskavice'),
 ( 8, 2, 'Rostilj kobasica', 750, 'rostilj_kobasica.jpg','sastojci rostilj kobasice'),
 ( 9, 3, 'Svinjski raznjici', 1250, 'svinjski_raznjici.jpg','sastojci svinjskog raznjica'),
 ( 10, 3, 'Vesalica', 1300, 'vesalica.jpg','sastojci vesalice'),
 ( 11, 3, 'Piletina sa sampinjonima', 1400, 'piletina_sa_sampinjonima.jpg','sastojci piletine sa sampinjonima'),
 ( 12, 3, 'Becka snicla', 1350, 'becka_snicla.jpg','sastojci becke snicle'),
 ( 13, 4, 'Dimnjeni pileci batak', 1200,'dimljeni_pileci_batak.jpg','sastojci pileceg batka'),
 ( 14, 4, 'Rostilj kobasica', 750, 'rostilj_kobasica.jpg','sastojci rostilj kobasice'),
 ( 15, 4, 'Karadjordjeva snicla', 1500, 'karadjordjeva_snicla.jpg','sastojci karadjordjeve snicle'),
 ( 16, 4, 'Cevapi', 800,'cevapi.jpg','sastojci cevapa');
  
DROP TABLE IF EXISTS `radno_vreme`;
  CREATE TABLE IF NOT EXISTS `radno_vreme` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `idr` int NOT NULL,
  `dan_u_nedelji` int NOT NULL,
  `pocetak` Time NOT NULL,
  `kraj` Time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `radno_vreme`
  ADD CONSTRAINT `fk_restorani_radno_vreme` FOREIGN KEY (`idr`) REFERENCES `restorani` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

INSERT INTO `radno_vreme` 
(`id`, `idr`, `dan_u_nedelji`, `pocetak`,`kraj`)
 VALUES
 ( 1, 1, 1, '10:00:00', '22:00:00'),
 ( 2, 1, 2, '10:00:00', '22:00:00'),
 ( 3, 1, 3, '10:00:00', '22:00:00'),
 ( 4, 1, 4, '10:00:00', '22:00:00'),
 ( 5, 1, 5, '10:00:00', '22:00:00'),
 ( 6, 1, 6, '10:00:00', '22:00:00'),
 ( 7, 1, 7, '10:00:00', '22:00:00'),
 ( 8, 2, 1, '10:00:00', '22:00:00'),
 ( 9, 2, 2, '10:00:00', '22:00:00'),
 ( 10, 2, 3, '10:00:00', '22:00:00'),
 ( 11, 2, 4, '10:00:00', '22:00:00'),
 ( 12, 2, 5, '10:00:00', '22:00:00'),
 ( 13, 2, 6, '10:00:00', '22:00:00'),
 ( 14, 2, 7, '10:00:00', '22:00:00'),
 ( 15, 3, 1, '10:00:00', '22:00:00'),
 ( 16, 3, 2, '10:00:00', '22:00:00'),
 ( 17, 3, 3, '10:00:00', '22:00:00'),
 ( 18, 3, 4, '10:00:00', '22:00:00'),
 ( 19, 3, 5, '10:00:00', '22:00:00'),
 ( 20, 3, 6, '10:00:00', '22:00:00'),
 ( 21, 3, 7, '10:00:00', '22:00:00'),
 ( 22, 4, 1, '10:00:00', '22:00:00'),
 ( 23, 4, 2, '10:00:00', '22:00:00'),
 ( 24, 4, 3, '10:00:00', '22:00:00'),
 ( 25, 4, 4, '10:00:00', '22:00:00'),
 ( 26, 4, 5, '10:00:00', '22:00:00'),
 ( 27, 4, 6, '10:00:00', '22:00:00'),
 ( 28, 4, 7, '10:00:00', '22:00:00');
 
 DROP TABLE IF EXISTS `stolovi`;
  CREATE TABLE IF NOT EXISTS `stolovi` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `idr` int NOT NULL,
  `naziv` varchar(50),
  `broj_mesta` int,
  `tip` varchar(50),
  `k1` int,
  `k2` int,
  `k3` int,
  `k4` int
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `stolovi`
  ADD CONSTRAINT `fk_restorani_stolovi` FOREIGN KEY (`idr`) REFERENCES `restorani` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

INSERT INTO `stolovi` 
(`id`, `idr`,`naziv`, `broj_mesta`, `tip`, `k1`, `k2`, `k3`, `k4`)
 VALUES
 ( 1, 1, 'stol 1', 4, 'stol', 300, 50, 30, 0),
 ( 2, 1, 'stol 2', 4, 'stol', 300, 150, 30, 0),
 ( 3, 1, 'stol 3', 2, 'stol', 200, 50, 30, 0),
 ( 4, 1, 'stol 4', 6, 'stol', 200, 150, 30, 0),
 ( 5, 1, null, 0, 'kuhinja', 250, 300, 130, 80),
 ( 6, 1, null, 0, 'toalet', 5, 5, 85, 85),
 ( 7, 1, null, 0, 'toalet', 5, 100, 85, 85),
 ( 8, 2, 'stol 1', 2, 'stol', 300, 50, 30, 0),
 ( 9, 2, 'stol 2', 4, 'stol', 300, 150, 30, 0),
 ( 10, 2, 'stol 3', 6, 'stol', 200, 50, 30, 0),
 ( 11, 2, null, 0, 'kuhinja', 250, 300, 130, 80),
 ( 12, 2, null, 0, 'toalet', 5, 5, 85, 85),
 ( 13, 2, null, 0, 'toalet', 5, 100, 85, 85),
 ( 14, 3, 'stol 1', 4, 'stol', 300, 50, 30, 0),
 ( 15, 3, 'stol 2', 4, 'stol', 300, 150, 30, 0),
 ( 16, 3, 'stol 3', 2, 'stol', 200, 50, 30, 0),
 ( 17, 3, 'stol 4', 6, 'stol', 200, 150, 30, 0),
 ( 18, 3, null, 0, 'kuhinja', 250, 300, 130, 80),
 ( 19, 3, null, 0, 'toalet', 5, 5, 85, 85),
 ( 20, 3, null, 0, 'toalet', 5, 100, 85, 85),
 ( 21, 4, 'stol 1', 2, 'stol', 300, 50, 30, 0),
 ( 22, 4, 'stol 2', 4, 'stol', 300, 150, 30, 0),
 ( 23, 4, 'stol 3', 6, 'stol', 200, 50, 30, 0),
 ( 24, 4, null, 0, 'kuhinja', 250, 300, 130, 80),
 ( 25, 4, null, 0, 'toalet', 5, 5, 85, 85),
 ( 26, 4, null, 0, 'toalet', 5, 100, 85, 85);
 
 DROP TABLE IF EXISTS `rezervacije`;
  CREATE TABLE IF NOT EXISTS `rezervacije` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `idr` int NOT NULL,
  `ids` int NULL,
  `idk` int NOT NULL,
  `pocetak` Datetime NOT NULL,
  `kraj`datetime NOT NULL,
  `broj_mesta` int NOT NULL,
  `opis` varchar(100) NULL,
  `status` varchar(1) NOT NULL,
  `konobar` int NULL,
  `razlog` varchar(50) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `rezervacije`
  ADD CONSTRAINT `fk_restorani_rezervacije` FOREIGN KEY (`idr`) REFERENCES `restorani` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_korisnici_rezervacije` FOREIGN KEY (`idk`) REFERENCES `korisnici` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

INSERT INTO `rezervacije` 
(`id`, `idr`, `ids`, `idk`, `pocetak`, `kraj`,`broj_mesta`,`opis`, `status`, `konobar`)
 VALUES
 ( 1, 1, 5, 3, '2024-06-27 18:00:00', '2024-06-27 21:00:00', 2, 'Proslava rodjendana', 'D', 5),
 ( 2, 1, 6, 3, '2024-06-27 17:00:00', '2024-06-27 20:00:00', 2, 'Proslava rodjendana', 'D', 6),
 ( 3, 1, 7, 4, '2024-06-27 19:00:00', '2024-06-27 22:00:00', 2, 'Proslava rodjendana', 'N', 7),
 ( 4, 1, 5, 3, '2024-06-28 18:00:00', '2024-06-28 21:00:00', 2, 'Proslava rodjendana', 'D', 5),
 ( 5, 1, 6, 3, '2024-06-28 17:00:00', '2024-06-28 20:00:00', 3, 'Proslava rodjendana', 'D', 5),
 ( 6, 1, 7, 4, '2024-06-28 17:00:00', '2024-06-28 20:00:00', 4, 'Proslava rodjendana', 'D', 6),
 ( 7, 1, 5, 3, '2024-06-29 19:00:00', '2024-06-29 22:00:00', 2, 'Proslava rodjendana', 'D', 5),
 ( 8, 1, 5, 3, '2024-06-29 18:00:00', '2024-06-29 21:00:00', 2, 'Proslava rodjendana', 'D', 6),
 ( 9, 1, 6, 4, '2024-06-29 17:00:00', '2024-06-29 20:00:00', 2, 'Proslava rodjendana', 'D', 7),
 ( 10, 1, 6, 4, '2024-06-29 17:00:00', '2024-06-29 20:00:00', 2, 'Proslava rodjendana', 'N', 7),
 ( 11, 1, 5, 3, '2024-06-30 18:00:00', '2024-06-30 21:00:00', 2, 'Proslava rodjendana', 'D', 5),
 ( 12, 1, 6, 3, '2024-06-30 17:00:00', '2024-06-30 20:00:00', 2, 'Proslava rodjendana', 'D', 6),
 ( 13, 1, 7, 4, '2024-06-30 19:00:00', '2024-06-30 22:00:00', 2, 'Proslava rodjendana', 'D', 7),
 ( 14, 1, 5, 3, '2024-07-01 18:00:00', '2024-07-01 21:00:00', 2, 'Proslava rodjendana', 'D', 5),
 ( 15, 1, 6, 3, '2024-07-01 17:00:00', '2024-07-01 20:00:00', 3, 'Proslava rodjendana', 'D', 5),
 ( 16, 1, 7, 4, '2024-07-01 17:00:00', '2024-07-01 20:00:00', 4, 'Proslava rodjendana', 'D', 6),
 ( 17, 1, 5, 3, '2024-07-02 19:00:00', '2024-07-02 22:00:00', 2, 'Proslava rodjendana', 'D', 5),
 ( 18, 1, 5, 3, '2024-07-02 18:00:00', '2024-07-02 21:00:00', 2, 'Proslava rodjendana', 'D', 6),
 ( 19, 1, 6, 4, '2024-07-02 17:00:00', '2024-07-02 20:00:00', 2, 'Proslava rodjendana', 'N', 7),
 ( 20, 1, 7, 3, '2024-07-03 19:00:00', '2024-07-03 22:00:00', 2, 'Proslava rodjendana', 'D', 5),
 ( 21, 1, 5, 3, '2024-07-03 18:00:00', '2024-07-03 21:00:00', 2, 'Proslava rodjendana', 'D', 5),
 ( 22, 1, 6, 4, '2024-07-03 17:00:00', '2024-07-03 20:00:00', 3, 'Proslava rodjendana', 'D', 6),
 ( 23, 1, 7, 3, '2024-07-04 17:00:00', '2024-07-04 20:00:00', 4, 'Proslava rodjendana', 'D', 5),
 ( 24, 1, 7, 3, '2024-07-04 19:00:00', '2024-07-04 22:00:00', 2, 'Proslava rodjendana', 'D', 6),
 ( 25, 1, 5, 4, '2024-07-04 18:00:00', '2024-07-04 21:00:00', 2, 'Proslava rodjendana', 'D', 7),
 ( 26, 1, 6, 3, '2024-07-05 17:00:00', '2024-07-05 20:00:00', 3, 'Proslava rodjendana', 'D', 5),
 ( 27, 1, 7, 3, '2024-07-05 17:00:00', '2024-07-05 20:00:00', 4, 'Proslava rodjendana', 'D', 5),
 ( 28, 1, 5, 4, '2024-07-05 19:00:00', '2024-07-05 22:00:00', 2, 'Proslava rodjendana', 'D', 6),
 ( 29, 1, 5, 3, '2022-06-30 18:00:00', '2022-06-30 21:00:00', 1, 'Proslava rodjendana', 'D', 7),
 ( 30, 1, 5, 3, '2022-06-30 18:00:00', '2022-06-30 21:00:00', 1, 'Proslava rodjendana', 'D', 7),
 ( 31, 1, 6, 3, '2022-06-30 18:00:00', '2022-06-30 21:00:00', 1, 'Proslava rodjendana', 'D', 7),
 ( 32, 1, 7, 3, '2022-06-30 18:00:00', '2022-06-30 21:00:00', 1, 'Proslava rodjendana', 'D', 7),
 ( 33, 1, 5, 3, '2022-06-30 18:00:00', '2022-06-30 21:00:00', 1, 'Proslava rodjendana', 'D', 7),
 ( 34, 2, 5, 3, '2024-06-27 18:00:00', '2024-06-27 21:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 35, 2, 6, 3, '2024-06-27 17:00:00', '2024-06-27 20:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 36, 2, 7, 4, '2024-06-27 19:00:00', '2024-06-27 22:00:00', 2, 'Proslava rodjendana', 'D', 9),
 ( 37, 2, 5, 3, '2024-06-28 18:00:00', '2024-06-28 21:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 38, 2, 6, 3, '2024-06-28 17:00:00', '2024-06-28 20:00:00', 3, 'Proslava rodjendana', 'D', 8),
 ( 39, 2, 7, 4, '2024-06-28 17:00:00', '2024-06-28 20:00:00', 4, 'Proslava rodjendana', 'D', 9),
 ( 40, 2, 5, 3, '2024-06-29 19:00:00', '2024-06-29 22:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 41, 2, 5, 3, '2024-06-29 18:00:00', '2024-06-29 21:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 42, 2, 6, 4, '2024-06-29 17:00:00', '2024-06-29 20:00:00', 2, 'Proslava rodjendana', 'D', 9),
 ( 43, 2, 6, 4, '2024-06-29 17:00:00', '2024-06-29 20:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 44, 2, 5, 3, '2024-06-30 18:00:00', '2024-06-30 21:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 45, 2, 6, 3, '2024-06-30 17:00:00', '2024-06-30 20:00:00', 2, 'Proslava rodjendana', 'D', 9),
 ( 46, 2, 7, 4, '2024-06-30 19:00:00', '2024-06-30 22:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 47, 2, 5, 3, '2024-07-01 18:00:00', '2024-07-01 21:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 48, 2, 6, 3, '2024-07-01 17:00:00', '2024-07-01 20:00:00', 3, 'Proslava rodjendana', 'D', 9),
 ( 49, 2, 7, 4, '2024-07-01 17:00:00', '2024-07-01 20:00:00', 4, 'Proslava rodjendana', 'D', 9),
 ( 50, 2, 5, 3, '2024-07-02 19:00:00', '2024-07-02 22:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 51, 2, 5, 3, '2024-07-02 18:00:00', '2024-07-02 21:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 52, 2, 6, 4, '2024-07-02 17:00:00', '2024-07-02 20:00:00', 2, 'Proslava rodjendana', 'D', 9),
 ( 53, 2, 7, 3, '2024-07-03 19:00:00', '2024-07-03 22:00:00', 2, 'Proslava rodjendana', 'D', 9),
 ( 54, 2, 5, 3, '2024-07-03 18:00:00', '2024-07-03 21:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 55, 2, 6, 4, '2024-07-03 17:00:00', '2024-07-03 20:00:00', 3, 'Proslava rodjendana', 'D', 9),
 ( 56, 2, 7, 3, '2024-07-04 17:00:00', '2024-07-04 20:00:00', 4, 'Proslava rodjendana', 'D', 9),
 ( 57, 2, 7, 3, '2024-07-04 19:00:00', '2024-07-04 22:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 58, 2, 5, 4, '2024-07-04 18:00:00', '2024-07-04 21:00:00', 2, 'Proslava rodjendana', 'D', 8),
 ( 59, 2, 6, 3, '2024-07-05 17:00:00', '2024-07-05 20:00:00', 3, 'Proslava rodjendana', 'D', 9),
 ( 60, 2, 7, 3, '2024-07-05 17:00:00', '2024-07-05 20:00:00', 4, 'Proslava rodjendana', 'D', 9),
 ( 61, 2, 5, 4, '2024-07-05 19:00:00', '2024-07-05 22:00:00', 2, 'Proslava rodjendana', 'D', 8);
 
DROP TABLE IF EXISTS `dostave`;
CREATE TABLE IF NOT EXISTS `dostave` (
  `id` int PRIMARY KEY AUTO_INCREMENT, 
  `idk` int  NOT NULL,
  `idr` int NOT NULL,
  `datum` Datetime NOT NULL,
  `iznos` int NULL,
  `vreme_dostave` varchar(50) NULL,
  `status` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `dostave` 
(`id`, `idk`, `idr`, `datum`, `iznos`, `vreme_dostave`,`status`)
 VALUES
 ( 1, 3, 1, '2024-07-05 18:00:00', '2000', null, 'G'),
 ( 2, 3, 2, '2024-07-05 19:00:00', '750', null, 'G'),
 ( 3, 3, 1, '2024-07-03 18:00:00', '5500', null, 'G'),
 ( 4, 4, 1, '2024-07-05 18:00:00', '2000', null, 'G'),
 ( 5, 4, 1, '2024-07-05 19:00:00', '750', null, 'G'),
 ( 6, 4, 1, '2024-07-03 18:00:00', '5500', null, 'G');


ALTER TABLE `dostave`
  ADD CONSTRAINT `fk_korisnici_dostave` FOREIGN KEY (`idk`) REFERENCES `korisnici` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    ADD CONSTRAINT `fk_restorani_dostave` FOREIGN KEY (`idr`) REFERENCES `restorani` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

DROP TABLE IF EXISTS `stavke_dostave`;
CREATE TABLE IF NOT EXISTS `stavke_dostave` (
  `id` int PRIMARY KEY AUTO_INCREMENT, 
  `idd` int  NOT NULL,
  `idj` int NOT NULL,
  `kolicina` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `stavke_dostave` 
(`id`, `idd`, `idj`, `kolicina`)
 VALUES
 ( 1, 1, 3, 1),
 ( 2, 1, 2, 1),
 ( 3, 2, 8, 1),
 ( 4, 3, 2, 2),
 ( 5, 3, 4, 1),
 ( 6, 3, 3, 2),
 ( 7, 4, 3, 1),
 ( 8, 4, 2, 1),
 ( 9, 5, 8, 1),
 ( 10, 6, 2, 2),
 ( 11, 6, 4, 1),
 ( 12, 6, 3, 2);


ALTER TABLE `stavke_dostave`
  ADD CONSTRAINT `fk_dostave_stavke_dostave` FOREIGN KEY (`idd`) REFERENCES `dostave` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    ADD CONSTRAINT `fk_jelovnik_stavke_dostave` FOREIGN KEY (`idj`) REFERENCES `jelovnik` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

DROP TABLE IF EXISTS `komentari`;
CREATE TABLE IF NOT EXISTS `komentari` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `idr` int NOT NULL,
  `komentar` varchar(500)UNIQUE NULL,
  `ocena` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `komentari`
  ADD CONSTRAINT `fk_rezervacije_komentari` FOREIGN KEY (`idr`) REFERENCES `rezervacije` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;


 
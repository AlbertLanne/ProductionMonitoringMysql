DROP TABLE IF EXISTS Client ;

CREATE TABLE Client (id_Client INT(5) AUTO_INCREMENT NOT NULL,
nom_Client VARCHAR(20),
id_Commande INT(5),
PRIMARY KEY (id_Client)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Commande ;

CREATE TABLE Commande (id_Commande INT(6) AUTO_INCREMENT NOT NULL,
delaiClient_Commande DATE,
delaiInterfiltre_Commande INT(2),
annee_Commande INT(4),
status_Commande VARCHAR(20),
numOF_Commande INT(6),
PRIMARY KEY (id_Commande)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Filtre ;

CREATE TABLE Filtre (id_Filtre INT(6) AUTO_INCREMENT NOT NULL,
reference_Filtre VARCHAR(30),
gamme_Filtre VARCHAR(20),
PRIMARY KEY (id_Filtre)) ENGINE=InnoDB;

DROP TABLE IF EXISTS EtapeProduction ;

CREATE TABLE EtapeProduction (id_EtapeProduction INT(6) AUTO_INCREMENT NOT NULL,
nom_EtapeProduction VARCHAR(20),
description_EtapeProduction VARCHAR(50),
PRIMARY KEY (id_EtapeProduction)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Employe ;

CREATE TABLE Employe (id_Employe INT(6) AUTO_INCREMENT NOT NULL,
nom_Employe VARCHAR(20),
prenom_Employe VARCHAR(20),
PRIMARY KEY (id_Employe)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Grillage ;

CREATE TABLE Grillage (id_Grillage INT(3) AUTO_INCREMENT NOT NULL,
tailleMaille_Grillage FLOAT,
matiere_Grillage VARCHAR(20),
reference VARCHAR(30),
id_Filtre INT(3),
PRIMARY KEY (id_Grillage)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Media ;

CREATE TABLE Media (id_Media INT AUTO_INCREMENT NOT NULL,
couleur_Media VARCHAR(20),
reference_Media VARCHAR(20),
epaisseur_Media FLOAT,
id_Filtre INT,
PRIMARY KEY (id_Media)) ENGINE=InnoDB;

DROP TABLE IF EXISTS StockMedia ;

CREATE TABLE StockMedia (id_StockMedia INT AUTO_INCREMENT NOT NULL,
quantite_Media INT,
seuilAlerte_Media INT,
id_Media INT,
PRIMARY KEY (id_StockMedia)) ENGINE=InnoDB;

DROP TABLE IF EXISTS StockGrillage ;

CREATE TABLE StockGrillage (id_StockGrillage INT AUTO_INCREMENT NOT NULL,
quantite_Grillage INT(6),
seuilAlerte_Grillage INT(3),
id_Grillage INT,
PRIMARY KEY (id_StockGrillage)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Constituer ;

CREATE TABLE Constituer (id_Commande INT(6) AUTO_INCREMENT NOT NULL,
id_Filtre INT(6) NOT NULL,
PRIMARY KEY (id_Commande,
 id_Filtre)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Composer ;

CREATE TABLE Composer (id_Filtre INT(6) AUTO_INCREMENT NOT NULL,
id_EtapeProduction INT(6) NOT NULL,
NumEtape_Composer INT,
PRIMARY KEY (id_Filtre,
 id_EtapeProduction)) ENGINE=InnoDB;

DROP TABLE IF EXISTS RealiserEtape ;

CREATE TABLE RealiserEtape (id_EtapeProduction INT(6) AUTO_INCREMENT NOT NULL,
id_Employe INT(6) NOT NULL,
dateDebut_RealiserEtape DATETIME,
dateFin_RealiserEtape DATETIME,
PRIMARY KEY (id_EtapeProduction,
 id_Employe)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Prendre ;

CREATE TABLE Prendre (id_Employe INT(6) AUTO_INCREMENT NOT NULL,
id_Grillage INT(6) NOT NULL,
date DATE,
quantite_Prendre INT,
PRIMARY KEY (id_Employe,
 id_Grillage)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Recuperer ;

CREATE TABLE Recuperer (id_Employe INT(6) AUTO_INCREMENT NOT NULL,
id_Media INT(6) NOT NULL,
quantite_Recuperer INT,
date DATE,
PRIMARY KEY (id_Employe,
 id_Media)) ENGINE=InnoDB;

ALTER TABLE Client ADD CONSTRAINT FK_Client_id_Commande FOREIGN KEY (id_Commande) REFERENCES Commande (id_Commande);

ALTER TABLE Grillage ADD CONSTRAINT FK_Grillage_id_Filtre FOREIGN KEY (id_Filtre) REFERENCES Filtre (id_Filtre);

ALTER TABLE Media ADD CONSTRAINT FK_Media_id_Filtre FOREIGN KEY (id_Filtre) REFERENCES Filtre (id_Filtre);

ALTER TABLE StockMedia ADD CONSTRAINT FK_StockMedia_id_Media FOREIGN KEY (id_Media) REFERENCES Media (id_Media);

ALTER TABLE StockGrillage ADD CONSTRAINT FK_StockGrillage_id_Grillage FOREIGN KEY (id_Grillage) REFERENCES Grillage (id_Grillage);

ALTER TABLE Constituer ADD CONSTRAINT FK_Constituer_id_Commande FOREIGN KEY (id_Commande) REFERENCES Commande (id_Commande);

ALTER TABLE Constituer ADD CONSTRAINT FK_Constituer_id_Filtre FOREIGN KEY (id_Filtre) REFERENCES Filtre (id_Filtre);

ALTER TABLE Composer ADD CONSTRAINT FK_Composer_id_Filtre FOREIGN KEY (id_Filtre) REFERENCES Filtre (id_Filtre);

ALTER TABLE Composer ADD CONSTRAINT FK_Composer_id_EtapeProduction FOREIGN KEY (id_EtapeProduction) REFERENCES EtapeProduction (id_EtapeProduction);

ALTER TABLE RealiserEtape ADD CONSTRAINT FK_RealiserEtape_id_EtapeProduction FOREIGN KEY (id_EtapeProduction) REFERENCES EtapeProduction (id_EtapeProduction);

ALTER TABLE RealiserEtape ADD CONSTRAINT FK_RealiserEtape_id_Employe FOREIGN KEY (id_Employe) REFERENCES Employe (id_Employe);

ALTER TABLE Prendre ADD CONSTRAINT FK_Prendre_id_Employe FOREIGN KEY (id_Employe) REFERENCES Employe (id_Employe);

ALTER TABLE Prendre ADD CONSTRAINT FK_Prendre_id_Grillage FOREIGN KEY (id_Grillage) REFERENCES Grillage (id_Grillage);

ALTER TABLE Recuperer ADD CONSTRAINT FK_Recuperer_id_Employe FOREIGN KEY (id_Employe) REFERENCES Employe (id_Employe);

ALTER TABLE Recuperer ADD CONSTRAINT FK_Recuperer_id_Media FOREIGN KEY (id_Media) REFERENCES Media (id_Media);



CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE animal (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    especie VARCHAR(100),
    sexo VARCHAR(20),
	idade INT,
    localizacao VARCHAR(100)
) ENGINE=InnoDB;

CREATE TABLE gerente (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE cuidador (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(id) 
) ENGINE=InnoDB;

CREATE TABLE animal_cuidador (
	cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(id),
    FOREIGN KEY (animal_id) REFERENCES animal(id)
) ENGINE=InnoDB;

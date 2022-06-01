CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE funcionario (
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(100) NOT NULL,
    data_cadastro DATETIME NOT NULL
) ENGINE=InnoDB;

CREATE TABLE setor (
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

INSERT INTO setor(nome) VALUES ('Administração');
INSERT INTO setor(nome) VALUES ('Operacional');
INSERT INTO setor(nome) VALUES ('Estratégico');
INSERT INTO setor(nome) VALUES ('Marketing');
INSERT INTO setor(nome) VALUES ('Vendas');

INSERT INTO funcionario(nome, sobrenome, email, telefone, data_cadastro)
	VALUES
		('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
INSERT INTO funcionario(nome, sobrenome, email, telefone, data_cadastro)
	VALUES
	    ('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00');
INSERT INTO funcionario(nome, sobrenome, email, telefone, data_cadastro)
	VALUES
        ('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35');
INSERT INTO funcionario(nome, sobrenome, email, telefone, data_cadastro)
	VALUES
        ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

CREATE TABLE setor_funcionario (
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) ENGINE=InnoDB;

INSERT INTO setor_funcionario(funcionario_id, setor_id)
	VALUES
		(1,1),(1,5),(2,3),(3,4),(3,5),(4,2);
        
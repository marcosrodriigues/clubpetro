DROP DATABASE clubpetro;
CREATE DATABASE clubpetro;
USE clubpetro;

CREATE TABLE IF NOT EXISTS frentista (
	id 		INT NOT NULL AUTO_INCREMENT,
    cpf 	BIGINT,
    nome 	VARCHAR(50),
    
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS cliente (
	id 		INT NOT NULL AUTO_INCREMENT,
    cpf 	BIGINT,
    nome 	VARCHAR(50) ,
    
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS venda (
	id		INT NOT NULL AUTO_INCREMENT,
    frentista_id INT NOT NULL,
    cliente_id INT NOT NULL,
    data_venda DATETIME DEFAULT CURRENT_TIMESTAMP,
    preco FLOAT,
    
    PRIMARY KEY(id)
);

ALTER TABLE frentista ADD UNIQUE (id, cpf);
ALTER TABLE cliente ADD UNIQUE (id, cpf);

ALTER TABLE venda ADD FOREIGN KEY (frentista_id) REFERENCES frentista(id);
ALTER TABLE venda ADD FOREIGN KEY (cliente_id) REFERENCES cliente(id);
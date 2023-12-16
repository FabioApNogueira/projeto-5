-- Inserir clientes
INSERT INTO cliente (nome, email, senha, cpf, telefone, data_nascimento)
VALUES ('Irineu Júnior', 'iri.jr@gmail.com', '123', '789.674.789-98', '9 2658-5236', '1985-03-13');

INSERT INTO cliente (nome, email, senha, cpf, telefone, data_nascimento)
VALUES ('Daenerys Targaryen', 'maedragoes@com', '123', '123.654.789-98', '9 8745-4789', '1996-05-23');

INSERT INTO cliente (nome, email, senha, cpf, telefone, data_nascimento)
VALUES ('Carol Denvers', 'cap.marvel@gmail.com', '456', '987.654.789-98', '9 9854-1425', '1979-07-10');

INSERT INTO cliente (nome, email, senha, cpf, telefone, data_nascimento)
VALUES ('Steve Rogers', 'cap.america@gmail.com', '789', '967.257.146-23', '9 8945-3576', '1914-11-15');

-- Inserir destinos
INSERT INTO destino (nome, valor, descricao, imagem)
VALUES ('Recife', 256, 'Encantadora cidade costeira no nordeste do Brasil...', 'https://a.cdn-hotels.com/gdcs/production165/d295/de825d07-0f3f-41e6-b41b-031791c6d729.jpg');

INSERT INTO destino (nome, valor, descricao, imagem)
VALUES ('Natal', 328, 'Natal é uma acolhedora cidade no nordeste do Brasil...', 'https://visit.natal.br/assets/img/galeria3-min.jpg');

-- Continuar inserções para os demais destinos

-- Inserir contatos
INSERT INTO contato (nome, email, mensagem)
VALUES ('Juquinha de Assis', 'juca@com', 'Gostaria de saber sobre minha viagem!');

INSERT INTO contato (nome, email, mensagem)
VALUES ('Théo José', 'josel@com', 'Como eu posso comprar uma viagem para Fernando de Noronha?');

-- Inserir reservas
INSERT INTO reserva (cliente_id, data_hora, destino_id)
VALUES (1, '2023-12-03 14:30:00', 2);

INSERT INTO reserva (cliente_id, data_hora, destino_id)
VALUES (2, '2024-01-10 21:00:00', 1);

INSERT INTO reserva (cliente_id, data_hora, destino_id)
VALUES (3, '2024-01-10 21:00:00', 3);

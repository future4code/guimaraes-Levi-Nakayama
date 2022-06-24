

### Exercicio1

a - é uma chave que não necessariamente se refere a uma tabela, e sim do relacionamento entre as tabelas.

b - 
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

c - 
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"008",
    "Péssimo",
    0,
		"004"
);

não irá atualizar por conta da chave estrangeira. somente se o ID existe para alguma chave estrangeira.

d - 

ALTER TABLE Movie DROP COLUMN rating;

e - antes de deletar um filme, precisa apagar todas as avaliações.
caso contrário não dá pra deletar.

### Exercicio 2

a - a primeira tabela é de filmes e a segunda de atores. a tabela geral teremos os ids de cada filme e id de cada ator.

b - ('a', '11'), ('b','6'), ('c', '15'), ('d', '1'), ('e', '2'), ('f','20')

c - não consegue criar a relação, fica null.

d - não vai deixar deletar, pois o ator está relacionado com algum filme (movie_id é a chave estrangeira). 


### Exercicio 3

a - vai juntar as tabelas se baseando no movie_id.

b - SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;


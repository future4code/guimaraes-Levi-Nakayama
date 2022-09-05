
CREATE TABLE IF NOT EXISTS Users_Cookenu (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    
);

CREATE TABLE IF NOT EXISTS Recipe_Cookenu (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(1024) NOT NULL,
    date DATE,
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Users_Cookenu(id)
);

CREATE TABLE IF NOT EXISTS Follow_Cookenu (
    id VARCHAR(64),
    author_id VARCHAR(64) NOT NULL,
    idUserFollow VARCHAR(64) NOT NULL,
    FOREIGN KEY (author_id) REFERENCES User_Cookenu(id),
    FOREIGN KEY (idUserFollow) REFERENCES User_Cookenu(id)
);

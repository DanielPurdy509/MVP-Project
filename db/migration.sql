DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name varchar (25),
    password varchar (25)
);

CREATE TABLE cards (
    id serial PRIMARY KEY,
    subject varchar(25),
    definition varchar(50),
    users_id int REFERENCES users(id)
);
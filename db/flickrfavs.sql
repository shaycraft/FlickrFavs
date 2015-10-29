CREATE SCHEMA auth;

SET search_path = auth, pg_catalog;

CREATE TABLE auth.users
(
	id serial primary key,
	username varchar(255),
	firstname varchar(255),
	lastname varchar(255),
	password varchar(255),
	email varchar(255)
);

CREATE TABLE auth.clients 
(
    id integer primary key,
    name varchar(255),
    secret varchar(255)
);
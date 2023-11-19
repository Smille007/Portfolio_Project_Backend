DROP DATABASE IF EXISTS posts_dev;
CREATE DATABASE posts_dev;

\c posts_dev;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    img VARCHAR(500) NOT NULL,
    DATETIME TIME,
    user_id INT,
    registration_confirmed BOOLEAN
);
DROP DATABASE IF EXISTS posts_dev;
CREATE DATABASE posts_dev;

\c posts_dev;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    img TEXT NOT NULL,
    date_time TIMESTAMPTZ,
    user_id INT,
    registration_confirmed BOOLEAN
);
CREATE DATABASE jeopardy_db;
\c jeopardy_db;

CREATE TABLE user_questions(
  id SERIAL PRIMARY KEY,
  answer TEXT,
  question TEXT,
  category TEXT,
  user_answer BOOLEAN,
  question_id INTEGER,
  category_id INTEGER,
  value INTEGER,
  user_id INTEGER
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);

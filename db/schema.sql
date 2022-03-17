CREATE DATABASE jeopardy_db;
\c jeopardy_db;

CREATE TABLE user_questions(
  id SERIAL PRIMARY KEY,
  answer TEXT,
  user_answer TEXT,
  question TEXT,
  category TEXT,
  user_correct BOOLEAN,
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

SELECT CAST(user_correct AS INTEGER) FROM user_questions;

SELECT CAST(user_correct AS INTEGER) FROM user_questions WHERE user_id = 1;

SELECT COUNT(*) AS total_questions_answered, AVG(CAST(user_correct AS INTEGER)) * 100 AS percentage_correct FROM user_questions;

SELECT COUNT(*) AS total_questions_answered, AVG(CAST(user_correct AS INTEGER)) * 100 AS percentage_correct FROM user_questions WHERE user_id = 1;

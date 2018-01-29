require('dotenv').config();

import db from '../../config/database';
import {
  success,
  error
} from '../log';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    success('successfully created database', database);
  } catch (err) {
    error('error creating database ', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    );
    success('successfully dropped database ', database);
  } catch (err) {
    error('error dropping database ', err);
  }
};

export const useDatabase = async () => {
  try {
    await db.queryAsync(
      `USE IF EXISTS ${database}`
    );
    success('successfully using database ', database);
  } catch (err) {
    error('error using database ', err);
  }
};

export const createUserTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS users
      (
      id SERIAL,
      email VARCHAR(255) UNIQUE NOT NULL,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      type INT,
      CONSTRAINT users_pk
        PRIMARY KEY(id)
      )
      `
    );
    success('successfully created users table');
  } catch (err) {
    error('error creating users table ', err)
  }
};

export const dropUserTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS users`
    );
    success('successfully dropped users table');
  } catch (err) {
    error('error dropping users table ', err);
  }
};
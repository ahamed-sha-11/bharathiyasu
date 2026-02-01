import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const dbconnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);
  
export { dbconnection as db };
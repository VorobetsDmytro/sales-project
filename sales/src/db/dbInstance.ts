import { Sequelize } from "sequelize";

const DB_DATABASE = process.env.DB_DATABASE || 'postgres';
const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = +(process.env.DB_PORT || 5432);

const dbInstance = new Sequelize({
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    logging: false,
});

export default dbInstance;

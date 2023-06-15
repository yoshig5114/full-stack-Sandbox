// this functions as our file to log into mySQL
// by means of a file called ".env"

// .gitIgnore will by default not push any files with ".env"
// in  front of them to gitHub
// the .env file should be specific to anyone working on the same codebase

const dotenv = require('dotenv');

const envFound = dotenv.config();

if (!envFound) {
    throw new Error("Couldn't find .env file");
}

module.exports = {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
    },
    port: parseInt(process.env.PORT),
}
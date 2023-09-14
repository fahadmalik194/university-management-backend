require('dotenv').config();

const x = {
  development: {
    username: 'root',
    password: 'notSecureChangeMe',
    database: 'universitymanagementportal',
    host: 'localhost',
    dialect: 'mysql',
  }
};
module.exports = x;

require('dotenv').config();

const x = {
  development: {
    username: 'root',
    password: 'your_password',
    database: 'universitymanagementportal',
    host: 'localhost',
    dialect: 'mysql',
  }
};
module.exports = x;

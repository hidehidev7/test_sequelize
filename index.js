import http from 'node:http';
import Sequelize from 'sequelize';

const sequelize = new Sequelize('dvdrental', 'postgres', 'matrix_revolution', {
  host: 'localhost',
  dialect: 'postgres',
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to our website!');
});
server.listen(3000);

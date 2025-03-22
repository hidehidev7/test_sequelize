import express from 'express';
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

const app = express();

//Routing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
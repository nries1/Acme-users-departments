const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbmodule = require('./db.js');
const db = dbmodule();
//app.use(express.static('lib'));
// const formidable = require('formidable');
// const serveStatic = require('serve-static');
const path = require('path');
// app.use(express.json());

// const client = new pg.Client({
//   connectionString: 'postgres://localhost:5432'
// });

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api/users', (req, res, next) => {
  console.log(`server received get request at api/users`);
  db.findAllUsers()
    .then(usersData => {
      console.log('sending users data ', usersData);
      res.send(usersData);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/api/departments', (req, res, next) => {
  db.findAllDepartments()
    .then(departmentsData => {
      console.log('sending departments data ', departmentsData);
      res.send(departmentsData);
    })
    .catch(error => res.send(error));
});

//sqlFunc();
app.listen(port);
console.log(`Server is listening at port ${port}`);

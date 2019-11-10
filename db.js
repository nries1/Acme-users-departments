const pg = require('pg');
const client = new pg.Client({
  connectionString: 'postgres://localhost:5432'
});
client.connect();
module.exports = () => {
  const findAllUsers = async () => {
    try {
      await client.connect();
    } catch (error) {
      console.log(error);
    }
    //console.log(client);
    const tableView = await client.query('SELECT * FROM users');
    return tableView.rows;
  };
  const findAllDepartments = async () => {
    try {
      await client.connect();
    } catch (error) {
      console.log(error);
    }
    const tableView = await client.query('SELECT * FROM departments');
    return tableView.rows;
  };
  return {
    findAllUsers,
    findAllDepartments
  };
};

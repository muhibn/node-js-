const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_pass,
  database: process.env.db_name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection is failed", err);
  } else {
    console.log("Database connection is successful");
  }
});

app.get('/api/get', (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "An error occurred while fetching data" });
    } else {
      console.log("Data fetched successfully");
      res.status(200).json(result);
    }
  });
});

app.post('/api/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Hash and salt the password before storing it in the database (for security).

  db.query("INSERT INTO user (username, password) VALUES (?, ?)", [username, password], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "An error occurred while inserting data" });
    } else {
      console.log("Data inserted successfully");
      res.status(200).json({ message: 'Data received successfully' });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

const server = app.listen(3001, () => {
  console.log("The Server Running on Port 3001");
});

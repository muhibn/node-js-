const express = require("express");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.Host_db,
  user: process.env.User_db,
  password: process.env.Passowrd_db, // Corrected misspelled variable name
  database: process.env.Database,
});

exports.iteminput = (req, res) => {
  console.log(req.file); // Information about the uploaded file
  res.send("File uploaded successfully!");
};

exports.login = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).render("logn", { message: "Please Enter the email " });
    }

    db.query(
      "SELECT * FROM buyer WHERE email=?",
      [email],
      async (err, result) => {
        console.log(result);
        if (err) {
          console.log("this error is happen ", err);
        } else if (await bcrypt.compare(password, result[0].password)) {
          return res.render("home", { message: "Welcome " + result[0].username });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.register = (req, res) => {
  const { email, username, password, cpassword } = req.body;

  console.log("this is user name ", email);

  db.query(
    "SELECT email FROM buyer WHERE email=?",
    [email],
    async (err, result) => {
      if (err) {
        console.log("error is happen ", err);
      } else if (result.length > 0) {
        console.log("console log ", result.length);
        return res.render("register", {
          message: "This mail is already existed",
        });
      } else if (password !== cpassword) {
        return res.render("register", {
          message: "password not match ",
        });
      } else {
        let passwordhash = await bcrypt.hash(password, 8);
        db.query(
          "INSERT INTO buyer SET ?",
          { email: email, username: username, password: passwordhash },
          (err, result) => {
            if (err) {
              console.log("hello world");
            } else {
              console.log("Register is complete  ");
              res.render("home", {
                message: "hello world ",
              });
            }
          }
        );
      }
    }
  );
};

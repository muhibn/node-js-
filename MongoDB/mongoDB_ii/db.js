const { MongoClient } = require("mongodb");

let dbconnect;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://127.0.0.1:27017/updateinfo")
      .then((client) => {
        dbconnect = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cd();
      });
  },
  getDb: () => dbconnect,
};
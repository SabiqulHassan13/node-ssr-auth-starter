const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

const connectDB = async () => {
  const connectUrl = "mongodb://localhost:27017";
  const client = await MongoClient.connect(connectUrl);
  database = client.db("eshop-web");
};

const getDB = () => {
  if (!database) {
    throw new Error("You must connect DB first...");
  }

  // console.log("DB connected successfully");
  return database;
};

module.exports = { connectDB, getDB };

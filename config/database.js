const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
let database;

async function connectMongoDB() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db("online-shop");
}

function getMongoDB() {
  if (!database) {
    throw new Error("You must connect DB first...");
  }

  return database;
}

module.exports = {
  connectMongoDB: connectMongoDB,
  getMongoDB: getMongoDB,
};

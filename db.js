const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://harshil0518:harshil185@cluster0.ng7eftm.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'CMS';

  // Use connect method to connect to the server
  client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);

  module.exports = db;
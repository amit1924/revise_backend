// Importing the necessary MongoClient module from the mongodb library
const MongoClient = require('mongodb').MongoClient;

// Defining the connection URL and the name of the database
const url = 'mongodb://localhost:27017'; // This is the default URL for a local MongoDB server
const dbName = 'human'; // This is the name of the database we'll be working with

// Defining an asynchronous function named connectAndInsert
async function connectAndInsert() {
    try {
        // Establishing a connection to the MongoDB server
        const client = await MongoClient.connect(url);

        // Accessing the desired database within the server
        const db = client.db(dbName);

        // Logging a success message to the console
        console.log('Connected successfully to Server');

        // Inserting a document into the 'students' collection of the database
        const result = await db.collection('students').insertOne({ name: 'Amit', age: 32 });

        // Logging a success message along with the result of the insertion
        console.log('Document inserted:', result);
    } catch (err) {
        // Catching and handling any potential errors
        console.error('Error connecting to MongoDB:', err);
    }
}

// Calling the connectAndInsert function to start the process
connectAndInsert();

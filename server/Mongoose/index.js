// const mongoose = require('mongoose');

// // Define a Schema
// const amitSchema = new mongoose.Schema({
//     name: 'String',
//     age: Number
// });

// // Create a Model based on the Schema
// const Amit = mongoose.model('rashmi', amitSchema);

// // Define the connection URL
// const url = 'mongodb://localhost:27017/family';

// // Establish a connection
// mongoose.connect(url);

// const db = mongoose.connection;

// db.on('error', (err) => {
//     console.log('Connection Error:', err);
// });

// // Create a new amit document
// const newAmit = new Amit({
//     name: 'Amit',
//     age: 32
// });

// // Save the Document to the database
// newAmit.save()
//     .then(savedAmit => {
//         console.log('Document saved to database', savedAmit);
//     })
//     .catch(err => {
//         console.error(err);
//     });



//Another Method
const mongoose = require('mongoose');

// Define a schema for the data you want to save
const amitSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Create a model based on the schema
const Amit = mongoose.model('rahul', amitSchema);

// Define the connection URL
const url = 'mongodb://localhost:27017/family';

// Create an async function to handle the database operations
async function connectAndSave() {
    try {
        // Connect to the database
        await mongoose.connect(url);

        // Create a new Amit document
        const newAmit = new Amit({
            name: 'Amit',
            age: 32
        });

        // Save the document to the database
        const savedAmit = await newAmit.save();

        console.log('Document saved to database', savedAmit);
    } catch (err) {
        console.error(err);
    }
}

// Call the async function to execute the code
connectAndSave();


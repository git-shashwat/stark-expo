const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'stark-expo';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!');
        return;
    }

    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name: 'Shashwat',
        age: 19
    });
});
const mongoose = require('mongoose')

const dbName = "clientDB"
const dbURL = `mongodb://127.0.0.1:27017/${dbName}`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbURL, options)
    .then(() => { console.log("Connected to database " + dbName) })
    .catch(e => { console.log(e) });

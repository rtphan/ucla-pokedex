require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const config = require('./config');
// var fs = require('fs');
// const https = require('https');


const app = express();
app.use(cors());
app.use(express.json());

// const server = https.createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
// }, app);

const client = new mongodb.MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(() => {
    console.log("MongoDB database connection established successfully.")

    // const exampleRoutes = require('./routes/example');
    // app.use('/example', exampleRoutes);
    const pokemonRoutes = require('./routes/pokemon');
    app.use('/pokemon', pokemonRoutes);

    // server.listen(config.backend.port, () => {
    //     console.log(`Server is running on port ${config.backend.port}.`);
    // });
    app.listen(config.backend.port, () => {
        console.log(`Server is running on port ${config.backend.port}.`);
    });
});


require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const config = require('./config');


const app = express();
app.use(cors());
app.use(express.json());

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

    app.listen(config.backend.port, () => {
        console.log(`Server is running on port ${config.backend.port}.`);
    });
});


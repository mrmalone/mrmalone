const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config()

// configurare bazei de date
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected!'))

mongoose.connection.on("error", err => {
    console.log('DB connection error: ${err.message}');
});

// folosim routes
const postRoutes = require('./routes/post');

// middleware
app.use(morgan("dev"));
app.use('/', postRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`API server is listening on port: ${port}`)
});
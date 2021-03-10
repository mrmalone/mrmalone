const express = require('express');
const app = express();
const morgan = require('morgan');

// folosim routes
const { getPosts } = require('./routes/post');

// poate intra in loop
const myOwnMiddle = (req, res, next) => {
    console.log('middleware here!');
    next();
};

// middleware
app.use(myOwnMiddle);
app.use(morgan("dev"));

app.get('/', getPosts);

const port = 3000;
app.listen(port, () => {
    console.log(`API server is listening on port: ${port}`)
});
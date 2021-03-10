const express = require('express');
const app = express();

// folosim routes
const { getPosts } = require('./routes/post');

app.get('/', getPosts);

const port = 3000;
app.listen(port, () => {
    console.log(`API server is listening on port: ${port}`)
});
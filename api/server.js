const express = require('express');
const path = require('node:path');

const PORT = 3000;

const app = express();

const routes = require('./router.js')


const options = {
    root: path.join(__dirname, "static")
}

app.use('/', express.static("static"))

app.use("/", (req, res) => {
    return res.sendFile('../index.html', options)
})

module.exports = app;

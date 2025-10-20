const path = require('node:path')
const express = require('express')
const router = express.Router();

const options = {
    root: path.join(__dirname, "static")
}

router.use('/', express.static("static"))

router.get("/", (req, res) => {
    return res.sendFile('index.html', options)
})

module.exports = router

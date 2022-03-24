const express = require('express')
const app = express()
const port = 80

const users = require("./router")

app.use('/', function (req, res, next) {
    const time = new Date()
    users(req, res, next)
    console.log(`${new Date().toLocaleString()}  IP User ${req.ip} ${req.originalUrl} ms:${new Date() - time}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

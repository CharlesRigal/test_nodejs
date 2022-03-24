const express = require('express')
const app = express()
const port = 80

const users = require("./router")

app.use('/', users)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

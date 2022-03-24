const express = require('express')
const app = express()
const port = 80

const argon2 = require("argon2")

const users = require("./user-acces")

//const users = require("db.js")

app.use(express.json())

app.get('/users/', (req, res) => {
    res.send(users.getUsers())
})

app.get('/user/:name', (req, res) => {
    let user = users.getUserByName(req.params.name)
    if (user === undefined) {
        res.statusCode = 404
        return res.send()
    }
    return res.send(user)
})

app.post('/user/add', async (req, res) => {
    console.log(req.body.password)
    const hash = await argon2.hash(req.body.password)
    users.addUser(req.body.firstName, req.body.lastName, hash)
    res.send()
})

app.post('/user/:id/update', async (req, res) => {
    const hash = await argon2.hash(req.body.newPassword)
    users.updateUser(req.params.id, req.body.newFirstName, req.body.newLastName, hash)
    res.send()
})

app.get('/user/:id/delete', (req, res) => {
    users.deleteUser(req.params.id)
    res.send()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

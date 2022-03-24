const express = require('express');
const router = express.Router()
const argon2 = require("argon2")
const users = require("./user-acces")

router.use(express.json())

router.get('/users/', (req, res) => {
    res.send(users.getUsers())
})

router.get('/user/:name', (req, res) => {
    let user = users.getUserByName(req.params.name)
    if (user === undefined) {
        res.statusCode = 404
        return res.send()
    }
    return res.send(user)
})

router.post('/user/add', async (req, res) => {
    console.log(req.body.password)
    const hash = await argon2.hash(req.body.password)
    users.addUser(req.body.firstName, req.body.lastName, hash)
    res.code = 204
    res.send()
})

router.post('/user/:id/update', async (req, res) => {
    const hash = await argon2.hash(req.body.newPassword)
    users.updateUser(req.params.id, req.body.newFirstName, req.body.newLastName, hash)
    res.code = 204
    res.send()
})

router.get('/user/:id/delete', (req, res) => {
    users.deleteUser(req.params.id)
    res.code = 204
    res.send()
})

router.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;

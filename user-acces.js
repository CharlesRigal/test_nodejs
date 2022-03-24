
const users = require("./db")

const getUsers = function () {
    return users
}

const getUserByName = function (userName) {
    return users.find(elem => elem.firstName === userName )
}

const updateUser = function (idUser, newFirstName, newLastName, newPassword) {
    users.forEach((user, index) => {
        console.log(user.id.toString())
        if (user.id.toString() === idUser) {
            users[index].firstName = newFirstName
            users[index].lastName = newLastName
            users[index].password = newPassword
            return 0
        }
    })
    return 1
}

const addUser = function (firstName, lastName, password) {
    users.push({id:users.slice(-1)[0].id + 1, firstName:firstName, lastName:lastName, password:password})
    return 0
}

const deleteUser = function (idUser) {
    users.splice(idUser, 1)
}

module.exports = {
    getUsers,
    getUserByName,
    addUser,
    updateUser,
    deleteUser,
}

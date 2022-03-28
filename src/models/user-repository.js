const { users } = require('./db');
const argon2 = require('argon2')
const uuid = require('uuid')
const Console = require("console");

exports.getUsers = () => {
  return users;
};

exports.getUserByFirstName = (firstName) => {
  const foundUser = users.find((user) => user.firstName === firstName);

  if (!foundUser) {
    throw new Error('User not found');
  }

  return foundUser;
};

exports.createUser = async function (data) {
  try {
    exports.getUserByFirstName(data.firstName)
  } catch (Error) {
    const user = {
      id: uuid.v4(),
      firstName: data.firstName,
      lastName: data.lastName,
      password: await argon2.hash(data.password),
    };
    users.push(user);
  }
};

exports.updateUser = async (id, data) => {
  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    throw new Error('User not found');
  }

  foundUser.firstName = data.firstName || foundUser.firstName;
  foundUser.lastName = data.lastName || foundUser.lastName;
  foundUser.password = data.password ? await argon2.hash(data.password) : foundUser.password;
};

exports.deleteUser = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    throw new Error('User not foud');
  }

  users.splice(userIndex, 1);
}

exports.checkUser = async (user, password) => {
  return await argon2.verify(user.password, password);
}

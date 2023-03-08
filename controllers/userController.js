let users = require("./../data/randomUser.json");

//Get a random user
module.exports.getRandomUser = async (req, res, next) => {
  try {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    res.json(randomUser);
  } catch (error) {
    next(error);
  }
};

//Get all random users or specific users
module.exports.getRandomUsers = async (req, res, next) => {
  try {
    const limit = req?.query?.limit;
    if (limit) {
      const limitedUser = users.slice(0, limit);
      res.json(limitedUser);
    } else {
      res.json(users);
    }
  } catch (error) {
    next(error);
  }
};

//Save a user
module.exports.saveUser = async (req, res, next) => {
  try {
    const user = req.body;
    if (
      !user.name ||
      !user.gender ||
      !user.contact ||
      !user.address ||
      !user.photoUrl
    ) {
      return res.status(400).json({ message: "Bad request" });
    }
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
    F;
  } catch (error) {
    next(error);
  }
};

//Update a user
module.exports.updateUser = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    if (!userId) {
      return;
    }
    if (1 <= userId <= users.length) {
      const updatedUser = req.body;
      updatedUser.id = userId;
      if (
        !updatedUser.name ||
        !updatedUser.gender ||
        !updatedUser.contact ||
        !updatedUser.address ||
        !updatedUser.photoUrl
      ) {
        return res.status(400).json({ message: "Required field missing" });
      }
      users = users.map((user) => (user.id !== userId ? user : updatedUser));
      res.json(updatedUser);
    } else {
      return res.status(404).json({ message: "Invalid User Id" });
    }
  } catch (error) {
    next(error);
  }
};

//Delete a user
module.exports.deleteUser = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    if (!userId) {
      return;
    }
    if (1 <= userId <= users.length) {
      const deletedUser = users.find((user) => user.id === userId);
      users.splice(userId - 1, 1);
      res.json(deletedUser);
    } else {
      return res.status(404).json({ message: "Invalid User Id" });
    }
  } catch (error) {
    next(error);
  }
};

//Update users
module.exports.updatesUser = async (req, res, next) => {
  try {
    const updatedUsers = req.body;
    for (const updateUser of updatedUsers) {
      if (
        !updateUser.id ||
        !updateUser.name ||
        !updateUser.gender ||
        !updateUser.contact ||
        !updateUser.address ||
        !updateUser.photoUrl
      ) {
        return res.status(400).json({ message: "Required field missing" });
      }
    }
    users = users.map(
      (user) =>
        updatedUsers.find((updateUser) => updateUser.id === user.id) || user
    );
    res.json(updatedUsers);
  } catch (error) {
    next(error);
  }
};

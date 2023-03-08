const users = require("./../data/randomUser.json");

module.exports.getRandomUser = async (req, res, next) => {
  try {
    res.json(users);
  } catch (error) {
    next(error);
  }
};

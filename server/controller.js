const model = require('./model.js');

module.exports = {
  avatar: {
    get: (req, res) => {
      model.avatar.get()
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).send(err));
    },
  },
};

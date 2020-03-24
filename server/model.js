const db = require('../db/index.js');

module.exports = {
  avatar: {
    get: () => db.Avatar.findById('5e79747e94c070878af35ca6'),
  },
};

// .skip(Math.random() * 100)

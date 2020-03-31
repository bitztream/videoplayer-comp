/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bitztream_video', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("we're connected!"));

const AvatarSchmea = new mongoose.Schema({
  id: Number,
  name: { type: String, unique: true },
  title: String,
  team: String,
  watching: Number,
  totalViewer: Number,
  gamePic: String,
  videos: [{ video_url: String, tags: Array, category: String }],
});

const Avatar = mongoose.model('Avatar', AvatarSchmea);


module.exports = { Avatar };

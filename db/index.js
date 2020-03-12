/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bitztream_video', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("we're connected!"));

const VideoSchmea = new mongoose.Schema({
  id: Number,
  name: { type: String, unique: true },
  title: String,
  tags: String,
  video_pic: String,
  game_pic: String,
  category: String,
  team: String,
  watching: Number,
  total_Viewer: Number,
  video_type: String,
  video_duration: Number,
});

// category is game name, VIDEO_TYPE: LONG VIDOE, CLIPS, Brodcast
// tags would be random tags related to player or game

const Videoplayer = mongoose.model('videoplayer', VideoSchmea);

const data = [{ a: 1 }, { b: 1 }, { c: 1 }];

Videoplayer.insertMany(data)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

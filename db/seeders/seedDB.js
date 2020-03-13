/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');
const faker = require('faker');
const db = require('../index.js');
// videos schema
const catVideos = ['https://bitztream.s3-us-west-1.amazonaws.com/cat/Lazy+Cat.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/cat/Little+Kitten+Playing+His+Toy+Mouse.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/cat/Pexels+Videos+1722593.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/cat/Pexels+Videos+3910.mp4'];

const dogVideos = ['https://bitztream.s3-us-west-1.amazonaws.com/dog/Dog+in+Car.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/dog/Pexels+Videos+1123272.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/dog/Pexels+Videos+1182756.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/dog/Pexels+Videos+1851001.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/dog/video.mp4'];

const randomCatvideo = () => catVideos[Math.floor(Math.random() * catVideos.length)];
const randomDogvideo = () => dogVideos[Math.floor(Math.random() * dogVideos.length)];

// generate one video object
const video = () => {
  let videoschmea = {};
  const categories = ['cat', 'dog'];
  const cater = categories[Math.floor(Math.random() * categories.length)];
  if (cater === 'cat') {
    videoschmea = { video_url: randomCatvideo(), tags: ['animal lover', 'cat lover'], category: cater };
  } else {
    videoschmea = { video_url: randomDogvideo(), tags: ['animal lover', 'dog lover'], category: cater };
  }
  return videoschmea;
};
// generate many video objects
const videos = () => {
  const time = Math.floor(Math.random() * ((5 - 1) + 1));
  const result = [];
  for (let i = 0; i < time; i++) {
    result.push(video());
  }
  return result;
};

const dummydata = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    // Avata schema
    const name = faker.name.findName();
    const title = faker.lorem.words();
    const team = faker.hacker.abbreviation();
    const watching = Math.floor(faker.finance.amount() * 10);
    const totalViewer = watching * Math.floor(Math.random() * ((10 - 1) + 1));
    const gamePic = faker.image.imageUrl();
    data.push({
      name, title, team, watching, totalViewer, gamePic, videos: videos(),
    });
  }

  return db.Avatar.insertMany(data);
};

dummydata()
  .then(() => mongoose.disconnect())
  .catch((err) => console.log(err));

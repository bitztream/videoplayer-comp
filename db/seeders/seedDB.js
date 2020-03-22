/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');
const faker = require('faker');
const db = require('../index.js');
// videos schema
const catVideos = ['https://bitztream.s3-us-west-1.amazonaws.com/cat/Lazy+Cat.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/cat/Little+Kitten+Playing+His+Toy+Mouse.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/cat/Pexels+Videos+1722593.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/cat/Pexels+Videos+3910.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/cat/video.mp4'];

const dogVideos = ['https://bitztream.s3-us-west-1.amazonaws.com/dog/Dog+in+Car.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/dog/Pexels+Videos+1123272.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/dog/Pexels+Videos+1182756.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/dog/Pexels+Videos+1851001.mp4',
  'https://bitztream.s3-us-west-1.amazonaws.com/dog/video.mp4'];

const randomCatvideo = () => catVideos[Math.floor(Math.random() * catVideos.length)];
const randomDogvideo = () => dogVideos[Math.floor(Math.random() * dogVideos.length)];

// generate one video object
const catVideo = () => {
  let videoschmea = {};
  const category = 'cat';
  videoschmea = { video_url: randomCatvideo(), tags: ['animal lover', 'cat lover'], category };
  return videoschmea;
};

const dogVideo = () => {
  let videoschmea = {};
  const category = 'dog';
  videoschmea = { video_url: randomDogvideo(), tags: ['animal lover', 'dog lover'], category };
  return videoschmea;
};
// generate many video objects
const cats = () => {
  const time = Math.floor(Math.random() * (6 + 0) + 1);
  const result = [];
  for (let i = 0; i < time; i++) {
    let exist = false;
    if (i === 0) {
      result.push(catVideo());
    } else {
      const cat = catVideo();
      for (let j = 0; j < result.length; j++) {
        if (result[j].video_url === cat.video_url) {
          exist = true;
        }
      }
      if (exist === false) {
        result.push(cat);
      }
    }
  }
  return result;
};

const dogs = () => {
  const time = Math.floor(Math.random() * (6 + 0) + 1);
  const result = [];
  for (let i = 0; i < time; i++) {
    let exist = false;
    if (i === 0) {
      result.push(dogVideo());
    } else {
      const dog = dogVideo();
      for (let j = 0; j < result.length; j++) {
        if (result[j].video_url === dog.video_url) {
          exist = true;
        }
      }
      if (exist === false) {
        result.push(dog);
      }
    }
  }
  return result;
};

const dummydata = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    // Avata schema
    const temp = [dogs(), cats()];
    const videos = temp[Math.floor(Math.random() * (2 - 1 + 1))];
    const name = faker.name.findName();
    const title = faker.lorem.words();
    const team = faker.hacker.abbreviation();
    const watching = Math.floor(faker.finance.amount() * 10);
    const totalViewer = watching * (Math.floor(Math.random() * ((10 - 1) + 1)) + 2);
    const gamePic = 'https://picsum.photos/420/320';
    data.push({
      name, title, team, watching, totalViewer, gamePic, videos,
    });
  }

  return db.Avatar.insertMany(data);
};

dummydata()
  .then(() => mongoose.disconnect())
  .catch((err) => console.log(err));

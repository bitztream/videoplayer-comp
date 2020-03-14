/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import VideoPlayer from './Videoplayer.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      video: [],
    };
    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    axios.get('/api/get')
      .then((result) => {
        this.setState({
          video: result.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { video } = this.state;
    console.log(video);
    return (
      <div><VideoPlayer video={video} /></div>
    );
  }
}

export default App;

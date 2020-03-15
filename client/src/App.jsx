/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import VideoPlayer from './Videoplayer.jsx';
import ChannelInfoBar from './ChannelInfoComp/ChannelInfoBar.jsx';

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
    return (
      <div>
        <div><VideoPlayer video={video} /></div>
        <div><ChannelInfoBar video={video} /></div>
      </div>
    );
  }
}

export default App;

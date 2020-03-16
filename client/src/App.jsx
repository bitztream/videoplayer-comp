/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import VideoPlayer from './Videoplayer.jsx';
import ChannelInfoBar from './ChannelInfoComp/ChannelInfoBar.jsx';
import PlaceholderDiv from './Placeholder.jsx';
import ScrollDownVidList from './ScrollDownVid.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      video: [],
      hidden: false,
    };
    this.get = this.get.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.get();
    window.addEventListener('scroll', this.handleScroll, true);
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  get() {
    axios.get('/api/get')
      .then((result) => {
        this.setState({
          video: result.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handleScroll(event) {
    event.preventDefault();
    const lastScrollY = window.scrollY;
    if (lastScrollY >= 410) {
      this.setState({
        hidden: true,
      });
    } else {
      this.setState({
        hidden: false,
      });
    }
  }


  render() {
    const { video, hidden } = this.state;
    const smallVideo = hidden ? <ScrollDownVidList video={video} onScroll={this.handleScroll} /> : '';
    return (
      <div className="mypart">
        <VideoPlayer video={video} />
        <ChannelInfoBar video={video} />
        {smallVideo}
        <PlaceholderDiv />
        <PlaceholderDiv />
      </div>
    );
  }
}

export default App;

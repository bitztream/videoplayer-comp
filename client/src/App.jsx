/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import VideoPlayer from './Videoplayer.jsx';
import ChannelInfoBar from './ChannelInfoComp/ChannelInfoBar.jsx';
import PlaceholderDiv from './Placeholder.jsx';
import ScrollDownVidList from './ScrollDownVid.jsx';
import Widget from './PopupWidget/PopForm.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      video: [],
      hidden: false,
      clicked: false,
    };
    this.get = this.get.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.get();
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  get() {
    axios.get('/api/get')
      .then((result) => {
        this.setState({ video: result.data });
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

  handleClick(event) {
    event.preventDefault();
    const { clicked } = this.state;
    if (clicked) {
      this.setState({
        clicked: false,
      });
    } else {
      this.setState({
        clicked: true,
      });
    }
    console.log(this.state.clicked);
  }


  render() {
    const { video, hidden, clicked } = this.state;
    let smallVideo; let channelInfoBar = '';
    const popup = clicked ? <Widget video={video} /> : '';
    if (video.length !== 0) {
      smallVideo = hidden ? <ScrollDownVidList video={video} onScroll={this.handleScroll} /> : '';
      channelInfoBar = <ChannelInfoBar video={video} handleClick={this.handleClick} />;
    }
    return (
      <div className="mypart">
        <VideoPlayer video={video} />
        {channelInfoBar}
        {smallVideo}
        <PlaceholderDiv />
        <PlaceholderDiv />
        {popup}
      </div>
    );
  }
}

export default App;

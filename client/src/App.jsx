/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import VideoPlayer from './Videoplayer.jsx';
import ChannelInfoBar from './ChannelInfoComp/ChannelInfoBar.jsx';
import PlaceholderDiv from './Placeholder.jsx';
import ScrollDownVidList from './ScrollDownVid.jsx';
import Widget from './PopupWidget/PopForm.jsx';


const Body = styled.div`
  font-family: Roobert, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: [],
      hidden: false,
      clicked: false,
      open: true,
      tagName: '',
    };
    this.get = this.get.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeVideo = this.closeVideo.bind(this);
  }

  componentDidMount() {
    this.get();
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
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
    this.setState({
      tagName: event.target.dataset.tag,
    });
  }

  closeVideo(event) {
    event.preventDefault();
    this.setState({
      hidden: false,
      open: false,
    });
  }

  render() {
    const {
      video, hidden, clicked, open, tagName,
    } = this.state;
    let smallVideo; let channelInfoBar = '';
    if (video.length !== 0) {
      smallVideo = hidden && open ? <ScrollDownVidList video={video} onScroll={this.handleScroll} closeVideo={this.closeVideo} /> : '';
      channelInfoBar = <ChannelInfoBar video={video} handleClick={this.handleClick} />;
    }
    return (
      <Body className="mypart" id="target">
        <VideoPlayer video={video} />
        {channelInfoBar}
        {smallVideo}
        <PlaceholderDiv />
        <PlaceholderDiv />
        {clicked ? <Widget video={video} handleClick={this.handleClick} tagName={tagName} /> : ''}
      </Body>
    );
  }
}

export default App;

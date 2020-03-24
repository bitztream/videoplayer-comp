/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import VideoPlayer from './VideoPlayer.jsx';
import ChannelInfoBar from './ChannelInfoComp/ChannelInfoBar.jsx';
import PlaceholderDiv from './Placeholder.jsx';
import ScrollDownVidList from './ScrollDownVid.jsx';
import Widget from './PopupWidget/Widget.jsx';


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
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  get() {
    axios.get('/api/get')
      .then((result) => {
        this.setState({ video: result.data });
        window.addEventListener('scroll', this.handleScroll);
      })
      .catch((err) => console.log(err));
  }

  handleScroll(event) {
    event.preventDefault();
    const lastScrollY = window.scrollY;
    const InfoBaroffset = document.getElementsByClassName('MasterFlex');
    return lastScrollY >= InfoBaroffset[0].offsetTop
      ? this.setState({ hidden: true }) : this.setState({ hidden: false });
  }

  handleWindowClick() {
    const { clicked } = this.state;
    return clicked ? this.setState({ clicked: false }) : this.setState({ clicked: true });
  }

  handleClick(event) {
    const { clicked, video } = this.state;
    const similiar = video[0].videos.slice(1).map(
      (vid) => (!!(vid.tags.includes(event.target.dataset.tag))),
    ).reduce((acc, item) => {
      if (item) {
        acc = item;
      }
      return acc;
    }, false);

    if (!similiar) {
      return;
    }
    clicked
      ? this.setState({ clicked: false, tagName: event.target.dataset.tag })
      : this.setState({ clicked: true, tagName: event.target.dataset.tag });
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
        {hidden && open ? <PlaceholderDiv /> : <VideoPlayer video={video} />}
        {channelInfoBar}
        {smallVideo}
        <PlaceholderDiv />
        <PlaceholderDiv />
        <PlaceholderDiv />
        {clicked ? <Widget video={video} handleClick={this.handleClick} handleWindowClick={this.handleWindowClick} tagName={tagName} /> : ''}
      </Body>
    );
  }
}

export default App;

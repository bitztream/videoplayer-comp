/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import BrowserVideos from './BrowserVideos.jsx';

const Pointer = styled.a`
  position:absolute;
  z-index: 2;
  cursor: pointer;
  top: 20%;
  left: 0%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  border-radius: 0 3px 3px 0;

  @media only screen and (min-width:  550px) {
    top: 30%
  }
`;

const PointerRight = styled.a`
  position:absolute;
  z-index:2;
  cursor: pointer;
  top: 20%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  right: 0;
  border-radius: 3px 0 0 3px;

  @media only screen and (min-width:  550px) {
    top: 30%
  }
`;

const SlideVideo = styled.div`
  border: '3px solid yellow',
  position: 'relative',
  flexGrow: '1',
  text-Align: 'center',
`;

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num) {
    const { page } = this.state;
    const slides = document.getElementsByClassName('slides');
    if (page < 1) { this.setState({ page: slides.length - 1 }); }
    if (page < 1 && num === -1) { this.setState({ page: slides.length - 1 }); }
    else if (page === 1 && num === -1) { this.setState({ page: slides.length - 1 }); }
    else if (page <= slides.length - 1 && page !== slides.length - 1) { this.setState({ page: page + num }); }
    else if (page === slides.length - 1 && num === -1) { this.setState({ page: page + num }); }
    else (this.setState({ page: 1 }));
    console.log(page);
  }

  render() {
    const { video } = this.props;
    const { page } = this.state;
    return (
      <div className="slideshow-container" style={{ border: '3px solid red', flexGrow: '0.5' }}>
        <SlideVideo>
          {video[0].videos.map((vid, idx) => <BrowserVideos vid={vid} key={idx} page={page} id={idx} />)}
          <Pointer className="left" onClick={() => this.handleClick(-1)}>&#10094;</Pointer>
          <PointerRight className="right" onClick={() => this.handleClick(1)}>&#10095;</PointerRight>
        </SlideVideo>
      </div>
    );
  }
}

export default Videos;

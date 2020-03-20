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
`;

const SlideVideo = styled.div`
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
    const { resetDot, dot } = this.props;
    if (dot !== '') {
      resetDot();
    }
    const slides = document.getElementsByClassName('slides');
    if (slides.length !== 0 && slides.length !== 1) {
      const newpage = (((page + num) % slides.length) + slides.length) % slides.length;
      if (newpage === 0 && num === -1) this.setState({ page: slides.length - 1 });
      else if (newpage === 0 && num === 1) this.setState({ page: 1 });
      else this.setState({ page: newpage });
    }
  }

  render() {
    const { video, dot } = this.props;
    const { page } = this.state;
    const player = video[0].videos.map(
      (vid, idx) => <BrowserVideos vid={vid} key={idx} page={page} id={idx} dot={dot} />,
    );
    return (
      <div className="slideshow-container" style={{ flexGrow: '0.5' }}>
        <SlideVideo>
          {player}
          <Pointer className="left" onClick={() => this.handleClick(-1)}>&#10094;</Pointer>
          <PointerRight className="right" onClick={() => this.handleClick(1)}>&#10095;</PointerRight>
        </SlideVideo>
      </div>
    );
  }
}

export default Videos;

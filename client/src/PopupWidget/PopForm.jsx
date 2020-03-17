/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import VideoPlayer from '../Videoplayer.jsx';

const Maindiv = styled.div`
  z-index:1;
  position:fixed;
  left: 25%;
  top: 30%;
  width:100%;
  height:100%
`;

const Widget = ({ video }) => {
  return (
    <Maindiv>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <VideoPlayer video={video} />
          <div className="text">Caption Text</div>
        </div>

        {/* <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <VideoPlayer video={video} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <VideoPlayer video={video} />
          <div className="text">Caption Text</div>
        </div> */}

        {/* <a className="prev">&#10094;</a>
        <a className="next">&#10095;</a> */}
      </div>

      <div style={{ textalign: 'center' }}>
        <span className="dot">1</span>
        <span className="dot">2</span>
        <span className="dot">3</span>
      </div>
    </Maindiv>
  );
};

export default Widget;

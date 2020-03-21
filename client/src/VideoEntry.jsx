/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
  width: 1035px;
  height: auto;
  @media only screen and (max-width: 1035px) {
    width: 100%;
  }
`;

const VideoEntry = (props) => (
  <Video className="video" controls>
    <source src={props.video[0].videos[0].video_url} />
  </Video>

);

export default VideoEntry;

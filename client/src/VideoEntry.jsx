/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';

const VideoEntry = (props) => (
  <figure>
    <video className="video" width="700" height="400" controls>
      <source src={props.video.videos[0].video_url} />
    </video>
  </figure>
);

export default VideoEntry;

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import VideoEntry from '../client/src/VideoEntry.jsx';


const VideoPlayer = (props) => {
  let display = <div />;
  const { video } = props;
  if (video.length !== 0) {
    display = <VideoEntry video={video} />;
  }
  return (
    <>
      <div className="display" style={{ textAlign: 'center', backgroundColor: 'black' }}>{ display }</div>
    </>
  );
};
export default VideoPlayer;

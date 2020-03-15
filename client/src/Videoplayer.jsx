/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import VideoEtnry from './VideoEntry.jsx';


const Videoplayer = (props) => {
  let display = <div />;
  const { video } = props;
  if (video) {
    display = <div>{video.map((vid, idx) => <VideoEtnry key={idx} video={vid} />)}</div>;
  }
  return (
    <div className="display">{ display }</div>
  );
};
export default Videoplayer;

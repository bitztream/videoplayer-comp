/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';


const BrowserVideos = ({ vid, page, id, dot }) => {
  let style = { display: 'none' };
  if (dot === '') {
    if (page === id) {
      style = { display: 'block' };
    } else { style = { display: 'none' }; }
  } else if (dot >= 0) {
    if (parseInt(dot, 10) === id) {
      style = { display: 'block' };
    } else { style = { display: 'none' }; }
  }

  return (
    <div className="slides" style={style}>
      <figure>
        <video className="video" width="100%" height="auto" controls>
          <source src={vid.video_url} />
        </video>
      </figure>
    </div>
  );
};


export default BrowserVideos;

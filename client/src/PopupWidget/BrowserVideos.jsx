/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React from 'react';


const BrowserVideos = ({ vid, page, id }) => {
  console.log(page);
  let style = { display: 'none' };
  if (page === id) {
    style = { display: 'block' };
  } else { style = { display: 'none' }; }

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
